import {
  EventEmitter,
  Component,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-statistics-item',
  templateUrl: './statistics-item.component.html',
  styleUrls: ['./statistics-item.component.scss'],
})
export class StatisticsItemComponent {
  @Input() label: string | undefined = undefined;
  @Input() abilityScore: number | undefined = undefined;
  @Input() abilityModifier: number | undefined = undefined;

  @Output() scoreIncreased: EventEmitter<string> = new EventEmitter();
  @Output() scoreDecreased: EventEmitter<string> = new EventEmitter();

  constructor() {}

  onScoreIncreased() {
    if (!this.abilityScore) return;
    this.scoreIncreased.emit(this.label);
  }

  onScoreDecreased() {
    if (!this.abilityScore) return;
    this.scoreDecreased.emit(this.label);
  }
}
