import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";
import { CurrentBeneficiaryModel } from 'src/app/beneficiaryUser/homeUser/model/current-beneficiary-model';


@Injectable({
  providedIn: 'root'
})
export class LogService {

  helper = new JwtHelperService();
  currentUser: CurrentBeneficiaryModel = {
    email:'',
    id:''
  }

  constructor() { }


  loggedIn():Boolean {
    return !!localStorage.getItem('token')
  }

  UserIdent(){

    const getToken:any = localStorage.getItem('token')

    const decodedToken = this.helper.decodeToken(getToken)

    this.currentUser.email = decodedToken.email;
    this.currentUser.id = decodedToken.id;

    return this.currentUser

  }

}
