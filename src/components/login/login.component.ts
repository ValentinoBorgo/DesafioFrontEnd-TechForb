import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LoginRequest } from 'src/services/auth/loginRequest';
import { LoginserviceService } from 'src/services/auth/loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{

  msgError: boolean = false;

  spinner: boolean = false;

  verContrasenia:boolean = false;

  loginError:string="";
  loginForm = this.formBuilder.group({
    email:['',Validators.email],
    contrasenia: ['',Validators.required],
  })

  constructor(private formBuilder:FormBuilder, private router:Router, private loginService: LoginserviceService,
    private cookie:CookieService
  ) { }

  ngOnInit(): void {
    
  }

  progress(){
    setTimeout(() => {
      this.spinner = false;
    }, 2000);
  }

  moveToRegister(){
    this.router.navigateByUrl("/register");
  }

  login(){
    if(this.loginForm.valid){
      this.loginError="";
      this.loginService.setUser(this.loginForm.value.email);
      this.spinner = true;
      this.loginService.login(this.loginForm.value as LoginRequest).subscribe({
        next: (userData) => {
          this.progress();
        },
        error: (errorData) => {
          this.spinner = false;
          this.msgError = true;
          this.loginError = errorData;
        },
        complete: () => {
          this.router.navigateByUrl('/log/dashboard');
          this.loginForm.reset();
        }
      })
    }else{
      this.msgError = true;
      this.loginForm.markAllAsTouched();
      alert("Ingrese los datos de los 2 campos");
    }
  }

  mostrarContrasenia(){
    this.verContrasenia = !this.verContrasenia;
  }
}
