import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Page} from '../../../models/page.model.client';
import {PageService} from '../../../services/page.service.client';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['../../../../css/style.css'],
})
export class PageEditComponent implements OnInit {
  uid: string;
  wid: string;
  pid: string;
  page: Page;

  constructor(private activateRoute: ActivatedRoute, private pageService: PageService) {
  }

  ngOnInit() {
    this.activateRoute.params.subscribe(
      (params: any) => {
        this.uid = params['uid'];
        this.wid = params['wid'];
        this.pid = params['pid'];
      });
    this.page = this.pageService.findPageById(this.pid);
  }

  onUpdate() {
    this.pageService.updatePage(this.pid, this.page);
  }
}
