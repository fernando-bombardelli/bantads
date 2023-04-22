import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalTelaInicialComponent } from './principal/components/principal-tela-inicial/principal-tela-inicial.component';


const routes: Routes = [
  {path: 'principal', component: PrincipalTelaInicialComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
