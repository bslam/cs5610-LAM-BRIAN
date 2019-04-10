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
  ng_username: string;
  ng_password: string;
  ng_verify_password: string;

  errorMsg = 'Passwords must match!';
  noFieldErrorFlag = false;



  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    // this.user.username = this.ng_username;
    // this.user.password = this.ng_password;
    if (this.ng_username !== this.ng_verify_password) {
      this.errorFlag = true;
      this.errorMsg = 'Password and Verify Must be the Same';
    } else {
      this.user.username = this.ng_username;
      this.user.password = this.ng_password;
      this.userService.register(this.user.username, this.user.password)
        .subscribe(
          (data: any) => {
            if (data) {
              alert('User Successfully Created');
              this.router.navigate(['/user']);
            } else {
              this.errorFlag = true;
              console.log(this.errorMsg);
            }
          },
          (error: any) => {
            if (error) {
              this.errorFlag = true;
              this.errorMsg = error;
              console.log(this.errorMsg);
            }
          }
        );
    }
  }
}



