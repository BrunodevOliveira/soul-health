import { EditConsultComponent } from './homeUser/edit-consult/edit-consult.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeUserComponent } from './homeUser/homeUser.component';

const routes: Routes = [
  {
    path: '',
    component: HomeUserComponent,
  },
  {
    path: 'edit/:id',
    component: EditConsultComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeneficiaryUserRoutingModule { }
