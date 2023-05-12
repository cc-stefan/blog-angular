import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Article} from "../../../models/article";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  @Input() article!: Article;
  @Output() editArticleEvent = new EventEmitter<Article>();

  onEditArticle() {
    this.editArticleEvent.emit();
  }
}
