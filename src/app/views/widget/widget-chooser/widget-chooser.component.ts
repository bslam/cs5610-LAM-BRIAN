import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../services/widget.service.client';
import {Widget} from '../../../models/widget.model.client';
import {Page} from '../../../models/page.model.client';

@Component({
  selector: 'app-widget-chooser',
  templateUrl: './widget-chooser.component.html',
  styleUrls: ['./widget-chooser.component.css']
})
export class WidgetChooserComponent implements OnInit {
  wgid: string;
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
        console.log('widget edit params:" ');
        console.log(params);
        this.uid = params['uid'];
        this.wid = params['wid'];
        this.pid = params['pid'];
        this.wgid = params['wgid'];
      });
  }

  // onSubmit(type: string) {
  //   this.widget = {name: '', _id: '', widgetType: type, pageId: this.pid, };
  //   this.widgetService.createWidget(this.pid, this.widget).subscribe(
  //     (data: any) => {
  //       this.widget = data;
  //     }
  //   );
  //   this.router.navigate(['../' + this.widget._id], {relativeTo: this.activateRoute});
  // }

  onSubmit(type: string) {
    console.log(type);
    // const page = new Page('', this.pageName, this.websiteId, this.pageDescription, this.developerId);
    // @ts-ignore
    // this.widget = new Widget('', '', type, this.pid);
    console.log('Making a new widget');
    this.widgetService.createWidget(this.pid, this.widget).subscribe(
      (data: any) => {
        console.log('inside the brakets');
        this.widget = data;
        console.log('before router');
        this.wgid = data._id;
        // this.router.navigate(['user', this.uid, 'website', this.wid, 'page', this.pid, 'widget', data._id]);
        console.log('after router');
        console.log(data);
      }
    );
    this.router.navigate(['../' + this.wgid], {relativeTo: this.activateRoute});
  }
}
