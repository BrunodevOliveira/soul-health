import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './app-shared/shared-module/shared.module';
import { PaginaUsuarioComponent } from './app-beneficiario/pagina-usuario/pagina-usuario.component';
import { SobreComponent } from './app-institucional/sobre/sobre.component';


@NgModule({
  declarations: [
    AppComponent,
    PaginaUsuarioComponent,
    PaginaUsuarioComponent,
    SobreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
