import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aboutInstitutional',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})

export class AboutComponent implements OnInit {

  constructor() { }

// Função controladora da Tab selecionada pelo usuário, para exibir seu conteúdo em tela.
 activeTab: string = 'institucional';

  handleActiveTab(tab:string){
    this.activeTab = tab;
  }


  ngOnInit(): void {
  }

}
