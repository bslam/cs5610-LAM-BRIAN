import {ActivatedRoute, Params, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';
import {Widget, WidgetImage} from '../../../../models/widget.model.client';
import { Component, OnInit } from '@angular/core';
import {WidgetHeading, WidgetHtml, WidgetYoutube} from '../../../../models/widget.model.client';
import {inject} from '@angular/core';


@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['../../../../../css/styles.css']
})
export class WidgetImageComponent implements OnInit {
  widgetId: string;
  uid: string;
  pageId: string;
  newWidget: WidgetImage;
  widget: Widget;
  newWidgetName: string;
  newWidgetWidth = '';
  newWidgetURL = '';
  localPath: string;
  URL: string;

  constructor(private route: ActivatedRoute, private widgetService: WidgetService, private router: Router) {
    this.newWidget = new WidgetImage(this.newWidgetName, '', 'IMAGE', '', this.newWidgetWidth, '');
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
    this.URL = ((this.newWidgetURL === 'undefined') ? this.localPath : this.newWidgetURL);
    this.newWidget.url = this.URL;
    this.widgetService.updateWidget(this.widgetId, this.newWidget);
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onDelete() {
    this.widgetService.deleteWidget(this.widgetId);
    this.router.navigate(['../'], {relativeTo: this.route});
  }


  handleUpload(e: any): void {
    this.localPath = e.target.value;
    console.log('local:  ' + this.localPath);
  }
}
