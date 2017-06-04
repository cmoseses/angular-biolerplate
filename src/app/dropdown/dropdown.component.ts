import {Component, OnInit, Input, Output, EventEmitter, ElementRef} from '@angular/core';
import {DropdownValue} from './dropdown.model';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent<T> implements OnInit {
  @Input() values: DropdownValue<T>[] = [];
  @Input() defaultText = '';
  @Output() valueChange: EventEmitter<T>;

  constructor(private elementRef: ElementRef) {
    this.valueChange = new EventEmitter();
  }

  ngOnInit() {
  }

  select(value) {
    this.valueChange.emit(value);
  }
}
