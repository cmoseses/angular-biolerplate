import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';
import {LogService} from '../services/log.service';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.css']
})
export class DashboardsComponent implements OnInit {

  lineOptions: Object;

  constructor(private logService: LogService) {
  }

  ngOnInit() {
    this.logService.getLogItems()
      .map(logItems => logItems.map(logItem => {
        logItem.timeStamp = this.mapTimeStampString(logItem.timeStamp);
        return logItem;
      }))
      .map(result => result.reduce((a, e) => {
        if (a.length === 0) {
          a.push({name: e.logLevel, data: [[e.timeStamp, 1]]});
        } else if (a.find(x => x.name === e.logLevel)) {
          const c = a.find(x => x.name === e.logLevel);
          if (c.data.find(k => k[0] === e.timeStamp)) {
            c.data.find(k => k[0] === e.timeStamp)[1]++;
          } else {
            c.data.push([e.timeStamp, 1]);
          }
        } else {
          a.push({name: e.logLevel, data: [[e.timeStamp, 1]]});
        }
        return a;
      }, []))
      .do(console.log)
      .do(series => this.lineOptions = {
        title: {text: 'Logs Over Time'},
        legend: {
          verticalAlign: 'top',
          padding: 30
        },
        yAxis: {
          title: {
            text: ''
          },
        },
        xAxis: {
          type: 'datetime',
          labels: {
            format: '{value:%e/%y/%Y}'
          }
        },
        series
      })
      .subscribe();
  }

  private mapTimeStampString(timeStamp: string): number {
    return moment(timeStamp, 'YYYY-MM-DD HH:mm:ss,SSS').unix() * 1000;
  }

}
