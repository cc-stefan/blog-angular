import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Article} from "../../../models/article";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  @Input() article!: Article;
  @Output() editArticleEvent: EventEmitter<Article> = new EventEmitter<Article>();
  @Output() deleteArticleEvent: EventEmitter<number> = new EventEmitter<number>();

  onEditArticle(): void {
    this.editArticleEvent.emit(this.article);
  }

  onDeleteArticle(): void {
    this.deleteArticleEvent.emit(this.article.id);
  }
}
