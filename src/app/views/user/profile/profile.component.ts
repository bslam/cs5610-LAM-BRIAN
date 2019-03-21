import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {UserService} from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  @ViewChild('f') profileForm: NgForm;
  username: string;
  user: User;
  uid: string;

  constructor(private router: Router, private userService: UserService, private activateRoute: ActivatedRoute) {
  }


  ngOnInit() {
    this.activateRoute.params.subscribe(
      params => {
        this.uid = params['uid'];
      });
    this.userService.findUserById(this.uid).subscribe(
      (data: any) => {
        this.user = data;
      }
    );
  }



  updateUser() {
    console.log(this.user);
    this.userService.updateUser(this.uid, this.user).subscribe(
      (user: any) => {
        this.user = user;
        this.router.navigate(['/user', user._id]);
      }
    );
  }
}
