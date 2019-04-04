var mongoose = require('mongoose');

var widgetSchema = require('./widget.schema.server');
var widgetModel = mongoose.model("Widgets", widgetSchema);

module.exports = widgetModel;

var pageModel = require('../page/page.model.server');
var userModel = require('../user/user.model.server');
var websiteModel = require('../website/website.model.server');

mongoose.set('useFindAndModify', false);

widgetModel.createWidget = createWidget;
widgetModel.findWidgetById = findWidgetById;
widgetModel.updateWidget = updateWidget;
widgetModel.deleteWidget = deleteWidget;
widgetModel.reorderWidget = reorderWidget;
widgetModel.findAllWidgetsForPage = findAllWidgetsForPage;


module.exports = widgetModel;

function createWidget(pageId, widget) {
  widget._page = pageId;
  return widgetModel.create(widget)
    .then(function (newWidget) {
      pageModel.findPageById(pageId)
        .then(function (updatedPage) {
          updatedPage.widgets.push(newWidget);
          updatedPage.save();
          console.log("inside create widget");
          console.log(newWidget);
        });
      return newWidget;
    });
}

function findAllWidgetsForPage(pid) {
  // console.log('Inside widget.model.server.js Function = findAllWidgetsForPage');
  // return pageModel.findById(pageId)
  //   .populate('widgets')
  //   .then(function (page) {
  //     console.log(page);
  //       return page.widgets;
  //     }
  //   )
  return widgetModel.find({pageId: pid});
}

function findWidgetById(widgetId) {
  return widgetModel.findById(widgetId);
}

function updateWidget(widgetId, widget) {
  return widgetModel.findByIdAndUpdate(widgetId, widget);
}

function deleteWidget(widgetId) {
  return widgetModel.findByIdAndRemove(widgetId);
}

function reorderWidget(pageId, start, end) {
  return pageModel.findPageById(pageId)
    .then(function (page) {
      const widgetToMove = page.widgets[start];
      page.widgets.splice(start, 1);
      page.widgets.splice(end, 0, widgetToMove);
      return page.save();
    });
}
