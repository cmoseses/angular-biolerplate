import {Component, OnInit, OnDestroy} from '@angular/core';
import 'rxjs/add/operator/do';
import {Observable} from 'rxjs/Rx';

import {LogService} from '../services/log.service';
import {Column} from '../gird/column.model';
import {Log, LogItem} from '../models/logs.model';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent implements OnInit, OnDestroy {

  gridColumns: Observable<Array<Column>>;
  gridRows: Observable<Array<LogItem>>;

  constructor(private logService: LogService) {
  }

  ngOnInit() {
    this.gridColumns = this.getColumns();
    this.gridRows = this.logService.getLogs()
      .map((logs: Array<Log>) =>
        logs.map((log: Log) => log.logItems)
          .reduce((acc, log) => [...acc, ...log], [])
      );
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
