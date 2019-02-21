import {Injectable} from '@angular/core';
import { Widget } from '../models/widget.model.client';

@Injectable()
export  class WidgetService {

  // constructor(_id:String, type:String, pageId:String, size= '1', text = 'text', url = 'url', width = '100%')
  widgets: Widget[] = [
    new Widget('123', 'HEADING', '321', '2', 'GIZMODO' ),
    new Widget('234', 'HEADING', '321', '4', 'Lorem ipsum' ),
    new Widget('345', 'IMAGE', '321', '2', 'text', '100%', 'http://lorempixel.com/400/200/'),
    new Widget('456', 'HTML', '321', '<p>Lorem ipsum</p>' ),
    new Widget('567', 'HEADING', '321', '4', 'Lorem ipsum' ),
    new Widget('678', 'YOUTUBE', '321', '100%', 'https://youtu.be/AM2Ivdi9c4E' ),
    new Widget('789', 'HTML', '321', '<p>Lorem ipsum</p>' ),
  ];

  createWidget(pageId, widget) {
    this.widgets.push(widget);
  }
  findWidgetsByPageID(pageId) {
    return this.widgets.find(function (widget) {
      return widget.pageId === pageId;
    });
  }
  findWidgetsByID(widgetId) {
    return this.widgets.find(function (widget) {
      return widget.widgetId === widgetId;
    });
  }

  updateWidget(widgetId, widget) {
    for ( const i in this.widgets ) {
      if ( this.widgets[i]._id === widgetId ) {
        switch (widget.widgetType) {
          case 'HEADER':
            this.widgets[i].text = widget.text;
            this.widgets[i].size = widget.size;
            return true;

          case 'IMAGE':
            this.widgets[i].text = widget.text;
            this.widgets[i].url = widget.url;
            this.widgets[i].width = widget.width;
            return true;

          case 'YOUTUBE':
            this.widgets[i].text = widget.text;
            this.widgets[i].url = widget.url;
            this.widgets[i].width = widget.width;
            return true;
        }

      }
    }
    return false;
  }
  deleteWidget(widgetId: String) {
    for (const i in this.widgets) {
      if (this.widgets[i]._id === widgetId) {
        const j = +i;
        this.widgets.splice(j, 1);
      }
    }
  }
}
