import { Component, OnInit } from '@angular/core';
import { StatisticsConfig } from '../stateful-components/statistics/stastistics.interface';

@Component({
  selector: 'app-character-creator',
  templateUrl: './character-creator.component.html',
  styleUrls: ['./character-creator.component.scss'],
})
export class CharacterCreatorComponent implements OnInit {
  thumbNailUrl: string = '/assets/icons/male-default.jpg';

  pageTitle: string = 'Character Creator';
  showModal: boolean = false;

  statistics: StatisticsConfig[] = [
    { label: 'Strength', abilityScore: 1 },
    { label: 'Dexterity', abilityScore: 1 },
    { label: 'Constitution', abilityScore: 1 },
    { label: 'Intelligence', abilityScore: 1 },
    { label: 'Wisdom', abilityScore: 1 },
    { label: 'Charisma', abilityScore: 1 },
  ];

  constructor() {}

  ngOnInit(): void {}

  onCloseModal() {
    this.showModal = false;
  }

  onChangeCharacterThumbnail(event: Event) {
    this.showModal = true;
  }

  onImageChanged(url: string) {
    this.onCloseModal();
    this.thumbNailUrl = url;
  }

  onStatsChanged(stats: StatisticsConfig[]) {
    this.statistics = stats;
  }
}
