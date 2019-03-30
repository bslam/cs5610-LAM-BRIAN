import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';
import {Widget, WidgetHeading, WidgetImage, WidgetYoutube, WidgetText, WidgetHTML} from '../../../../models/widget.model.client';
import {inject} from '@angular/core';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-widget-html',
  templateUrl: './widget-html.component.html',
  styleUrls: ['./widget-html.component.css']
})
export class WidgetHtmlComponent implements OnInit {

  uid: string;
  wid: string;
  pid: string;
  wgid: string;

  newWidget: WidgetHTML;
  widget: Widget;

  constructor(private activatedRoute: ActivatedRoute, private widgetService: WidgetService, private router: Router) {
  }

  ngOnInit() {

    // fetch ids from current url
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.uid = params['uid'];
          this.wgid = params['wgid'];
          this.pid = params['pid'];
          this.wid = params['wid'];
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
    console.log('onUpdateWidget');
    this.widgetService.updateWidget(this.wgid, this.widget)
      .subscribe(
        (data: any) => this.router.navigate(['/user', this.uid, 'website', this.wid, 'page', this.pid, 'widget']),
      );
  }

  onDelete() {
    this.widgetService.deleteWidget(this.wgid)
      .subscribe(
        (data: any) => this.router.navigate(['/user', this.uid, 'website', this.wid, 'page', this.pid, 'widget']),
      );
  }
}
