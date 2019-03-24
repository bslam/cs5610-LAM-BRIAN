import { Component, OnInit } from '@angular/core';
import {Widget} from '../../../models/widget.model.client';
import {ActivatedRoute} from '@angular/router';
import {WidgetService} from '../../../services/widget.service.client';
import { DomSanitizer } from '@angular/platform-browser';

import {User} from '../../../models/user.model.client';
import {UserService} from '../../../services/user.service.client';
import {WebsiteService} from '../../../services/website.service.client';
import {Website} from '../../../models/website.model.client';
import {Page} from '../../../models/page.model.client';
import {PageService} from '../../../services/page.service.client';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {
  widget: Widget;
  widgets: Widget[] = [];
  uid: string;
  wid: string;
  pid: string;

  constructor(private activateRoute: ActivatedRoute, private widgetService: WidgetService, public sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    console.log('start of the function');
    this.activateRoute.params.subscribe((params: any) => {
      this.uid = params['uid'];
      this.wid = params['wid'];
      this.pid = params['pid'];
    });
    console.log('middle of function');
    this.widgetService.findAllWidgetsForPage(this.pid).subscribe((data: any) => {
      this.widgets = data;
      console.log(data);
    });
  }


  reorderWidgets(indexes) {
    this.widgetService.reorderWidgets(indexes.startIndex, indexes.endIndex, this.pid).subscribe((data: any) => {
      console.log(data);
      this.widgets = data;
    });
  }

}
