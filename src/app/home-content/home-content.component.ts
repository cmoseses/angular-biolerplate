import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/operator/do';

import {LogService} from '../services/log.service';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  constructor(private logService: LogService) {
  }

  ngOnInit() {
    this.subscription = this.logService.getLogs()
      .do(console.log)
      .subscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
