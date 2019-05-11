import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// const routes: Routes = [];

import * as fromContainers from './containers';


 const routes: Routes = [
  { path: '', component : fromContainers.HomeComponent },
  { path: 'home', component : fromContainers.HomeComponent },
  // { path: 'new', component : fromContainers.CategoriesComponent },
  // { path: ':categoryId', component : fromContainers.CategoryItemComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ForumRoutingModule { }
