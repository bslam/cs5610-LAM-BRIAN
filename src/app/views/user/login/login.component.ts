import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';

import {UserService} from '../../../services/user.service.client';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;

  username: String; // see usage as two-way data binding
  password: String; // see usage as two-way data binding
  uid: string;

  errorFlag: boolean;
  errorMsg = 'Invalid username or password !';

  constructor(private router: Router, private userService: UserService) { this.errorFlag = false; }


  login() {
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    this.userService.findUserByCredentials(this.username, this.password).subscribe((user: any) => {
        if (user) {
          this.router.navigate(['/user', user._id]);
        } else {
          this.errorFlag = true;
        }
      }
    );
  }

  ngOnInit() {
  }

}
