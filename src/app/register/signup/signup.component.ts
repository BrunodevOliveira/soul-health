import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Signup } from '../models/signup';
import { SignupService } from '../services/signup.service';



@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {

  constructor(private signupService: SignupService, private router: Router) { }

  user:Signup =  {
    email:'',
    password:'',
    token:''
  }

  resValidation: any = ''

  onSubmit(){
    this.signupService.signUp(this.user).subscribe(res => {
      localStorage.setItem('token', res.token)
      this.router.navigate(['/home-beneficiario'])
    },
    err=> {this.resValidation = err.error.message
      console.log(err)})
  }

  ngOnInit(): void {

  }

}
