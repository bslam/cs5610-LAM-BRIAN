import {ActivatedRoute, Params, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';
import {Widget, WidgetImage} from '../../../../models/widget.model.client';
import {Component, OnInit, ViewChild} from '@angular/core';
import {WidgetHeading, WidgetHTML, WidgetYoutube} from '../../../../models/widget.model.client';
import {inject} from '@angular/core';
import {environment} from '../../../../../environments/environment';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css']
})
export class WidgetImageComponent implements OnInit {
  @ViewChild('f') iForm: NgForm;


  wgid: string;
  uid: string;
  pid: string;
  wid: string;
  newWidget: WidgetImage;
  widget: WidgetImage;
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
    console.log(this.newWidget);
    // this.newWidget.name
    this.newWidget.pageId = this.pid;
    // this.newWidget.url
    this.newWidget.widgetType = 'IMAGE';
    // this.newWidget.width =
    console.log(this.wgid);
    // this.widgetService.updateWidget(this.wgid, this.newWidget).subscribe(
    //   (data: WidgetImage) => {
    //     console.log(data);
    //     this.widget = data;
    //     this.router.navigate(['../'], {relativeTo: this.route});
    //   }
    // );

    this.newWidget = new WidgetImage(this.iForm.value.widgetName, this.wgid, 'IMAGE', this.pid,
      this.iForm.value.widgetWidth, this.iForm.value.widgetURL);
    this.widgetService.updateWidget(this.wgid, this.newWidget).subscribe(
      (data: any) => {
        this.widget = data;
        this.router.navigate(['../'], {relativeTo: this.route});
      }
    );
  }

  onDelete() {
    this.widgetService.deleteWidget(this.wgid).subscribe(
      (data: any) => {
        this.router.navigate(['/user', this.uid, 'website', this.wid, 'page', this.pid, 'widget']);
      }
    );
  }

}
