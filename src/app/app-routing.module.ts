import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// const routes: Routes = [];


 const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'explore' },
  // {
  //   path: 'me',
  //   loadChildren: '../authentication/authentication.module#AuthenticationModule',
  // },
  {
    path: 'explore',
    loadChildren: '../forum-explore/forum-explore.module#ForumExploreModule',
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
