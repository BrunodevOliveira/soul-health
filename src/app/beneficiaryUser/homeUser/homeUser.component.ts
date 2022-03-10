import { ConsultService } from '../homeUser/consultservice/consult.service';
import { BeneficiaryServiceService } from './beneficiaryService/beneficiary-service.service';
import { Component, OnInit } from '@angular/core';
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
    password:''
  }]

  consult:any = [{
    email: '',
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

  getconsult(){

    const userIdent = <any> this.logservice.UserIdent();
    const userEmail = userIdent.email
    this.consultservice.getconsult(userEmail).subscribe(res=>{
      this.consult = res
    }, err=> console.log(err)
    )

  }


}
