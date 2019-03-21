module.exports = function (app) {
  var widgets = [
    {
      _id: "123",
      widgetType: "HEADING",
      name: ' ',
      pageId: "111",
      size: "2",
      text: "GIZMODO",
      url: "",
      width: "",
      height: 100,
      rows: 0,
      class: '',
      icon: '',
      deletable: false,
      formatted: false,
      placeholder: ''
    },
    {
      _id: "234",
      widgetType: "HEADING",
      name: ' ',
      pageId: "222",
      size: "4",
      text: "Lorem ipsum",
      url: "",
      width: "",
      height: 100,
      rows: 0,
      class: '',
      icon: '',
      deletable: false,
      formatted: false,
      placeholder: ''
    },
    {
      _id: "345",
      widgetType: "IMAGE",
      pageId: "111",
      size: "",
      text: "",
      width: "100%",
      url: "http://lorempixel.com/400/200/"
    },

    {
      _id: "567",
      widgetType: "HEADING",
      name: ' ',
      pageId: "333",
      size: "4",
      text: "Lorem ipsum",
      url: "",
      width: "",
      height: 100,
      rows: 0,
      class: '',
      icon: '',
      deletable: false,
      formatted: false,
      placeholder: ''
    },
    {
      _id: "678",
      widgetType: "YOUTUBE",
      name: ' ',
      pageId: "111",
      size: "",
      text: "",
      url: 'https://www.youtube.com/embed/mFkli0wD4-w',
      width: "100%",
      height: 100,
      rows: 0,
      class: '',
      icon: '',
      deletable: false,
      formatted: false,
      placeholder: ''
    },

  ];
  //var widgetModel = models.widgetModel;

  var multer = require('multer'); // npm install multer --save
  var upload = multer({ dest: __dirname+'/../../src/assets/uploads' });

  /* John pappy's - declare APIs at top and write functions below */

  app.post("/api/page/:pageId/widget", createWidget);
  app.get("/api/page/:pageId/widget",findAllWidgetsForPage);
  app.get("/api/widget/:widgetId",findWidgetById);
  app.put("/api/widget/:widgetId",updateWidget);
  app.delete("/api/widget/:widgetId",deleteWidget);

  app.put("/api/page/:pageId/widget",reorderWidgets);

  //UPLOAD
  app.post ("/api/upload", upload.single('myFile'), uploadImage);

  function createWidget(req, res) {
    var widget = req.body;
    var prevId = widgets[widgets.length-1]._id;
    widget._id = (+(prevId)+1).toString();
    widgets.push(widget);
    res.status(201).send(widget);
  }

  function findAllWidgetsForPage(req, res) {
    var pageId = req.params["pid"];
    let result = [];
    for (var widget of widgets)  {
      if (widget.pageId === pageId) {
        result.push(widget);
      }
    }
    res.status(200).send(result);
  }

  function findWidgetById(req, res) {
    var widgetId = req.params["wid"];
    for (const widget of WIDGETS) {
      console.log(widget);
      if (widget._id === widgetId) {
        res.status(200).send(widget);
        return;
      }
    }
    res.status(404).send("No widget matching this Id");
  }

  function updateWidget(req, res) {
    var widgetId = req.params["wgid"];
    var widget = req.body;
    for (var i = 0; i < widgets.length; i++) {
      if (widgets[i]._id === widgetId) {
        widgets[i] = widget;
        res.status(200).send(widget);
        return;
      }
    }
    res.status(404).send("Widget not updated, no wgid matching ");
  }

  function deleteWidget(req, res) {
    var widgetId = req.params["wgid"];
    for (var i = 0; i < widgets.length; i++) {
      if (widgets[i]._id === widgetId) {
        widgets.splice(i,1);
        res.status(200).send(widgets);
        return;
      }
    }
    res.status(404).send("Widget not deleted, no matching wgid");
  }























































}
