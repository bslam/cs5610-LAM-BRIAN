import {Injectable} from '@angular/core';
import {Widget, WidgetHeading, WidgetYoutube, WidgetImage, WidgetHtml} from '../models/widget.model.client';
import {BehaviorSubject, Subject} from 'rxjs';

import { User } from '../models/user.model.client';
import {Website} from '../models/website.model.client';
import {HttpClient, HttpHeaders} from '@angular/common/http';


// import { Observable } from 'rxjs/Observable ';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';

@Injectable()
export class WidgetService {
  constructor(private http: HttpClient) {
  }

  base_url = environment.baseUrl;

  createWidget(pageId: string, widget: Widget, type: string) {
    const url = this.base_url + 'api/page/' + pageId + '/widget?type=' + type;
    return this.http.post(url, widget);
  }

  findAllWidgetsForPage(pageId: string) {
    const url = this.base_url + 'api/page/' + pageId + '/widget';
    return this.http.get(url);
  }

  findWidgetById(widgetId: string) {
    const url = this.base_url + 'api/widget/' + widgetId;
    return this.http.get(url);
  }

  updateWidget(widgetId: string, newWidget: any) {
    const url = this.base_url + 'api/widget/' + widgetId;
    return this.http.put(url, newWidget);
  }

  deleteWidget(widgetId: string) {
    const url = this.base_url + 'api/widget/' + widgetId;
    return this.http.delete(url);
  }

  reorderWidgets(startIndex, endIndex, pageId) {
    const url = this.base_url + '/api/page/' + pageId + '/widget?start=' + startIndex + '&end=' + endIndex;
    return this.http.put(url, '');
  }
}
