import {Component, OnInit} from '@angular/core';
import {User} from "./user";
import {LoginGuard} from "./login.guard";
import {NgForm} from "@angular/forms";
import {AccountService} from "../services/account.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(private loginService : AccountService) {
  }
  model: User = new User();

  ngOnInit(): void {
  }

  login(form : NgForm) {
    this.loginService.login(this.model);
    console.log(this.model.userName)
    console.log(this.model.password)
    console.log(this.loginService.isLoggedIn())
  }
}
