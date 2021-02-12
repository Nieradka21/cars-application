import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { Usuarios } from 'src/app/models/login.model';
import { LoginService } from 'src/app/services/login.service';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', './login.component.font.css']
})
export class LoginComponent implements OnInit {



  carregar = false;
  loginForm: FormGroup;
  error = false;


  constructor(private fb: FormBuilder,
    private router: Router,
    private spinner: NgxSpinnerService,
    private loginService: LoginService,
    private modalService: NgbModal
  ) {

    this.loginForm = this.fb.group({

      email: this.fb.control('', [Validators.required]),
      pass: this.fb.control('', [Validators.required, Validators.minLength(3)]),
    })
  }

  ngOnInit(): void {
    this.spinner.show();
    sessionStorage.clear();
  }


  login() {
    this.carregar = true;
    const login = {} as Usuarios;
    login.username = this.loginForm.controls.email.value;
    login.password = this.loginForm.controls.pass.value;

    this.loginService.login(login)
      .subscribe(
        res => {
          sessionStorage['token'] = res.token;
          this.loginService.setUser(res);
          this.router.navigate(['/home']);
          this.carregar = false;
        },
        err => {
          this.error = true;
          this.carregar = false;
          console.log(err)
        }
      )
  }


  resetPass() {
    const ref = this.modalService.open(ForgotPasswordComponent, { centered: true })
  }

}
