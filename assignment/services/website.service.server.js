module.exports = function (app) {
  app.post('/api/user/:userId/website', createWebsite);
  app.get('/api/user/:userId/website', findWebsitesByUser);
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
    { "_id": "789", "name": "Chess", "developerId": "234", "description": "Lorem" }
  ];

  function createWebsite(req, res) {
    var userId = req.params.uid;
    var website = req.body;
    for (var i = 0; i < websites.length; i++) {
      if (websites[i].developerId === userId && websites[i].name === website.name) {
        res.status(404).send("This website is already exist.");
        return;
      }
    }
    var lastId = websites[websites.length-1]._id;
    website._id = (+(lastId)+1).toString();
    website.developerId = userId;
    websites.push(website);
    res.json(website);
    res.status(200).send(website);
  }

  function findAllWebsitesForUser(req, res) {
    var userId = req.params["uid"];
    var resultSet = [];
    for (var x = 0; x < websites.length; x++) {
      if (websites[x].developerId === userId) {
        resultSet.push(websites[x]);
      }
    }
    res.json(resultSet);
    res.status(200).send(resultSet);
  }

  function findWebsiteById(req, res){
    var websiteId = req.params["wid"];
    for (var i = 0; i < websites.length; i++) {
      if (websites[i]._id === websiteId) {
        res.status(200);
        return res.json(websites[i]);
      }
    }
    res.status(404).send("Cannot find the website");
  }

  function updateWebsite(req, res) {
    var websiteId = req.params["wid"];
    var updatedWebsite = req.body;

    console.log("update website: " + websiteId + " " + updatedWebsite.name + " " + updatedWebsite.description);
    for (var i = 0; i < websites.length; i++) {
      if (websites[i]._id === websiteId) {
        websites[i].name = updatedWebsite.name;
        websites[i].description = updatedWebsite.description;
        res.status(204).send(updatedWebsite)
        res.json(updatedWebsite);
        return;
      }
    }
    res.status(404).send("Website not found!");
  }

  function deleteWebsite(req, res) {
    var websiteId = req.params["wid"];
    for (var x = 0; x < websites.length; x++) {
      if (websites[x]._id === websiteId) {
        res.status(204);
        res.json(websites[x]);
        websites.splice(x, 1);
        return;
      }
    }
    res.status(404).send("Website with ID: " + websiteId + " cannot be found");
  }
}
