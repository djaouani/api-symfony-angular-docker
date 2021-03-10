import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/models/category';
import { CategoryService } from './../../../services/category.service'
import { ArticleService } from './../../../services/article.service'


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  form: FormGroup;
  allCategories: Category[]

  constructor(private formBuilder: FormBuilder, 
    private categoryService: CategoryService,
    private articleService: ArticleService
    ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
        title: ['', Validators.required],
        picture: [''],
        categories: [''],
        content: [''],
    });
    
    this.categoryService.getAll().subscribe(data => { this.allCategories = data; console.log(data, 'data')});
  }

  onSubmit() {
    // stop here if form is invalid
    if (!this.form.valid) {
        return;
    }

    this.articleService.add(JSON.stringify(this.form.value));

    console.log(JSON.stringify(this.form.value))
}

}
