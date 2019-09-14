import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AboutusComponent } from './aboutus/aboutus.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: '**', redirectTo: '/login' } //wildcard -- redirects user back to login page if they type random url --> should always be at the bottom of the rest of the urls
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
