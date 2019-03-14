import {ActivatedRoute, Params, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';
import {Widget, WidgetYoutube} from '../../../../models/widget.model.client';
import { Component, OnInit } from '@angular/core';
import {WidgetHeading, WidgetHtml} from '../../../../models/widget.model.client';
import {inject} from '@angular/core';



// @ts-ignore
@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css']
})
export class WidgetYoutubeComponent implements OnInit {
  wgid: string;
  uid: string;
  pid: string;
  wid: string;
  newWidget: WidgetYoutube;
  widget: Widget;
  newWidgetName: string;
  newWidgetWidth = '';
  newWidgetURL = '';
  localPath: string;
  URL: string;

  constructor(private route: ActivatedRoute, private widgetService: WidgetService, private router: Router) {
    this.newWidget = new WidgetYoutube(this.newWidgetName, '', 'YOUTUBE', this.pid, this.newWidgetWidth, '');
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.uid = params['uid'];
          this.wgid = params['wgid'];
          this.pid = params['pid'];
          this.wid = params['wid'];
        }
      );
    if (this.wgid !== 'undefined') {
      this.widget = this.widgetService.findWidgetsByID(this.wgid);
    }
  }

  onUpdateWidget() {
    this.URL = this.newWidget.url;
    this.newWidget.url = this.URL;
    this.widgetService.updateWidget(this.wgid, this.newWidget);
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onDelete() {
    this.widgetService.deleteWidget(this.wgid);
    this.router.navigate(['../'], {relativeTo: this.route});
  }


  handleUpload(e: any): void {
    this.localPath = e.target.value;
    console.log('local:  ' + this.localPath);
  }
}
