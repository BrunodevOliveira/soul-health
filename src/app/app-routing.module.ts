import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PaginaUsuarioComponent } from './app-beneficiario/pagina-usuario/pagina-usuario.component';
import { SobreComponent } from './app-institucional/sobre/sobre.component';

const routes: Routes = [
  {
    path:'home-usuario', component: PaginaUsuarioComponent
  },
  {
    path:'sobre', component: SobreComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
