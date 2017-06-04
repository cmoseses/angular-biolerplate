import {Component, OnInit, OnDestroy} from '@angular/core';
import 'rxjs/add/operator/do';
import {Observable} from 'rxjs/Rx';
import {Subject} from 'rxjs/Subject';

import {LogService} from '../services/log.service';
import {Column} from '../gird/column.model';
import {Log, LogItem} from '../models/logs.model';
import {DropdownValue} from '../dropdown/dropdown.model';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent implements OnInit, OnDestroy {

  gridColumns: Observable<Array<Column>>;
  gridRows: Observable<Array<LogItem>>;

  dropDownClick: Subject<string> = new Subject<string>();
  dropDownValues: Observable<Array<DropdownValue<string>>>;

  constructor(private logService: LogService) {
  }

  ngOnInit() {
    this.dropDownClick.do(console.log).subscribe();
    this.dropDownValues = this.logService.getDistinctLogLevels()
      .map(logLevels => logLevels.map(logLevel =>
          new DropdownValue<string>(logLevel, logLevel)
        )
      );

    this.gridColumns = this.getColumns();
    this.gridRows = this.logService.getLogItems();
  }

  ngOnDestroy() {
  }

  private getColumns(): Observable<Array<Column>> {
    return Observable.of([
      new Column('timeStamp', 'TimeStamp'),
      new Column('logMarker', 'LogMarker'),
      new Column('logger', 'Logger'),
      new Column('logLevel', 'LogLevel'),
      new Column('currentThread', 'CurrentThread')
    ]);
  }
}
