import { style } from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { Usuarios } from "src/app/models/login.model";
import { LoginService } from "src/app/services/login.service";

@Component({
  selector: "app-reset-password",
  templateUrl: "./reset-password.component.html",
  styleUrls: ["./reset-password.component.css"],
})
export class ResetPasswordComponent implements OnInit {
  carregar = false;
  resetForm: FormGroup;
  token: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private loginService: LoginService,
    private snackBar: MatSnackBar,
    private spinner: NgxSpinnerService
  ) {
    this.criarForm();
  }

  ngOnInit() {
    this.token = this.activatedRoute.snapshot.queryParamMap.get("code");
    this.spinner.show();
    console.log(this.token);
  }

  criarForm() {
    this.resetForm = this.fb.group(
      {
        pass1: this.fb.control("", [
          Validators.required,
          Validators.minLength(6),
        ]),
        pass2: this.fb.control("", [
          Validators.required,
          Validators.minLength(6),
        ]),
      },
      { validator: this.checkPasswords }
    );
  }

  checkPasswords(group: FormGroup) {
    // here we have the 'passwords' group
    let pass = group.controls.pass1.value;
    let confirmPass = group.controls.pass2.value;

    return pass === confirmPass ? null : { notSame: true };
  }

  login() {
    this.carregar = true;
    const reset = {} as Usuarios;
    reset.senha = this.resetForm.controls.pass1.value;
    reset.token = this.token;

    if (
      this.resetForm.controls.pass1.value == this.resetForm.controls.pass2.value
    ) {
      this.loginService.resetPassword(reset).subscribe(
        (res) => {
          console.log(res);
          this.resetForm.reset();
          this.carregar = false;
          let msg: string = "Senha alterada com sucesso!";
          this.snackBar.open(msg, "OK", { duration: 3000 });
        },
        (err) => {
          this.carregar = false;
          let msg: string = "Erro ao realizar solicitação!";
          this.snackBar.open(msg, "OK", {
            duration: 3000,
            panelClass: "warning",
          });
          console.log(err);
        }
      );
    } else {
      this.carregar = false;
    }
  }
}
