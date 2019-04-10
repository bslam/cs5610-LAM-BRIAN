import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../services/widget.service.client';
import {Widget} from '../../../models/widget.model.client';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../../models/user.model.client';
import {UserService} from '../../../services/user.service.client';
import {WebsiteService} from '../../../services/website.service.client';
import {Website} from '../../../models/website.model.client';
import {Page} from '../../../models/page.model.client';
import {PageService} from '../../../services/page.service.client';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css']
})
export class WidgetEditComponent implements OnInit {
  wgid: string;
  widget: Widget;
  widgets: Widget[] = [];
  uid: string;
  wid: string;
  pid: string;

  constructor(private activateRoute: ActivatedRoute, private widgetService: WidgetService, private sharedService: SharedService) {
  }

  ngOnInit() {
    this.activateRoute.params.subscribe(
      (params: any) => {
        this.uid = params['uid'];
        this.wid = params['wid'];
        this.pid = params['pid'];
        this.wgid = params['wgid'];
      });
    console.log('before finding widgets in edit component');
    this.widgetService.findWidgetById(this.wgid).subscribe(
      (data: any) => {
        this.widget = data;
        console.log(data);
      }
    );
  }

}
