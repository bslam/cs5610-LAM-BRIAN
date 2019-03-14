import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../services/widget.service.client';
import {Widget} from '../../../models/widget.model.client';

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

  onSubmit(type: string) {
    this.widget = {name: '', _id: '', widgetType: type, pageId: this.pid, };
    this.widgetService.createWidget(this.pid, this.widget);
    this.router.navigate(['../' + this.widget._id], {relativeTo: this.activateRoute});
  }
}
