import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteModule } from './cliente';
import { GerenteModule } from './gerente';
import { AdministradorModule } from './administrador';


@NgModule({
  declarations: [
    AppComponent,   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClienteModule,
    GerenteModule,
    AdministradorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
