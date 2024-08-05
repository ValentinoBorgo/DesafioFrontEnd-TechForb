import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from 'src/services/registro/register.service';
import { registerBody } from 'src/services/registro/registerBody';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})

export class RegisterComponent implements OnInit{

  msgError : boolean | null | undefined;

  registerForm = this.formBuilder.group({
    nombre:['',Validators.required],
    apellido: ['',Validators.required],
    email : ['',Validators.email],
    contrasenia : ['',Validators.minLength(8)],
  })

  ngOnInit(): void {
    this.msgError = null;
  }

  constructor(private router:Router,private formBuilder:FormBuilder, private registerService:RegisterService){}


  registro(){
    if(this.registerForm.valid){
      this.registerService.registro(this.registerForm.value as registerBody).subscribe({
        error : (error) => {
          this.msgError = false;
          console.log("ERROR EN HTML : "+ error);
        },
        complete : () => {
          this.msgError = true;
          alert("Registro efectivo !");
          this.registerForm.reset();
        }
      })
    }else if(!this.registerForm.valid){
      console.log("ERROR");
      this.msgError = false;
    }
  }
  moveToLogin(){
    this.router.navigateByUrl("/login");
  }
}
