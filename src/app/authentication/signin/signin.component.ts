import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.sass']
})
export class SigninComponent implements OnInit {

  user:any =  {
    email:'',
    password:'',
    token:''
  }
  constructor() { }

  ngOnInit(): void {
  }

}
