import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';
import {Widget, WidgetHeading, WidgetHTML, WidgetImage, WidgetYoutube} from '../../../../models/widget.model.client';
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
  wgid: string;
  uid: string;
  pid: string;
  wid: string;

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
          this.wid = params['wid'];
          this.pid = params['pid'];
          this.wgid = params['wgid'];
        }
      );
    if (this.wgid !== 'undefined') {
      this.widgetService.findWidgetById(this.wgid).subscribe(
        (data: any) => {
          this.widget = data;
        }
      );
    }
  }

  onUpdateWidget() {
    this.newWidget = new WidgetHeading(this.newWidgetName, this.wgid, 'HEADING', this.pid, this.newWidgetSize, this.newWidgetText);
    this.widgetService.updateWidget(this.wgid, this.newWidget).subscribe(
      (data: any) => {
        this.widget = data;
      }
    );
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onDelete() {
    this.widgetService.deleteWidget(this.wgid).subscribe(
      (data: any) => {

      }
    );
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
