import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import * as fromContainers from './containers'



 const routes: Routes = [
  { path: '', component : fromContainers.LoginComponent },
  { path: 'login', component : fromContainers.LoginComponent },
  { path: 'signup', component : fromContainers.SignupComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
