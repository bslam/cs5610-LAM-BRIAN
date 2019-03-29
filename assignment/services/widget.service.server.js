module.exports = function (app) {


  var widgets = [
    { _id: "123", widgetType: "HEADING", name: ' ', pageId: "321", size: "2", text: "GIZMODO", url: "", width: "", height: 100, rows: 0, class: '', icon: '', deletable: false, formatted: false, placeholder: '' },
    { _id: "234", widgetType: "HEADING", name: ' ', pageId: "111", size: "4", text: "Lorem ipsum", url: "", width: "", height: 100, rows: 0, class: '', icon: '', deletable: false, formatted: false, placeholder: '' },
    { _id: "345", widgetType: "IMAGE", pageId: "111", size: "", text: "", width: "100%", url: "http://lorempixel.com/400/200/" },
    { _id: "567", widgetType: "HEADING", name: ' ', pageId: "111", size: "4", text: "Lorem ipsum", url: "", width: "", height: 100, rows: 0, class: '', icon: '', deletable: false, formatted: false, placeholder: '' },
    { _id: "678", widgetType: "YOUTUBE", name: ' ', pageId: "111", size: "", text: "", url: 'https://www.youtube.com/embed/-C_jPcUkVrM', width: "100%", height: 100, rows: 0, class: '', icon: '', deletable: false, formatted: false, placeholder: '' },
  ];




  var multer = require('multer'); // npm install multer --save
  // var upload = multer({ dest: __dirname+'/../../src/assets/uploads' });
  var upload = multer({ dest: __dirname+'/../../dist/A1/assets/uploads' });

  app.post("/api/page/:pageId/widget", createWidget);
  app.get("/api/page/:pageId/widget",findAllWidgetsForPage);
  app.get("/api/widget/:widgetId",findWidgetById);
  app.put("/api/widget/:widgetId",updateWidget);
  app.delete("/api/widget/:widgetId",deleteWidget);
  //REORDER
  app.put("/api/page/:pageId/widget",reorderWidgets);

  //UPLOAD
  app.post ("/api/upload", upload.single('myFile'), uploadImage);

  var userModel = require('../model/user/user.model.server');
  var websiteModel = require('../model/website/website.model.server');
  var pageModel = require('../model/page/page.model.server');
  var widgetModel = require('../model/widget/widget.model.server');

  function createWidget(req, res) {
    // var widget = req.body;
    // var prevId = widgets[widgets.length-1]._id;
    // widget._id = ((prevId)+1).toString();
    // widget.pageId = req.params.pageId;
    // widget.widgetType = req.query.type;
    // // switch(widget.widgetType) {
    // //   case "HEADING":
    // //     // code block
    // //     break;
    // //   case "IMAGE":
    // //     // code block
    // //     break;
    // //   case "YOUTUBE":
    // //   // code block
    // // }
    // widgets.push(widget);
    // res.status(201).send(widget);
    // // res.json(widget);
    var pageId = req.params.pageId;
    widgetModel
      .createWidget(pageId, req.body)
      .then(function (responseWidget) {
          res.status(200).json(responseWidget);
        },
        function (error) {
          res.status(404).json(error);
        });

  }

  function findAllWidgetsForPage(req, res) {
    var pageId = req.params.pageId;
    // var allWidgets = [];
    // for (var i in widgets) {
    //   if (widgets[i].pageId === pageId) {
    //     allWidgets.push(widgets[i]);
    //   }
    // }
    // res.json(allWidgets);
    widgetModel.findAllWidgetsForPage(pageId).then(
      function (foundWidgets) {
        res.status(200).json(foundWidgets);
      }, function (err) {
        res.status(404).json(err);
      }
    );
  }


  function findWidgetById(req, res) {
    var widgetId = req.params.widgetId;
    // for (const i of widgets) {
    //   if (i._id === widgetId) {
    //     //res.json(widgets[i]);
    //     res.status(200).send(i);
    //     return;
    //   }
    // }
    // res.status(404).send("No widget matching this Id");
    widgetModel.findWidgetById(widgetId).then(
      function (foundWidget) {
        res.status(200).json(foundWidget);
      }, function (err) {
        res.status(404).json(err);
      }
    );
  }

  function updateWidget(req, res) {
    var widgetId = req.params.widgetId;
    var newWidget = req.body;
    // for (var i = 0; i < widgets.length; i++) {
    //   if (widgets[i]._id === widgetId) {
    //     widgets[i] = widget;
    //     res.status(200).send(widget);
    //     return;
    //   }
    // }
    // res.status(404).send("Widget not updated, no wgid matching ");
    widgetModel.updateWidget(widgetId, newWidget).then(
      function (updatedWidget) {
        res.status(200).json(updatedWidget);
      },
      function (err) {
        res.status(404).json(err);
      }
    );
  }

  function deleteWidget(req, res) {
    var widgetId = req.params.widgetId;
    // for (var i = 0; i < widgets.length; i++) {
    //   if (widgets[i]._id === widgetId) {
    //     widgets.splice(i,1);
    //     res.status(200).send(widgets);
    //     return;
    //   }
    // }
    // res.status(404).send("Widget not deleted, no matching wgid");
    widgetModel.deleteWidget(widgetId).then(
      function (deletedOrNot) {
        res.json(deletedOrNot);
      }, function (err) {
        res.status(404).json(err);
      }
    );
  }

  function array_swap(arr, old_index, new_index) {
    while (old_index < 0) {
      old_index += arr.length;
    }
    while (new_index < 0) {
      new_index += arr.length;
    }
    if (new_index >= arr.length) {
      var k = new_index - arr.length + 1;
      while (k--) {
        arr.push(undefined);
      }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
  }

  function reorderWidgets(req, res) {
    var startIndex = parseInt(req.query["start"]);
    var endIndex = parseInt(req.query["end"]);
    array_swap(widgets, startIndex, endIndex);
    // res.sendStatus(200);
  }

  function uploadImage(req, res) {
    if(req.file === undefined) {
      console.log(req.body);
      console.log("undefined file?");
      return;
    }
    // console.log(req.body);
    var widgetId = req.body.widgetId;
    var width = req.body.width;
    console.log(req.file);
    var myFile = req.file;
    var userId = req.body.userId;
    var websiteId = req.body.websiteId;
    var pageId = req.body.pageId;
    var originalname = myFile.originalname; // file name on user's computer
    var filename = myFile.filename; // new file name in upload folder
    var path = myFile.path; // full path of uploaded file
    var destination = myFile.destination; // folder where file is saved to
    var size = myFile.size;
    var mimetype = myFile.mimetype;
    // widget = findWidgetById(widgetId);
    var widgetId = req.params.widgetId;
    for (const i of widgets) {
      if (i._id === widgetId) {
        //res.json(widgets[i]);
        i.url = '/uploads/' + filename;
        return;
      }
    }

  }



}
