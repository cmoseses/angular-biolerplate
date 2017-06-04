import {Component, OnInit} from '@angular/core';
import {User} from '../models/user.model';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: User;

  constructor() {
  }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem(environment.currentUserStorageKey));
  }
}
