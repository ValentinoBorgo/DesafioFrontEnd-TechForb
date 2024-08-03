import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from 'src/pages/home/home.component';
import { LoginComponent } from 'src/components/login/login.component';
import { RegisterComponent } from 'src/components/register/register.component';

const routes: Routes = [
  {path : '', redirectTo:'/login', pathMatch:'full'},
  {path : 'login', component : LoginComponent},
  {path : 'log/dashboard', component : HomeComponent},
  {path : 'register', component : RegisterComponent},
  /*
  {path : 'competencias'},
  {path : 'partidos'},
  {path : 'equipos'},
  */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
