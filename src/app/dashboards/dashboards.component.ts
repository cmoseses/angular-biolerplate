import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.css']
})
export class DashboardsComponent implements OnInit {

  options: Object;

  constructor() {
  }

  ngOnInit() {
    this.options = {
      title: {text: 'simple chart'},
      series: [{
        data: [29.9, 71.5, 106.4, 129.2],
      }]
    };
  }

}
