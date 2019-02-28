import { Component, OnInit } from '@angular/core';
import {Widget, WidgetYoutube} from '../../../../models/widget.model.client';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';

@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['../../../../../css/styles.css']
})

export class WidgetYoutubeComponent implements OnInit {
  widgetId: string;
  uid: string;
  pageId: string;
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
          this.widgetId = params['wgid'];
          this.pageId = params['pid'];
        }
      );
    if (this.widgetId !== 'undefined') {
      this.widget = this.widgetService.findWidgetsByID(this.widgetId);
    }
  }

  onUpdateWidget() {
    this.newWidget = new WidgetYoutube(this.newWidgetName, '', 'YOUTUBE', this.pageId, this.newWidgetWidth, this.newWidgetURL);
    this.widgetService.updateWidget(this.widgetId, this.newWidget);
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onDelete() {
    this.widgetService.deleteWidget(this.widgetId);
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
