import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { LoginUser } from '../components/login/LoginUser';

@Injectable({providedIn: 'root'})

export class ConnectionServiceService {

 

  private _urlLogin = 'http://localhost:8080/Login/login';

  public token ="";


  constructor(private http: HttpClient) { 

  }
  login(userName, password, cliantType): Observable<any>{
    let url = this._urlLogin + '?name=' + userName + "&password=" + password + "&clientType=" + cliantType;
    console.log(url)
    return this.http.post(url, null, {observe : 'response', responseType: 'text'});
  }

}
