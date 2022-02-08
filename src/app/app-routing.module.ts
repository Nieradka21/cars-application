import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { ResetPasswordComponent } from "./components/login/reset-password/reset-password.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { AuthGuard } from "./services/auth.guard";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "", redirectTo: "login", pathMatch: "full" },
  {
    path: "home",
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  { path: "reset", component: ResetPasswordComponent },
  {
    path: "**",
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
