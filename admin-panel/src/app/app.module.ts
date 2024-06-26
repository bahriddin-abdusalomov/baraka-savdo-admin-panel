import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './pages/main/main.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FaqComponent } from './components/faq/faq.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './pages/auth-module/register/register.component';
import { LoginComponent } from './pages/auth-module/login/login.component';
import { ResetPasswordComponent } from './pages/auth-module/reset-password/reset-password.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from './pages/product-module/add-product/add-product.component';
import { ProductPricingComponent } from './pages/product-module/product-pricing/product-pricing.component';
import { ProductPropertiesComponent } from './pages/product-module/product-properties/product-properties.component';
import { CommonComponent } from './pages/common/common.component';
import { VerticalNavComponent } from './components/vertical-nav/vertical-nav.component';
import { ProductComponent } from './pages/product-module/product/product.component';
import { ProductAllNavComponent } from './components/product-all-nav/product-all-nav.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DialogComponent } from './components/dialog/dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ImageUrlPipe } from './pipes/image-url.pipe';
import { ConfirmationCodeComponent } from './pages/auth-module/confirmation-code/confirmation-code.component';
import { EmailVerificationComponent } from './pages/auth-module/email-verification/email-verification.component';
// import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [
//   // Boshqa sahifalar uchun konfiguratsiya
//   { path: 'boshqa-sahifa', component: ProductComponent },
// ];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CarouselComponent,
    FaqComponent,
    FooterComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    ResetPasswordComponent,
    AddProductComponent,
    ProductPricingComponent,
    ProductPropertiesComponent,
    CommonComponent,
    VerticalNavComponent,
    ProductComponent,
    ProductAllNavComponent,
    DialogComponent,
    ImageUrlPipe,
    ConfirmationCodeComponent,
    EmailVerificationComponent,
  ],
  imports: [
    NgxPaginationModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    MatIconModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDatepickerModule,
    // RouterModule.forRoot(routes),
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {
  
}
