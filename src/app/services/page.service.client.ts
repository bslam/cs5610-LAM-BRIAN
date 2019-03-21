import { User } from '../models/user.model.client';
import {Injectable} from '@angular/core';
import {Website} from '../models/website.model.client';
import {HttpClient, HttpHeaders} from '@angular/common/http';


// import { Observable } from 'rxjs/Observable ';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
import {Page} from '../models/page.model.client';

@Injectable()
export class PageService {
  constructor(private http: HttpClient) {
  }
  base_url = 'http://localhost:3200/';

  createPage(websiteId: string, page: Page) {
    const url = this.base_url + 'api/website/' + websiteId + '/page';
    return this.http.post(url, page);
  }

  findAllPagesForWebsite(websiteId: string) {
    const url = this.base_url + 'api/website/' + websiteId + '/page';
    return this.http.get(url);
  }



  findPageById(pageId: string) {
    const url = this.base_url + 'api/page/' + pageId;
    return this.http.get(url);
  }

  updatePage(pageId: string, page: Page) {
    const url = this.base_url + 'api/page/' + pageId;
    return this.http.put(url, page);
  }

  deletePage(pageId: string) {
    const url = this.base_url + 'api/page/' + pageId;
    return this.http.delete(url);
  }
}
