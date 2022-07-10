import { EventEmitter, Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Output() modalClosed: EventEmitter<Event> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onModalClose(event: Event) {
    console.log("modal closed");
    this.modalClosed.emit(event);
  }

}
