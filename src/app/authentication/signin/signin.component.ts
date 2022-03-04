import { Component, OnInit } from '@angular/core';
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

  constructor(private httpclient: HttpClient,
  private router: Router,
  private signinservice: SigninService ) { }

  ngOnInit(): void {
  }


  signIn(){
    return this.signinservice.signIn(this.user).subscribe(res=> {
      console.log(res)
      localStorage.setItem('token', res.token)
      this.router.navigate(['/home-beneficiario'])
    }, err=> console.log(err))

  }

}
