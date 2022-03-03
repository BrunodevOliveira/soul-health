import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Signup } from '../modelInterface/signup';



@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private url = "http://localhost:3000/user"

  constructor(private http: HttpClient) { }

  signUp(user: Signup) {
    return this.http.post<Signup>(this.url + '/signup', user)
  }
}
