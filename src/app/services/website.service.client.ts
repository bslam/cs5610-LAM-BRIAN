import { User } from '../models/user.model.client';
import {Injectable} from '@angular/core';
import {Website} from '../models/website.model.client';
import {HttpClient, HttpHeaders} from '@angular/common/http';


// import { Observable } from 'rxjs/Observable ';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
@Injectable()
export class WebsiteService {
  constructor(private http: HttpClient) {
  }

  base_url = environment.baseUrl;

  createWebsite(userId: string, website: Website) {
    const url = this.base_url + 'api/user/' + userId + '/website';
    return this.http.post(url, website);
  }

  findAllWebsitesForUser(userId: String) {
    // const url = this.base_url + 'api/user/' + userId + '/website';
    // return this.http.get(url);
    return this.http.get(this.base_url + 'api/user/' + userId + '/website');
  }

  findWebsiteById(websiteId: String) {
    const url = this.base_url + 'api/website/' + websiteId;
    return this.http.get(url);
  }

  updateWebsite(websiteId: String, website: Website) {
    const url = this.base_url + 'api/website/' + websiteId;
    return this.http.put(url, website);
  }

  deleteWebsite(websiteId: String) {
    const url = this.base_url + 'api/website/' + websiteId;
    return this.http.delete(url);
    // return this.http.delete( this.base_url + 'api/website/' + websiteId);
  }
}
