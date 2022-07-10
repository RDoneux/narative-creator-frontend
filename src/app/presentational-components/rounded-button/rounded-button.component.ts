import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rounded-button',
  templateUrl: './rounded-button.component.html',
  styleUrls: ['./rounded-button.component.scss']
})
export class RoundedButtonComponent implements OnInit {

  @Input() isLoading: boolean = false;

  @Output() clicked: EventEmitter<Event> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(event: Event) {
    this.clicked.emit(event)
  }

}
