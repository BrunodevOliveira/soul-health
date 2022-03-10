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


  constructor(private router: Router,
    private beneficierservice: BeneficiaryServiceService,
    private logservice: LogService,
) { }

activeTab: string = 'saudenatela';

  handleActiveTab(tab:string){
    this.activeTab = tab;
  }


  ngOnInit(): void {

    this.identUser()

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


}
