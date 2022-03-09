import { Component, OnInit, Renderer2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SigninService } from '../services/signin.service';
import { Signin } from '../models/signin';


@Component({
  selector: 'signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.sass']
})
export class SigninComponent implements OnInit {

  user:Signin =  {
    email:'',
    password:'',
    token:''
  }

  attempts = 0
  captcha!: string

  resValidation: any = ''

  constructor(private httpclient: HttpClient,
  private router: Router,
  private signinservice: SigninService
  ) { }


  ngOnInit(): void {
  }

  signIn(){
    return this.signinservice.signIn(this.user).subscribe(res=> {
      localStorage.setItem('token', res.token)
      this.attempts = 0
      this.router.navigate(['/home-beneficiario'])
    },
    err=> {
      this.resValidation = err.error.message
      // console.log(err)
      if(err){
        this.attempts++
        this.captcha = ''
        return
      }
    })
  }

  solutionCaptcha(captchaResponse: any) {
    this.captcha = captchaResponse
    this.attempts = 0
  }

}
