import { filter } from 'rxjs';
import { Component, OnInit } from '@angular/core';

interface IDoctor {
  name: string;
  specialty: string;
  place: string;
}
@Component({
  selector: 'app-accredited',
  templateUrl: './accredited.component.html',
  styleUrls: ['./accredited.component.sass']
})


export class AccreditedComponent implements OnInit {


searchValue:string=''

  doctors:IDoctor[]=[]


  doctorsList:IDoctor[]= [{
    name:'Helena Riscado',
    specialty:'Ginecologista',
    place:'Santa Catarina',
  },
  {
    name:'Vladmir Kandii',
    specialty:'Urologista',
    place:'Canela',
  },
  {
    name:'Doralice Silva',
    specialty:'Pediatra',
    place:'Blumenau',
  },
  {
    name:'Rogério do Valle',
    specialty:'Clínico Geral',
    place:'Gramado',
  },
  {
    name:'Carla Machado',
    specialty:'Cirurgião',
    place:'Curitiba',
  },
  {
    name:'Silvio Brito',
    specialty:'Nutricionista',
    place:'João Pessoa',
  },
  {
    name:'Samira Beltram',
    specialty:'Oftalmologia',
    place:'Maceió',
  },
  {
    name:'Flávio Samir',
    specialty:'Geriatra',
    place:'Varginha',
  },
  {
    name:'Lucia Batista',
    specialty:'Urologista',
    place:'Niteroi',
  },
  {
    name:'Luiz Cláudio',
    specialty:'Ginecologista',
    place:'São Gonçalo',
  },
  {
    name:'Alcinéa Rodrigues',
    specialty:'Otorrinolaringologista',
    place:'Rio de Janeiro',
  },
  {
    name:'José Pinto',
    specialty:'Cirurgião',
    place:'São Paulo',
  },
  {
    name:'Andressa Leão',
    specialty:'Dermatologista',
    place:'Belo Horizonte',
    },
   {
    name:'Renata Randrin',
    specialty:'Pediatria',
    place:'Tijúca',
    },
    {
    name:'Roberto Gomes',
    specialty:'Clínico Geral',
    place:'Campos do Jordão',
    },
     {
    name:'Manoel Rocha',
    specialty:'Obstetra',
    place:'Botafogo',
  },
  ]

  constructor() { }

  search(value:Event) {
    this.searchValue = (value.target as HTMLInputElement).value
    this.doctors = this.doctorsList.filter(doctor => {
      const nameIsValid = doctor.name.toLowerCase().includes(this.searchValue.toLowerCase())
      const specialtyIsValid = doctor.specialty.toLowerCase().includes(this.searchValue.toLowerCase())
      const placeIsValid = doctor.place.toLowerCase().includes(this.searchValue.toLowerCase())
      return nameIsValid || specialtyIsValid || placeIsValid
    })
  }


  ngOnInit(): void {
    this.doctors = this.doctorsList
  }

}
