import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-add-article-button',
  templateUrl: './add-article-button.component.html',
  styleUrls: ['./add-article-button.component.css']
})
export class AddArticleButtonComponent {
  @Output() addArticleEvent = new EventEmitter();

  onAddArticle() {
    this.addArticleEvent.emit();
  }
}
