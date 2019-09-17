import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { LoginUser } from '../components/login/LoginUser';

@Injectable({providedIn: 'root'})

export class ConnectionServiceService {

 

  private _urlLogin = 'http://localhost:8080/Login/login';

  constructor(private http: HttpClient) { 

  }

  login(user: LoginUser){
    return this.http.post<any>(this._urlLogin, user).pipe(
      catchError(
        (err: HttpErrorResponse)=>{
          console.log(err)
          return throwError('error in http login')
        }
      )

    )
  }
}
