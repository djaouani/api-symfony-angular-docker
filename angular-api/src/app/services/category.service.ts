import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import {Category} from './../models/category';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Category[]>{
    return this.httpClient.get<Category[]>(`${environment.apiUrl}/categories`).pipe(
      map((jsonArray: Category[]) => jsonArray.map(jsonItem => Category.fromJson(jsonItem))
      )
    );
  }
}
