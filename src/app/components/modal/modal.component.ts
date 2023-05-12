import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Output() closeEvent = new EventEmitter();

  onClose() {
    this.closeEvent.emit();
  }

  onSave() {
    this.closeEvent.emit();
  }
}
