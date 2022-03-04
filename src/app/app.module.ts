import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './app-shared/shared-module/shared.module';
import { PaginaUsuarioComponent } from './app-beneficiario/pagina-usuario/pagina-usuario.component';
import { SobreComponent } from './app-institucional/sobre/sobre.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './app-shared/footer/footer.component';
import { SigninComponent } from 'src/app/signin/signin.component';



@NgModule({
  declarations: [
    AppComponent,
    PaginaUsuarioComponent,
    PaginaUsuarioComponent,
    SignupComponent,
    FooterComponent,
    SobreComponent,
    SigninComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
