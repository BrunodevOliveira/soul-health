import { Consult } from './model/consult';
import { ConsultService } from '../homeUser/consultservice/consult.service';
import { BeneficiaryServiceService } from './beneficiaryService/beneficiary-service.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LogService } from 'src/app/authentication/services/log.service';


@Component({
  selector: 'beneficiaryUser',
  templateUrl: './homeUser.component.html',
  styleUrls: ['./homeUser.component.sass']
})
export class HomeUserComponent implements OnInit {


  user: any = [{
    name: '',
    cpf: '',
    phone: '',
    email:'',
  }]

  consult:any = [{
    specialty: '',
    date: ''
  }]


  constructor(private router: Router,
    private beneficierservice: BeneficiaryServiceService,
    private logservice: LogService,
    private consultservice: ConsultService) { }

activeTab: string = 'planos';

  handleActiveTab(tab:string){
    this.activeTab = tab;
  }


  ngOnInit(): void {

    this.identUser()
    this.getconsult()


  }

// metodas para manipular usuarios
    identUser(){
      const userIdent = <any> this.logservice.UserIdent();
      const userId = userIdent.id

      this.beneficierservice.getuser(userId).subscribe(res=>{

        return this.user = res

      }, err=>console.log(err))
    }

    deleteUser(){

      const userIdent = <any> this.logservice.UserIdent();
      const userId = userIdent.id

      this.beneficierservice.deleteUser(userId).subscribe(res=>{

      }, err=>console.log(err))
      this.router.navigate(['/app-app-home'])
      localStorage.removeItem('token');

    }

    updateUser() {
      const userIdent = <any> this.logservice.UserIdent()
      const userId = userIdent.id

      this.beneficierservice.updateUser(userId, this.user).subscribe(res=> {
        this.user = res
        this.identUser()
        //location.reload()
      }, err=> console.log(err))

    }
  // metodas para manipular consultas
  getconsult(){

    const userIdent = <any> this.logservice.UserIdent();
    const userEmail = userIdent.email
    this.consultservice.getconsult(userEmail).subscribe(res=>{
      this.consult = res
    }, err=> console.log(err)
    )

  }

    deleteConsult(id:string){

      this.consultservice.deleteconsult(id).subscribe(res=>{
        this.getconsult();
      }, err=>console.log(err))

  }

  updateconsult(id:string){
    this.consultservice.updateConsult(id, this.consult).subscribe(res=>{

    },
    err=>console.log(err))
  }


}

