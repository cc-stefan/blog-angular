import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Article} from "../../../models/article";
import {Router} from "@angular/router";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  @Input() article!: Article;
  @Output() editArticleEvent: EventEmitter<Article> = new EventEmitter<Article>();
  @Output() deleteArticleEvent: EventEmitter<number> = new EventEmitter<number>();

  constructor(private router: Router) {
  }

  onEditArticle(): void {
    this.editArticleEvent.emit(this.article);
  }

  onDeleteArticle(): void {
    this.deleteArticleEvent.emit(this.article.id);
  }

  onReadMore() {
    this.router.navigate(['/articles', this.article.id]);
  }
}
