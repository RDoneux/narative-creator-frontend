import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-editable-text-input',
  templateUrl: './editable-text-input.component.html',
  styleUrls: ['./editable-text-input.component.scss']
})
export class EditableTextInputComponent implements OnInit {

  @Input() value: String | undefined = undefined;
  @Input() placeholder: String = '';

  @Output() valueChanged: EventEmitter<String> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleContentChange() {
    this.valueChanged.emit(this.value);
  }

}
