import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/publishReplay';

import {Log, LogOption, LogItem} from '../models/logs.model';
import {environment} from '../../environments/environment';

@Injectable()
export class LogService {

  constructor(private http: Http) {
  }

  getLogs(): Observable<Array<Log>> {
    return this.http.get(environment.logsMetaDataUrl)
      .map(response =>
        response.json()
      )
      .map((logOptions: Array<LogOption>) =>
        logOptions.map((logOption: LogOption) =>
          new Log(logOption)
        )
      ).publishReplay(1).refCount();
  }

  getLogItems(): Observable<Array<LogItem>> {
    return this.getLogs()
      .map((logs: Array<Log>) =>
        logs.map((log: Log) => log.logItems)
          .reduce((acc, log) => [...acc, ...log], [])
      );
  }

  getDistinctLogLevels(): Observable<Array<string>> {
    return this.getLogItems()
      .map((logItems: Array<LogItem>) => logItems
        .map(logItem => logItem.logLevel)
        .filter((v, i, a) => a.indexOf(v) === i)
      );
  }
}
