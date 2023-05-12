import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent {
  @Input() page: number = 1;
  @Input() pageSize: number = 3;
  @Input() isOnReadOneArticlePage: boolean = false;
  @Output() nextPage: EventEmitter<void> = new EventEmitter<void>();
  @Output() previousPage: EventEmitter<void> = new EventEmitter<void>();
}
