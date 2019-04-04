import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../services/widget.service.client';
import {Widget, WidgetHeading, WidgetHTML, WidgetImage, WidgetText, WidgetYoutube} from '../../../models/widget.model.client';
import {Page} from '../../../models/page.model.client';

@Component({
  selector: 'app-widget-chooser',
  templateUrl: './widget-chooser.component.html',
  styleUrls: ['./widget-chooser.component.css']
})
export class WidgetChooserComponent implements OnInit {
  widget: Widget;
  widgets: Widget[] = [];
  uid: string;
  wid: string;
  pid: string;
  size: string;
  text: string;
  width: string;
  url: string;


  constructor(private activateRoute: ActivatedRoute, private widgetService: WidgetService, private router: Router) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(
      (params: any) => {
        // console.log('widget edit params:" ');
        // console.log(params);
        this.uid = params['uid'];
        this.wid = params['wid'];
        this.pid = params['pid'];
      });
  }


  // onSubmit(type: string) {
  //   console.log(type);
  //   console.log('Making a new widget');
  //   this.widget.widgetType = type;
  //   this.widget.pageId = this.pid;
  //   this.widgetService.createWidget(this.pid, this.widget, type).subscribe(
  //     (data: any) => {
  //       console.log('inside the brakets');
  //       this.widget = data;
  //       console.log(this.widget);
  //
  //       this.router.navigate(['../' + this.widget._id], {relativeTo: this.activateRoute});
  //     }
  //   );
  // }

  onSubmit(type: string) {
    // let newWidget: any;
    switch (type) {
      case 'HEADING': {
        this.widget = new WidgetHeading (
          undefined, undefined, 'HEADING', undefined, undefined, undefined
      );
        break;
      }
      case 'YOUTUBE': {
        this.widget = new WidgetYoutube (
          undefined, undefined, 'YOUTUBE', undefined, undefined, undefined
        );
        break;
      }
      case 'IMAGE': {
        this.widget = new WidgetImage(
          undefined, undefined, 'IMAGE', undefined, undefined, undefined
        );
        break;
      }
      case 'HTML': {
        this.widget = new WidgetHTML (
          undefined, undefined, 'HTML', undefined, undefined, undefined, undefined
        );
        break;
      }
      case 'TEXT': {
        this.widget = new WidgetText (
          undefined, undefined, 'TEXT', undefined, undefined, undefined, undefined
        );
        break;
      }
    }
    console.log(this.widget);
    // then call the api service to create the new widget
    this.widgetService.createWidget(this.pid, this.widget, type)
      .subscribe((data: Widget) => {
        console.log('Created a new widget: ');
        console.log(data);
        // then navigate to widget edit page
        this.router.navigate(['../' + data._id], {relativeTo: this.activateRoute});
      });
  }
}
