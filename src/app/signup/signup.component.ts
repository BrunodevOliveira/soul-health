import { SignupService } from './../service/signup.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Signup } from '../modelInterface/signup';

@Component({
  selector: 'app-signup',
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

  onSubmit(){
    this.signupService.signUp(this.user).subscribe(res => {
      localStorage.setItem('token', res.token)
      this.router.navigate(['/home-usuario'])
    },
    err => console.log(err))
  }

  ngOnInit(): void {

  }

}
