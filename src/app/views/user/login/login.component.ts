import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';

import {UserService} from '../../../services/user.service.client';
import {NgForm} from '@angular/forms';
import {SharedService} from '../../../services/shared.service';

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
  htmlErrorMSG = 'Please Enter Username and Password';

  constructor(private router: Router, private userService: UserService, private sharedService: SharedService) { this.errorFlag = false; }


  login() {
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    // this.userService.findUserByCredentials(this.username, this.password).subscribe(
    //   (user: any) => {
    //     if (user) {
    //       this.router.navigate(['/user', user._id]);
    //     } else {
    //       this.errorFlag = true;
    //     }
    //   }
    // );
    if (this.username === null) {
      this.errorFlag = true;
      this.errorMsg = 'Username, password or verify password required.';
    } else if (this.password === null) {
      this.errorFlag = true;
      this.errorMsg = 'Username, password or verify password required.';
    } else {
      this.userService.login(this.username, this.password)
        .subscribe(
          (data: any) => {
            this.sharedService.user = data;
            this.router.navigate(['/user']); },
          (error: any) => {
            console.log(error);
          }
        );
    }
  }

  ngOnInit() {
  }

}
