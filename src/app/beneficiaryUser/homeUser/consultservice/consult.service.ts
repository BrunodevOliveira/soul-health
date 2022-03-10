import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ConsultService {

  url = 'http://localhost:3000/consult'

  constructor(private http: HttpClient,
             private router: Router) { }

  getconsult(email:string){
    return this.http.get(`${this.url}/showconsults/${email}`)
  }


}
