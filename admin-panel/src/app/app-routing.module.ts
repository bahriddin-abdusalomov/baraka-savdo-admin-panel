import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { MainComponent } from './pages/main/main.component';
import { LoginComponent } from './pages/auth-module/login/login.component';
import { RegisterComponent } from './pages/auth-module/register/register.component';
import { ResetPasswordComponent } from './pages/auth-module/reset-password/reset-password.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'reset', component:ResetPasswordComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: 'main', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
