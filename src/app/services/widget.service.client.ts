import {Injectable} from '@angular/core';
import {Widget, WidgetHeading, WidgetYoutube, WidgetImage, WidgetHtml} from '../models/widget.model.client';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable()
export  class WidgetService {

  widgetUpdate = new Subject<Widget[]>();
  private widgetChosen = new BehaviorSubject('DEFAULT');
  widgets: Widget[] = [
    new WidgetHeading('', '123', 'HEADING', '321', 2, 'GIZMODO'),
    new WidgetHeading('', '234', 'HEADING', '432', 4, 'Lorem ipsum'),
    new WidgetImage('', '345', 'IMAGE', '543', '100%', 'http://lorempixel.com/400/200'),
    new WidgetImage('', '456', 'IMAGE', '654', '100%', 'http://lorempixel.com/400/200'),
    new WidgetHeading('', '567', 'HEADING', '765', 4, 'Lorem ipsum'),
    new WidgetYoutube('', '678', 'YOUTUBE', '876', '100%', 'https://www.youtube.com/embed/-C_jPcUkVrM'),
    new WidgetYoutube('', '789', 'YOUTUBE', '987', '100%', 'https://www.youtube.com/embed/-C_jPcUkVrM')
  ];

  createWidget(pageId: string, widget: Widget) {
    widget._id = String(Math.random());
    widget.pageId = pageId;
    this.widgets.push(widget);
  }

  findWidgetsByPageId(pageId: string) {
    const widgetsFound = [];
    for (const widget of this.widgets) {
      if (widget.pageId === pageId) {
        widgetsFound.push(widget);
      }
    }
    return widgetsFound;
  }

  findWidgetsByID(widgetId: string) {
    for (const widget of this.widgets) {
      if (widget._id === widgetId) {
        return widget;
      }
    }
  }

  updateWidget(widgetId: string, newWidget: any) {
    for (const widget of this.widgets) {
      if (widget._id === widgetId) {
        if (widget.widgetType === 'HEADING') {
          // @ts-ignore
          widget.size = newWidget.size;
          // @ts-ignore
          widget.text = newWidget.text;
        } else if (widget.widgetType === 'IMAGE') {
          // @ts-ignore
          widget.width = newWidget.width;
          // @ts-ignore
          widget.url = newWidget.url;
        } else if (widget.widgetType === 'YOUTUBE') {
          // @ts-ignore
          widget.width = newWidget.width;
          // @ts-ignore
          widget.url = newWidget.url;
        } else if (widget.widgetType === 'HTML') {
          // @ts-ignore
          widget.text = newWidget.text;
        }
      }
    }
    this.widgetUpdate.next(this.widgets.slice());
  }

  deleteWidget(widgetId: string) {
    this.widgets.forEach((widget, index) => {
      if (widget._id === widgetId) {
        this.widgets.splice(index, 1);
      }
    });
  }
}
