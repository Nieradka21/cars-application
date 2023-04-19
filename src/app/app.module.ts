import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgxSpinnerModule } from "ngx-spinner";
import { NgbCarouselModule, NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginService } from "./services/login.service";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AuthGuard } from "./services/auth.guard";
import { LoginComponent } from "./components/login/login.component";
import { HomeComponent } from "./components/home/home.component";
import { CarsService } from "./services/cars.service";
import { ForgotPasswordComponent } from "./components/login/forgot-password/forgot-password.component";
import { ResetPasswordComponent } from "./components/login/reset-password/reset-password.component";
import "hammerjs";
import { HeaderComponent } from "./components/header/header.component";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatTooltipModule } from "@angular/material/tooltip";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { CarouselModule } from "ngx-owl-carousel-o";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    HeaderComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    FormsModule,
    NgbModule,
    NgxSpinnerModule,
    HttpClientModule,
    MatTooltipModule,
    NgbCarouselModule,
    CarouselModule,

    AppRoutingModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [LoginService, CarsService, AuthGuard],
  bootstrap: [AppComponent],
  entryComponents: [ForgotPasswordComponent],
})
export class AppModule {}
