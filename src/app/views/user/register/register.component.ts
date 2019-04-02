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
  user: User = {_id: undefined, username: undefined, password: undefined, firstName: undefined, lastName: undefined};
  errorFlag: boolean;
  uid: string;


  errorMsg = 'Passwords must match!';



  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }


  onSubmit() {
    this.user.username = this.registerForm.value.username;
    this.user.password = this.registerForm.value.password;
    const verify = this.registerForm.value.verify;
    //
    //
    // if (this.user.password === verify) {
    //   this.userService.createUser(this.user).subscribe(
    //       (user: any) => {
    //         this.user = user;
    //         }
    //       );
    //   this.userService.findUserByCredentials(this.user.username, this.user.password).subscribe(
    //         (user: any) => {
    //           this.router.navigate(['/user', user._id]);
    //         }
    //       );
    // } else {
    //   this.errorFlag = true;
    // }
    if (this.user.password !== verify) {
      this.errorFlag = true;
    } else {
      console.log(this.user.username);
      this.userService.createUser(this.user).subscribe(
        (user: any) => {
          this.user = user;
          console.log(this.user);
          this.router.navigate(['/user', user._id]);
        }
      );
    }
  }
}
