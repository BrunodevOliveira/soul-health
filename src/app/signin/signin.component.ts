import { Signin } from './../modelInterface/signin';
import { SigninService } from './../service/signin.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
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
      this.router.navigate(['/home-usuario'])
    })

  }


}
