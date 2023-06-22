import { Component } from '@angular/core';
import {AccountService} from "./services/account.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private service : AccountService) {
  }
  title = 'angular';

  isLoggedIn() {
    return this.service.isLoggedIn();
  }

  logOut() {
    this.service.logout();
  }
}
