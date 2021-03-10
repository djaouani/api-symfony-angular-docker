import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticleResolver } from 'src/app/resolvers/article.resolver';
import { ArticleService } from './../../../services/article.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public articles: Array<Article>;

  constructor(private route: ActivatedRoute, private arrticleService: ArticleService) { }

  ngOnInit() {
    
    this.route.data.subscribe(data => {
      this.articles = data.articles      
    })
    

    console.log(this.articles, 'oooo')
  }

}
