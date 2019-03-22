import {ActivatedRoute, Params, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';
import {Widget, WidgetImage} from '../../../../models/widget.model.client';
import { Component, OnInit } from '@angular/core';
import {WidgetHeading, WidgetHtml, WidgetYoutube} from '../../../../models/widget.model.client';
import {inject} from '@angular/core';
import {environment} from '../../../../../environments/environment';


@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css']
})
export class WidgetImageComponent implements OnInit {
  wgid: string;
  uid: string;
  pid: string;
  wid: string;
  newWidget: WidgetImage;
  widget: Widget;
  newWidgetName: string;
  newWidgetWidth = '';
  newWidgetURL = '';
  localPath: string;
  URL: string;
  baseUrl: string;

  constructor(private route: ActivatedRoute, private widgetService: WidgetService, private router: Router) {
    this.newWidget = new WidgetImage(this.newWidgetName, '', 'IMAGE', this.pid, this.newWidgetWidth, '');
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
      this.widgetService.findWidgetById(this.wgid).subscribe(
        (data: any) => {
          this.widget = data;
        }
      );
    }
    this.baseUrl = environment.baseUrl;
  }

  onUpdateWidget() {
    this.URL = ((this.newWidgetURL === 'undefined') ? this.localPath : this.newWidgetURL);
    this.newWidget.url = this.URL;
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
        this.router.navigate(['/user', this.uid, 'website', this.wid, 'page', this.pid, 'widget']);
      }
    );
  }

}
