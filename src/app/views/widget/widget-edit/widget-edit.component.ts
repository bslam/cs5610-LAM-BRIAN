import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../services/widget.service.client';
import {Widget} from '../../../models/widget.model.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css']
})
export class WidgetEditComponent implements OnInit {
  wgid: string;
  widget: Widget;
  widgets: Widget[] = [];

  constructor(private activateRoute: ActivatedRoute, private widgetService: WidgetService) {
  }

  ngOnInit() {
    this.activateRoute.params.subscribe(
      (params: any) => {
        console.log('widget edit params:" ');
        console.log(params);
        this.wgid = params['wgid'];
        this.widget = this.widgetService.findWidgetsByID(this.wgid);
        console.log(this.widget);
      });
  }

}
