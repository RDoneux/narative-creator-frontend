import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MessageService } from 'src/app/services/message/message.service';
import { UtilsService } from 'src/app/services/utils.service';
import { StatisticsConfig } from './stastistics.interface';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent implements OnInit {
  @Input() stats: StatisticsConfig[] | undefined = undefined;

  @Output() changed: EventEmitter<StatisticsConfig[]> = new EventEmitter();

  scoreLow: number = 1;
  scoreHigh: number = 30;
  modifierLow: number = -5;
  modifierHigh: number = 10;

  constructor(private message: MessageService, private utils: UtilsService) {}

  ngOnInit(): void {
    if (!this.stats) return;
    this.stats.forEach((stat) => {
      if (stat.abilityModifier) {
        this.message.consoleError(
          'Ability modifier is calculated within component and should not be manually passed in.' +
            'Passed in value will be respected, but please note this will likely break the game.'
        );
      } else {
        stat.abilityModifier = Math.round(
          this.utils.map(
            stat.abilityScore,
            this.scoreLow,
            this.scoreHigh,
            this.modifierLow,
            this.modifierHigh
          )
        );
      }
    });
  }

  onScoreIncreased(label: string) {
    if (!this.stats) {
      this.message.consoleError(
        'Could not find target "' + label + '" in stats'
      );
      return;
    }
    const target = this.stats.find((stat) => {
      return stat.label == label;
    });
    if (!target) {
      this.message.consoleError(
        'Could not find target "' + label + '" in stats'
      );
      return;
    }

    if (target.abilityScore >= this.scoreHigh) return;
    target.abilityScore++;
    target.abilityModifier = Math.round(
      this.utils.map(
        target.abilityScore,
        this.scoreLow,
        this.scoreHigh,
        this.modifierLow,
        this.modifierHigh
      )
    );
    this.changed.emit(this.stats);
  }

  onScoreDecreased(label: string) {
    if (!this.stats) {
      this.message.consoleError(
        'Could not find target "' + label + '" in stats'
      );
      return;
    }
    const target = this.stats.find((stat) => {
      return stat.label == label;
    });
    if (!target) {
      this.message.consoleError(
        'Could not find target "' + label + '" in stats'
      );
      return;
    }
    if (target.abilityScore <= this.scoreLow) return;
    target.abilityScore--;
    target.abilityModifier = Math.round(
      this.utils.map(
        target.abilityScore,
        this.scoreLow,
        this.scoreHigh,
        this.modifierLow,
        this.modifierHigh
      )
    );
    this.changed.emit(this.stats);
  }
}
