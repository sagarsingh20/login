import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
 {
   path:'login',
   loadChildren:()=> import('./login/login.module').then(m =>m.LoginModule)
 },
 {
    path:'',
    loadChildren:()=> import('./signup/signup.module').then(m =>m.SignupModule)
 },
 {
   path:'dashboard',
   loadChildren:()=> import('./dashboard/dashboard.module').then(m =>m.DashboardModule)
 },
 {
  path: '',
  redirectTo: '',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
