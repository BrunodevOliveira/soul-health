import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.sass']
})
export class SobreComponent implements OnInit {

  constructor() { }


 activeTab: string = 'institucional';
// Função controladora da Tab selecionada pelo usuário, para exibir seu conteúdo em tela.
  handleActiveTab(tab:string){
    this.activeTab = tab;
  }


  ngOnInit(): void {
  }

}
