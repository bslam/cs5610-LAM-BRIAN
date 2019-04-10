import {Component, OnInit, ViewChild} from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';


import {Widget, WidgetHeading, WidgetImage, WidgetYoutube, WidgetText, WidgetHTML} from '../../../../models/widget.model.client';
import {inject} from '@angular/core';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {SharedService} from '../../../../services/shared.service';


@Component({
  selector: 'app-widget-text',
  templateUrl: './widget-text.component.html',
  styleUrls: ['./widget-text.component.css']
})
export class WidgetTextComponent implements OnInit {

  @ViewChild('f') textForm: NgForm;

  uid: string;
  wid: string;
  pid: string;
  wgid: string;

  newWidget: WidgetText;
  widget: WidgetText;
  errorFlag: boolean;
  errorMsg: 'Please enter a Name for this Widget';

  constructor(private widgetService: WidgetService, private router: Router, private activatedRoute: ActivatedRoute,
              private sharedService: SharedService) {
  }

  ngOnInit() {
    // fetch ids from current url
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
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
  }

  onUpdateWidget() {
    console.log('onUpdateWidget');
    if (this.textForm.value.name === null || this.textForm.value.name === '') {
      this.errorFlag = true;
      return;
    }
    this.newWidget = new WidgetText(this.textForm.value.name, this.wgid, 'IMAGE', this.pid,
      this.textForm.value.text, this.textForm.value.width, this.textForm.value.url);
    console.log(this.newWidget);
    this.widgetService.updateWidget(this.wgid, this.newWidget).subscribe(
      (data: any) => {
        this.widget = data;
        this.router.navigate(['/user', this.uid, 'website', this.wid, 'page', this.pid, 'widget']);
      }
    );
  }

  onDelete() {
    this.widgetService.deleteWidget(this.wgid)
      .subscribe(
        (data: any) => this.router.navigate(['/user', this.uid, 'website', this.wid, 'page', this.pid, 'widget']),
      );
  }

}
