import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';

import {UserService} from '../../../services/user.service.client';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../../../css/styles.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;

  username: String; // see usage as two-way data binding
  password: String; // see usage as two-way data binding

  errorFlag: boolean;
  errorMsg = 'Invalid username or password !';

  constructor(private router: Router, private userService: UserService) { this.errorFlag = false; }

  login() {
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    const user = this.userService.findUserByCredential(this.username, this.password);
    if (user) {
      this.router.navigate(['user', user._id]);
    }  else {
        this.errorFlag = true;
    }
  }

  ngOnInit() {
  }

}
