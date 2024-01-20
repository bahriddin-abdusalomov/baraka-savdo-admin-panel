import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { MainComponent } from './pages/main/main.component';
import { LoginComponent } from './pages/auth-module/login/login.component';
import { RegisterComponent } from './pages/auth-module/register/register.component';
import { ResetPasswordComponent } from './pages/auth-module/reset-password/reset-password.component';
import { CommonComponent } from './pages/common/common.component';
import { ProductComponent } from './pages/product-module/product/product.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'reset', component: ResetPasswordComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'seller', component: CommonComponent },
  { path: 'seller/product/all', component: ProductComponent },
  { path: '', redirectTo: 'main', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
