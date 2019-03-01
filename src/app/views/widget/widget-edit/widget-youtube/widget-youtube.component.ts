import { Component, OnInit } from '@angular/core';
import {Widget, WidgetYoutube} from '../../../../models/widget.model.client';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';

@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css']
})

export class WidgetYoutubeComponent implements OnInit {
  wid: string;
  uid: string;
  pid: string;
  newWidget: WidgetYoutube;
  widget: Widget;
  newWidgetName: string;
  newWidgetText = '';
  newWidgetWidth = '';
  newWidgetURL = '';

  constructor(private route: ActivatedRoute, private widgetService: WidgetService, private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.uid = params['uid'];
          this.wid = params['wgid'];
          this.pid = params['pid'];
        }
      );
    if (this.wid !== 'undefined') {
      this.widget = this.widgetService.findWidgetsByID(this.wid);
    }
  }

  onUpdateWidget() {
    this.newWidget = new WidgetYoutube(this.newWidgetName, '', 'YOUTUBE', this.pid, this.newWidgetWidth, this.newWidgetURL);
    this.widgetService.updateWidget(this.wid, this.newWidget);
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onDelete() {
    this.widgetService.deleteWidget(this.wid);
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
