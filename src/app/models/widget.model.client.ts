export interface Widget {
  name: string;
  _id: string;
  widgetType: string;
  pageId: string;
}

export class WidgetHeading implements Widget {
  name: string;
  _id: string;
  pageId: string;
  widgetType: string;
  size: number;
  text: string;

  constructor(name: string, _id: string, widgetType: string, pageId: string, size: number, text: string) {
    this._id = _id;
    this.widgetType = widgetType;
    this.pageId = pageId;
    this.size = size;
    this.text = text;
  }
}

export class WidgetImage implements Widget {
  name: string;
  _id: string;
  pageId: string;
  widgetType: string;
  width: string;
  url: string;

  constructor(name: string, _id: string, widgetType: string, pageId: string, width: string, url: string) {
    this._id = _id;
    this.widgetType = widgetType;
    this.pageId = pageId;
    this.width = width;
    this.url = url;
  }
}

export class WidgetYoutube implements Widget {
  name: string;
  _id: string;
  pageId: string;
  widgetType: string;
  width: string;
  url: string;

  constructor(name: string, _id: string, widgetType: string, pageId: string, width: string, url: string) {
    this._id = _id;
    this.widgetType = widgetType;
    this.pageId = pageId;
    this.width = width;
    this.url = url;
  }
}

export class WidgetHTML implements Widget {
  name: string;
  _id: string;
  pageId: string;
  text: string;
  widgetType: string;
  width: string;
  url: string;

  constructor(name: string, _id: string, widgetType: string, pageId: string, text: string, width: string, url: string) {
    this._id = _id;
    this.widgetType = widgetType;
    this.pageId = pageId;
    this.text = text;
    this.width = width;
    this.url = url;
  }
}


export class WidgetText implements Widget {
  name: string;
  _id: string;
  pageId: string;
  text: string;
  widgetType: string;
  width: string;
  url: string;
  placeholder: string;
  rows: string;
  formatted: boolean;

  constructor(name: string, _id: string, widgetType: string, pageId: string, text: string, width: string, url: string) {
    this._id = _id;
    this.widgetType = widgetType;
    this.pageId = pageId;
    this.text = text;
    this.width = width;
    this.url = url;
  }
}
