import { BeneficiaryModel } from '../model/beneficiary-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class BeneficiaryServiceService {


  url = 'http://localhost:3000/user'
  constructor(private http: HttpClient,
              private router: Router) { }


  getuser(id:string){
    return this.http.get(`${this.url}/oneuser/${id}`)
  }

  updateUser(id:string, user:BeneficiaryModel){

    return this.http.post(`${this.url}/update/${id}`, user)
  }

  deleteUser(id:string){

    return this.http.delete(`${this.url}/delete/${id}`)

  }


}
