import { EventEmitter, Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
})
export class ToggleComponent {
  @Input() label: string | undefined = undefined;
  @Input() checked: boolean = false;

  @Output() changed: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  toggleComponent() {
    this.checked = !this.checked;
    this.changed.emit(this.checked);
  }
}
