
module.exports = function(app) {
  require('./services/user.services.server')(app)
  require('./services/website.service.server')(app)
  require('./services/widget.service.server')(app)
  require('./services/page.service.server')(app)






  app.get("/api/user/:uid/website/:wid", findWebsiteById);
  function findWebsiteById(req, res) {
    console.log("Finding website by ID");
    var websiteId = req.params.websiteId;
    for (var i in websites) {
      if (users[i]._id === websiteId) {
        res.send(websites[i]);
        return;
      }
    }
  }





}
