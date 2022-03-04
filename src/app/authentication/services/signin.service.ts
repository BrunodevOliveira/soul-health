import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { Signin } from '../../modelInterface/signin';


@Injectable({
  providedIn: 'root'
})
export class SigninService {

  private url = "http://localhost:3000/user"


  constructor(private http: HttpClient,
              private router: Router) { }


  signIn(user:Signin){
    return this.http.post<Signin>(this.url + '/signin', user)
  }

}
