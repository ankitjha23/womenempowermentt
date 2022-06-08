import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private baseUrl = 'http://localhost:8085/wem/women-empowerment/user';

  constructor( private http:HttpClient ) { }

  getDealersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  login(dealer:any):Observable<any>
  {
    return this.http.post(`http://localhost:8085/wem/women-empowerment/users`,dealer)
  }

  saveUser(dealer: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, dealer);
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }
 
  logOut() {
    sessionStorage.removeItem('username')
  }
}
