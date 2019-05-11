import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

 

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http : HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http
      .get<Category[]>(`http://localhost:8010/test/rooms/popular`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}

