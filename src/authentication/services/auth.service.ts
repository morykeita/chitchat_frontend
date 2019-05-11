import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';


import { User } from '../models/user';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


@Injectable(
  {
    providedIn: 'root'
  }
)
export class AuthService {
  private BASE_URL = 'http://localhost:1337';
  domain ="http://localhost:9001";


  constructor(private http: HttpClient) {}

  getToken(): string {
    return localStorage.getItem('token');
  }

  logIn(username: string, password: string): Observable<any> {
    console.log('inside logn()')
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded',
        'Authorization': 'Basic VVNFUl9DTElFTlRfQVBQOnBhc3N3b3Jk'
      })
    }
    username = "admin";
    password = "password"
    // url = `${this.BASE_URL}/oauth/'+ token?grant_type='+ user.grant_type + '&username=' + username +'&password='+user.password,null,httpOptions).pipe(map(res => res.json()));`;
    // return this.http.post<User>(url, {email, password});
    return this.http.post(this.domain + '/oauth/token?grant_type=password' + '&username=' + username +'&password='+password,null,httpOptions).pipe(map(res => res));
  }

  signUp(payload): Observable<any> {

    const url = `${this.BASE_URL}/register`;
    console.log('this is the payload')
    console.log(payload)
    var val = this.http.post('http://localhost:9001/auth/register', payload);;
    return this.http.post('http://localhost:9001/auth/register', payload).pipe(map(res => res));
    //return null
  }

  getStatus(): Observable<User> {
    const url = `${this.BASE_URL}/status`;
    return this.http.get<User>(url);
  }
}
