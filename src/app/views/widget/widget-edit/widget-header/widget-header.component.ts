import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';
import {Widget, WidgetHeading, WidgetHtml, WidgetImage, WidgetYoutube} from '../../../../models/widget.model.client';
import {inject} from '@angular/core';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.css']
})
export class WidgetHeadingComponent implements OnInit {
  widgetId: string;
  uid: string;
  pageId: string;
  newWidget: WidgetHeading;
  widget: Widget;
  newWidgetName: string;
  newWidgetSize: number;
  newWidgetText: string;

  constructor(private route: ActivatedRoute, private widgetService: WidgetService, private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.uid = params['uid'];
          this.widgetId = params['wgid'];
          this.pageId = params['pid'];
        }
      );
    if (this.widgetId !== 'undefined') {
      this.widget = this.widgetService.findWidgetsByID(this.widgetId);
    }
  }

  onUpdateWidget() {
    this.newWidget = new WidgetHeading(this.newWidgetName, '', 'HEADING', '', this.newWidgetSize, this.newWidgetText);
    this.widgetService.updateWidget(this.widgetId, this.newWidget);
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onDelete() {
    this.widgetService.deleteWidget(this.widgetId);
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
