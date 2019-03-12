import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from '../../../models/user.model.client';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('f') registerForm: NgForm;
  user: User;
  errorFlag: boolean;
  uid: string;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    const username = this.registerForm.value.username;
    const password = this.registerForm.value.password;
    const verify = this.registerForm.value.verify;
    if (password !== verify) {
      this.errorFlag = true;
    } else {
      this.errorFlag = false;
      this.user = this.userService.createUser(new User('', username, password, '', ''));
      this.uid = this.user._id.toString();
      this.router.navigate(['/user', this.user._id]);
    }
  }
}
