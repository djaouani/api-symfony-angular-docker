import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Article} from './../models/article';
import {ArticleService} from './../services/article.service';
import { environment } from './../../environments/environment';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ArticleResolver implements Resolve<any> {

  constructor(private httpService: HttpClient, private articleService: ArticleService) { }
  
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Article[]> {
   return this.articleService.getAll();
  }
}
