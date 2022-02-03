import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { NgxSpinnerService } from "ngx-spinner";
import { Usuarios } from "src/app/models/login.model";
import { LoginService } from "src/app/services/login.service";

@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.component.html",
  styleUrls: ["./forgot-password.component.css"],
})
export class ForgotPasswordComponent implements OnInit {
  carregar = false;
  valida = false;
  erro = false;
  loginForm: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private loginService: LoginService,
    private spinner: NgxSpinnerService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.spinner.show();
    this.criarForm();
  }

  criarForm() {
    this.loginForm = this.fb.group({
      email1: this.fb.control("", [Validators.required, Validators.email]),
      email2: this.fb.control("", [Validators.required, Validators.email]),
    });
  }

  reset() {
    this.carregar = true;
    const reset = {} as Usuarios;
    reset.email = this.loginForm.controls.email1.value;

    if (
      this.loginForm.controls.email1.value ==
      this.loginForm.controls.email2.value
    ) {
      this.valida = false;
      this.erro = false;
      this.loginService.enviarEmail(reset).subscribe(
        (res) => {
          this.carregar = false;
          console.log(res);
          this.snackBar.open(res, "OK", {
            duration: 5000,
            panelClass: "warning",
          });
          this.activeModal.close();
        },
        (err) => {
          console.log(err);
          this.erro = true;
          this.snackBar.open("Erro ao realizar solicitação !!!", "OK", {
            duration: 5000,
            panelClass: "warning",
          });
          this.activeModal.close();
          this.carregar = false;
        }
      );
    } else {
      this.carregar = false;
      this.valida = true;
    }
  }
}
