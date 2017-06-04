import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Rx';

import {Log, LogOption} from '../models/logs.model';
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
      );
  }
}
