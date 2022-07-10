import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss'],
})
export class LoadingSpinnerComponent implements OnInit {
  @Input() componentWidth: number = 50;
  @Input() componentHeight: number = 50;
  @Input() borderThickness: number = 20;
  @Input() borderColour: string = '#3498db';
  @Input() loading: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
