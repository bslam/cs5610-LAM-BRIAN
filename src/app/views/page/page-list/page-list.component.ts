import { Component, OnInit } from '@angular/core';
import {Page} from '../../../models/page.model.client';
import {ActivatedRoute} from '@angular/router';
import {PageService} from '../../../services/page.service.client';
import {Website} from '../../../models/website.model.client';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  uid: string;
  wid: string;
  page: Page;
  pages: Page[] = [];

  constructor(private activateRoute: ActivatedRoute, private pageService: PageService) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(
      (params: any) => {
        this.uid = params['uid'];
        this.wid = params['wid'];
      });
    this.pages = this.pageService.findPageByWebsiteId(this.wid);
    console.log(this.wid);
    console.log(this.pages);
  }

}
