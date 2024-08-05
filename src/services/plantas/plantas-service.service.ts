import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, catchError, Observable, Subject, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class PlantasService {

  currentUserData: BehaviorSubject<String> =new BehaviorSubject<String>("");

  private $refresh = new Subject<void>();

  constructor(private http:HttpClient, private cookie:CookieService) { 
    this.currentUserData = new BehaviorSubject<String>(cookie.get("access_token") || "");
  }

  getToken():HttpHeaders{
    const token = this.cookie.get('access_token');
    const headers = new HttpHeaders();
    return headers.set('Authorization', `Bearer ${token}`);
  }

  getRefresh(){
    return this.$refresh.asObservable();
  }

  getPlantas():Observable<any>{

    const headers = this.getToken();

    return this.http.get<any>(environment.urlApi+"planta/get", { headers })
  }

  getTotalizadores(){
    const headers = this.getToken();

    return this.http.get<any>(environment.urlApi+"planta/getTotalizadores", { headers })
  }

  getMaxSensoresDeshabilitados(){
    const headers = this.getToken();

    return this.http.get<any>(environment.urlApi+"sensor/sensoresDeshabilitados", { headers })
  }

  apiPaises(){
    return this.http.get<any>("https://restcountries.com/v3.1/all?fields=name,flags");
  }

  postPlanta(planta:any):Observable<any>{

    const headers = this.getToken();

    return this.http.post<any>(environment.urlApi+"planta/crear",planta, {headers}).pipe(
      catchError((error:HttpResponse<any>) => {
        console.log("Error para crear planta ! : "+error);
        return throwError(error);
      })
    )

    .pipe(
      tap (() => {
        this.$refresh.next();
      })
    )
  }

  updatePlanta(idPlanta:Int16Array, planta:any):Observable<any>{

    const headers = this.getToken();

    return this.http.put<any>(`${environment.urlApi}planta/${idPlanta}`, planta, { headers })

     .pipe(
       tap (() => {
         this.$refresh.next();
       })
     )

  }

  deletePlanta(idPlanta:Int16Array):Observable<any>{

    const headers = this.getToken();

    return this.http.delete<any>(environment.urlApi+"planta/"+idPlanta, { headers, responseType : 'text' as 'json' })

    .pipe(
      tap (() => {
        this.$refresh.next();
      })
    )

  }

}
