import {Component, Input} from '@angular/core';
import {Article} from "../../../models/article";

@Component({
  selector: 'app-article-one',
  templateUrl: './article-one.component.html',
  styleUrls: ['./article-one.component.css']
})
export class ArticleOneComponent {
  @Input() article!: Article;
}
