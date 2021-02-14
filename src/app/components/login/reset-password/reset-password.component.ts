import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Usuarios } from 'src/app/models/login.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  carregar = false;
  resetForm: FormGroup;
  token: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private loginService: LoginService
  ) {
    this.criarForm();
  }

  ngOnInit() {
    this.token = this.activatedRoute.snapshot.queryParamMap.get("code");
    console.log(this.token)
  }

  criarForm() {
    this.resetForm = this.fb.group({
      pass1: this.fb.control('', [Validators.required, Validators.minLength(6)]),
      pass2: this.fb.control('', [Validators.required, Validators.minLength(6)]),
    })
  }


  login() {
    const reset = {} as Usuarios;
    reset.senha = this.resetForm.controls.pass1.value;
    reset.token = this.token;
    this.loginService.resetPassword(reset)
      .subscribe(
        res => {
          console.log(res)
          this.resetForm.reset();
        },
        err => {
          this.carregar = false;
          console.log(err)
        }
      )


  }

}
