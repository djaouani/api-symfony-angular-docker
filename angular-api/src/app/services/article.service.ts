import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import {Article} from './../models/article';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Article[]>{
    return this.httpClient.get<Article[]>(`${environment.apiUrl}/articles`).pipe(
        map((jsonArray: Article[]) => jsonArray.map(jsonItem => Article.fromJson(jsonItem))
      )
    );
  }

  add(datas){
    console.log('ggg')
    return this.httpClient.post<Article>(`${environment.apiUrl}/articles`, datas).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
    ;
  }
}
  
