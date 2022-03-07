import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './beneficiaryUser/homeUser/authguard.guard';

const routes: Routes = [
  {
    path: '', redirectTo: '/', pathMatch: 'full'
  },
  {
    path: 'home-beneficiario', canActivate: [AuthguardGuard],
    loadChildren: () => import('./beneficiaryUser/beneficiaryUser.module').then(c => c.BeneficiaryUserModule)
},
  {
    path: 'login',
    loadChildren: () => import('./authentication/authentication.module').then(c => c.AutenticationModule)
},
  {
    path: 'cadastro',
    loadChildren: () => import('./register/register.module').then(c => c.RegisterModule)
},
  {
    path: 'sobre',
    loadChildren: () => import('./aboutInstitutional/aboutInstitutional.module').then(c => c.InstitutionalModule)
  },
{
    path: 'departamentos',
    loadChildren: () => import('./departments/departments.module').then(c => c.DepartmentsModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
