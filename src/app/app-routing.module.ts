import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PaginaUsuarioComponent } from './app-beneficiario/pagina-usuario/pagina-usuario.component';

const routes: Routes = [
  {
    path: "", redirectTo: '/', pathMatch: 'full'
  },
  {
    path:'home-usuario', component: PaginaUsuarioComponent
  },
  {
    path:'signup', component: SignupComponent
  },
  {
    path: 'signin', component: SigninComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
