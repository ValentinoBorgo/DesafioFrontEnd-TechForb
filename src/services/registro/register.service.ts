import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { registerBody } from './registerBody';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  currentUserData: BehaviorSubject<String> =new BehaviorSubject<String>("");

  constructor(private http:HttpClient,  private cookie:CookieService) { 
    this.currentUserData = new BehaviorSubject<String>(cookie.get("access_token") || "");
  }

  registro(body:registerBody):Observable<any>{

    return this.http.post<any>(environment.urlApi+"users/registrar/newUser",body).pipe(
      catchError((error:HttpResponse<any>) => {
        console.log("Error de registro : "+error);
        return throwError(error);
      })
    )
}
}
