import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {UserService} from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css', '../../../../css/styles.css']
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
      (params: any) => {
        this.uid = params['uid'];
      });
    this.user = this.userService.findUserById(this.uid);

  }

  updateUser() {
    if (!this.user.username || !this.user.password || !this.user.firstName || !this.user.lastName) {
      alert('Please enter all the required fields!');
    }
    this.userService.updateUser(this.user._id, this.user);
    alert('Your profile has been updated!');
  }
}
