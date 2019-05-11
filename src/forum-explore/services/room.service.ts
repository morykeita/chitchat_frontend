import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Room } from '../models/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private http : HttpClient) { }


  getRooms(): Observable<Room[]> {
    return this.http
      .get<Room[]>(`http://localhost:9002/category/5ca79446e8788f22ec9fd9db`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
