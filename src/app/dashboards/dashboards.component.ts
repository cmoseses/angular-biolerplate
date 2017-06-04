import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.css']
})
export class DashboardsComponent implements OnInit {

  lineOptions: Object;

  constructor() {
  }

  ngOnInit() {
    this.lineOptions = {
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
      series: [{
        name: 'TRACE',
        data: [
          [moment('2015-05-11 17:34:56,548', 'YYYY-MM-DD HH:mm:ss,SSS').unix() * 1000, 43934],
          [moment('2015-05-11 19:34:56,548', 'YYYY-MM-DD HH:mm:ss,SSS').unix() * 1000, 23934],
          [moment('2015-05-12 17:34:56,548', 'YYYY-MM-DD HH:mm:ss,SSS').unix() * 1000, 3934],
          [moment('2015-05-13 16:34:56,548', 'YYYY-MM-DD HH:mm:ss,SSS').unix() * 1000, 93934]]
      }, {
        name: 'INFO', data: [
          [moment('2015-05-10 11:34:56,548', 'YYYY-MM-DD HH:mm:ss,SSS').unix() * 1000, 3934],
          [moment('2015-05-11 19:34:56,548', 'YYYY-MM-DD HH:mm:ss,SSS').unix() * 1000, 1393],
          [moment('2015-05-12 12:00:56,548', 'YYYY-MM-DD HH:mm:ss,SSS').unix() * 1000, 3293],
          [moment('2015-05-13 17:34:56,548', 'YYYY-MM-DD HH:mm:ss,SSS').unix() * 1000, 23934]]
      }, {
        name: 'DEBUG', data: [
          [moment('2015-05-12 19:34:56,548', 'YYYY-MM-DD HH:mm:ss,SSS').unix() * 1000, 63934],
          [moment('2015-05-13 17:34:56,548', 'YYYY-MM-DD HH:mm:ss,SSS').unix() * 1000, 3934],
          [moment('2015-05-14 13:34:56,548', 'YYYY-MM-DD HH:mm:ss,SSS').unix() * 1000, 93934],
        ]
      }]
    };
  }

}
