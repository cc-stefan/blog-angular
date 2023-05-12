import {Component, Output, EventEmitter, Input} from '@angular/core';
import {Article} from "../../../models/article";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() tempArticle!: Article;
  @Output() addArticleEvent: EventEmitter<Article> = new EventEmitter<Article>();
  @Output() updateArticleEvent: EventEmitter<Article> = new EventEmitter<Article>();
  @Output() closeEvent: EventEmitter<void> = new EventEmitter<void>();

  onClose(): void {
    this.closeEvent.emit();
  }

  onSave(): void {
    if (this.tempArticle.id) {
      this.updateArticleEvent.emit(this.tempArticle);
    } else {
      this.addArticleEvent.emit(this.tempArticle);
    }
  }
}
