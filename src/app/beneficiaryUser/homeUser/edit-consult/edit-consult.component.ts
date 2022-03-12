import { Consult } from './../model/consult';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultService } from './../consultservice/consult.service';
import { Component, OnInit } from '@angular/core';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-edit-consult',
  templateUrl: './edit-consult.component.html',
  styleUrls: ['./edit-consult.component.sass']
})
export class EditConsultComponent implements OnInit {

  constructor(private consultservice: ConsultService, private router: Router, private activeRouter: ActivatedRoute) { }

  consult:Consult = {
    email: '',
    specialty: '',
    date: ''
  }

  ngOnInit(): void {
  }

  updateconsult(){
    const id_consult = <string> this.activeRouter.snapshot.params['id'];
    this.consultservice.updateConsult(id_consult, this.consult).subscribe(res=>{
      this.router.navigate(['/home-beneficiario'])

    },
    err=>console.log(err))
  }

}
