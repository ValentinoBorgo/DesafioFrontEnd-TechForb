import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LoginComponent } from 'src/components/login/login.component';
import { LoginserviceService } from 'src/services/auth/loginservice.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  nombre:any = "";

  menu: boolean = false;


  constructor(private router:Router, private user:LoginserviceService, private cookie:CookieService){}

  activeNavItem:string | null = null;

  // ngDoCheck(): void{
  //   if(this.user.getUser() != null && this.user.getUser() != ""){
  //     this.setNombre(this.user.getUser());
  //     sessionStorage.setItem("user", this.user.getUser());
  //   }else{
  //     this.setNombre(sessionStorage.getItem("user"));
  //   }
  // }

  active(NavItem:string){
    this.activeNavItem = NavItem;
  }

  Menu() {
    this.menu = !this.menu;
  }

  logout(){
    this.cookie.delete("access_token");
    this.router.navigateByUrl('/login');
  }

  setNombre(nombre : any){
    this.nombre = nombre;
  }

  getNombre():any{
    return this.nombre;
  }
}
