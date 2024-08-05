import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, delay, map, of, tap, throwError } from 'rxjs';
import { LoginRequest } from './loginRequest';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  private user:any = "";

  //Es un objeto que mantiene el valor actual y lo emite cuando es necesario
  currentUserLoginOn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  currentUserData: BehaviorSubject<String> =new BehaviorSubject<String>("");

  constructor(private http:HttpClient, private cookie:CookieService) { 
    this.currentUserLoginOn = new BehaviorSubject<boolean>(cookie.get("access_token")!=null);
    this.currentUserData = new BehaviorSubject<String>(cookie.get("access_token") || "");
  }

  login(credentials:LoginRequest):Observable<any>{
    const options = { withCredentials: true };
    return this.http.post<any>(environment.urlApi+"users/login?email="
    +credentials.email+"&contrasenia="+credentials.contrasenia, options).pipe(
      tap( (userData) => {
        this.cookie.set("access_token", userData.access_token);
        this.cookie.set("datos", userData.datos);
        this.currentUserData.next(userData.access_token);
        this.currentUserLoginOn.next(true);
      }),
      map((userData) => userData.access_token),
      catchError(this.handleError),
      delay(2000)
    )
  }

  logout():void{
    this.cookie.delete("access_token");
    this.currentUserLoginOn.next(false);
  }

  get userData():Observable<String>{
    return this.currentUserData.asObservable();
  }

  private handleError(error:HttpErrorResponse){
    if(error.status===0){
      console.error('Se ha producio un error ', error.error);
    }
    else{
      console.error('Backend retornó el código de estado ', error);
    }
    return throwError(()=> new Error('Algo falló. Por favor intente nuevamente.'));
  }

  setUser(user: any){
    this.user = user;
  }

  getUser():any{
    return this.user;
  }

  obtenerToken(): Observable<boolean> {
    const token = !!this.cookie.get("access_token");
    return of(token);
  }

}
