import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'beneficiaryUser',
  templateUrl: './homeUser.component.html',
  styleUrls: ['./homeUser.component.sass']
})
export class HomeUserComponent implements OnInit {

  constructor() { }

activeTab: string = 'saudenatela';

  handleActiveTab(tab:string){
    this.activeTab = tab;
  }

  ngOnInit(): void {
  }

}
