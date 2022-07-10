import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss']
})
export class PageTitleComponent implements OnInit {

  @Input() value: string | undefined = undefined;

  show: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  handleDisplayChange() {
    this.show = !this.show;
  }

}
