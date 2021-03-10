import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/article/list/list.component';
import { CreateComponent } from './components/article/create/create.component';
import { ReadComponent } from './components/article/read/read.component';
import { ArticleResolver } from './resolvers/article.resolver';


const routes: Routes = [ 
  { path: 'articles', component: ListComponent,  resolve: {
    articles: ArticleResolver 
  }, },
  { path: 'articles/create', component: CreateComponent },
  { path: 'articles/read/:id', component: ReadComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
