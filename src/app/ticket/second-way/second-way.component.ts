import { Component, OnInit } from "@angular/core";


@Component({
  selector: 'app-second-way',
  templateUrl: './second-way.component.html',
  styleUrls: ['./second-way.component.sass']
})
export class SecondWayComponent implements OnInit {

  constructor() { }

  alert() {
    alert("Código copiado!");
  }


  ngOnInit(): void {
  }

}
