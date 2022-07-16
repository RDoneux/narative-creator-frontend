import { EventEmitter, Component, OnInit, Output, Input } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  @Input() value: string | undefined = undefined;
  @Input() placeholder: string = '';
  @Input() isLoading: boolean = false;
  @Input() searchAsType: boolean = false;

  @Output() changed: EventEmitter<string> = new EventEmitter();

  constructor(private utils: UtilsService) {}

  debounceOnChange(timeInMs: number) {
    this.onChange = this.utils.debounce<typeof this.onChange>(
      this.onChange,
      timeInMs
    );
  }

  submitted = () => {
    if (!this.value || this.isLoading) return;
    this.changed.emit(this.value);
  };

  onChange = (event: string) => {
    if (!this.searchAsType || !event || this.isLoading) return;
    this.changed.emit(event);
  };
}
