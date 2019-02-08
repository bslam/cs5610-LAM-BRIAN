import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String; // see usage as two-way data binding
  password: String; // see usage as two-way data binding

  constructor(private router: Router) { }

  login() {

    console.log(this.username);
    console.log(this.password);

  }

  ngOnInit() {
  }

}
