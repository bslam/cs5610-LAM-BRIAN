import { User } from '../models/user.model.client';
import {Injectable} from '@angular/core';
import {Website} from '../models/website.model.client';
import {HttpClient, HttpHeaders} from '@angular/common/http';


// import { Observable } from 'rxjs/Observable ';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';




@Injectable()

export class UserService {
  constructor(private http: HttpClient) {
  }

  base_url = environment.baseUrl;

  createUser(user: User) {
    const url = this.base_url + 'api/user/';
    return this.http.post(url, user);
  }


  findUserByCredentials(username, password) {
    const url = this.base_url + 'api/user?username=' + username + '&password=' + password;
    console.log(url);
    return this.http.get(url);
  }

  findUserById(userId) {
    const url = this.base_url + 'api/user/' + userId;
    return this.http.get(url);
  }

  updateUser(userId: String, user) {
    const url = this.base_url + 'api/user/' + userId;
    return this.http.put(url, user);
  }

  deleteUserById(userId: String) {
    const url = this.base_url + 'api/user/' + userId;
    return this.http.delete(url);
  }
}





















/**
@Injectable()
export class UserService {
  users: User[] = [
    new User('123', 'alice', 'alice', 'Alice', 'Wonder'),
    new User('234', 'bob', 'bob', 'Bob', 'Marley'),
    new User('345', 'charly', 'charly', 'Charly', 'Garcia'),
    new User('456', 'jannunzi', 'jannunzi', 'Jose', 'Annunzi')
  ];


  createUser(user: User) {
    const new_user: User = new User(Math.random, user.username, user.password, '', '');
    this.users.push(new_user);
    return new_user;
  }

  findUserById(userId: String) {
    return this.users.find(function (user) {
      return user._id === userId;
    });
  }
  findUserByCredential(username: String, password: String) {
    return this.users.find(function (user) {
      return user.username === username && user.password === password;
    });

  }
  findUserByUsername(username: String) {
    return this.users.find(function (user) {
      return user.username === username;
    });
  }
  updateUser(userId, user) {
    for (const i in this.users) {
      if (this.users[i]._id === userId) {
        this.users[i].firstName = user.firstName;
        this.users[i].lastName = user.lastName;
      }
    }
  }

  deleteUser(userId: String) {
    for (const i in this.users) {
      if (this.users[i]._id === userId) {
        const j = +i;
        this.users.splice(j, 1);
      }
    }
  }
}**/
