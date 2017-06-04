import {Component, OnInit, Input} from '@angular/core';
import {Column} from './column.model';
import {Sorter} from './sorter.model';

@Component({
  selector: 'app-gird',
  templateUrl: './gird.component.html',
  styleUrls: ['./gird.component.css']
})

export class GirdComponent implements OnInit {

  @Input() columns: Array<Column>;
  @Input() rows: Array<any>;

  sorter = new Sorter();

  sort(key) {
    this.sorter.sort(key, this.rows);
  }

  constructor() {
  }

  ngOnInit() {
  }

}
