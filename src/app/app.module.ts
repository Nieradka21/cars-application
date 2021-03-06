import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './services/login.service';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './services/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CarsService } from './services/cars.service';
import { ForgotPasswordComponent } from './components/login/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/login/reset-password/reset-password.component';
import {  MatIconModule, MatSnackBarModule, MatTooltipModule } from '@angular/material';
import 'hammerjs';
import { HeaderComponent } from './components/header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    HeaderComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatIconModule,
    FormsModule,
    NgbModule,
    NgxSpinnerModule,
    HttpClientModule,
    CarouselModule,
    



    AppRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [LoginService, CarsService, AuthGuard],
  bootstrap: [AppComponent],
  entryComponents: [ForgotPasswordComponent]
})
export class AppModule { }
