module.exports = function (app) {
  app.post('/api/user/:userId/website', createWebsite);
  app.get('/api/user/:userId/website', findAllWebsitesForUser);
  app.get('/api/website/:websiteId', findWebsiteById);
  app.put('/api/website/:websiteId', updateWebsite);
  app.delete('/api/website/:websiteId', deleteWebsite);

  var websites = [
    { "_id": "123", "name": "Facebook", "developerId": "456", "description": "Lorem" },
    { "_id": "234", "name": "Tweeter", "developerId": "456", "description": "Lorem" },
    { "_id": "456", "name": "Gizmodo", "developerId": "456", "description": "Lorem" },
    { "_id": "890", "name": "Go", "developerId": "123", "description": "Lorem" },
    { "_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem" },
    { "_id": "678", "name": "Checkers", "developerId": "123", "description": "Lorem" },
    { "_id": "789", "name": "Chess", "developerId": "123", "description": "Lorem" }
  ];

  var userModel = require('./model/user/user.model.server');
  var websiteModel = require('./model/website/website.model.server');
  var pageModel = require('./model/page/page.model.server');
  var widgetModel = require('./model/widget/widget.model.server');

  function createWebsite(req, res) {
    var userId = req.params.userId;
    var website = req.body;
    // for (var i = 0; i < websites.length; i++) {
    //   if (websites[i].developerId === userId && websites[i].name === website.name) {
    //     res.status(404).send("This website is already exist.");
    //     return;
    //   }
    // }
    // website._id = Math.random().toString();
    // website.developerId = userId;
    // websites.push(website);
    // res.json(website);
    websiteModel.createWebsiteForUser(userId, website).then(
      function (newWebsite) {
        res.status(200).json(newWebsite);
      }, function (err) {
        res.status(404).json(err);
      }
    );
  }

  function findAllWebsitesForUser(req, res) {
    var userId = req.params.userId;
    var resultSet = [];
    // for (var i = 0; i < websites.length; i++) {
    //   if (websites[i].developerId === userId) {
    //     resultSet.push(websites[i]);
    //   }
    // }
    // res.json(resultSet);
    websiteModel.findWebsitesForUser(userId).then(
      function (foundWebsites) {
        res.status(200).json(foundWebsites);
      }, function (err) {
        res.status(404).json(err);
      }
    );
  }

  function findWebsiteById(req, res) {
    var websiteId = req.params.websiteId;
    // for (var i = 0; i < websites.length; i++) {
    //   if (websites[i]._id === websiteId) {
    //     return res.json(websites[i]);
    //   }
    // }
    // res.status(404).send("Cannot find the website");
    websiteModel.findWebsiteById(websiteId).then(
      function (foundWebsite) {
        res.status(200).json(foundWebsite);
      }, function (err) {
        res.status(404).json(err);
      }
    );
  }

  function updateWebsite(req, res) {
    var websiteId = req.params.websiteId;
    var updatedWebsite = req.body;

    console.log("update website: " + websiteId + " " + updatedWebsite.name + " " + updatedWebsite.description);
    // for (var i = 0; i < websites.length; i++) {
    //   if (websites[i]._id === websiteId) {
    //     websites[i].name = updatedWebsite.name;
    //     websites[i].description = updatedWebsite.description;
    //
    //     res.json(updatedWebsite);
    //     return;
    //   }
    // }
    // res.status(404).send("Website not found!");
    websiteModel.updateWebsite(websiteId, updatedWebsite).then(
      function (newlyUpdatedWebsite) {
        res.status(200).json(newlyUpdatedWebsite);
      }, function (err) {
        res.status(404).json(err);
      }
    );
  }

  function deleteWebsite (req, res) {
    var websiteId = req.params.websiteId;
    // for (var x = 0; x < websites.length; x++) {
    //   if (websites[x]._id === websiteId) {
    //     res.json(websites[x]);
    //     websites.splice(x, 1);
    //     return;
    //   }
    // }
    // res.status(404).send("Website with ID: " + websiteId + " cannot be found");
    websiteModel.deleteWebsite(websiteId).then(
      function (deletedOrNot) {
        res.status(200).json(deletedOrNot);
      }, function (err) {
        res.status(404).json(err);
      }
    );
  }
}
