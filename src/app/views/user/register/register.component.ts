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
  noFieldErrorFlag = false;



  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }


  onSubmit() {
    this.user.username = this.registerForm.value.username;
    this.user.password = this.registerForm.value.password;
    const verify = this.registerForm.value.verify;
    if (this.user.username === null || this.user.password === null) {
      this.noFieldErrorFlag = true;
    }
    if (this.user.password !== verify) {
      this.errorFlag = true;
    } else {
      this.userService.register(this.user.username, this.user.password)
        .subscribe(
          (data: any) => {
            if (data) {
              this.router.navigate(['/user']);
            } else {
              this.errorFlag = true;
              console.log('Issue when creating user');
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
