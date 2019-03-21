module.exports = function (app) {
  app.post("/api/website/:websiteId/page", createPage);
  app.get("/api/website/:websiteId/page", findAllPagesForWebsite);
  app.get("/api/page/:pageId", findPageById);
  app.put("/api/page/:pageId", updatePage);
  app.delete("/api/page/:pageId", deletePage);

  pages = [
    { _id: "321", name: "Post 1", websiteId: "456", title: "Lorem" },
    { _id: "432", name: "Post 2", websiteId: "456", title: "Lorem" },
    { _id: "543", name: "Post 3", websiteId: "456", title: "Lorem" }
  ];

  function createPage(req, res) {
    var websiteId = req.params["wid"];
    var page = req.body;
    for (var i = 0; i < pages.length; i++) {
      if (pages[i].websiteId === page.websiteId && pages[i].name === page.name) {
        res.status(404).send("This page has already existed.");
        return;
      }
    }
    page._id = Math.random().toString();
    page.websiteId = websiteId;
    pages.push(page);
    res.status(200);
    res.json(page);
  }

  function findAllPagesForWebsite(req, res) {
    var websiteId = req.params.websiteId;
    var resultSet = [];
    for (var x = 0; x < pages.length; x++) {
      if (pages[x].websiteId === websiteId) {
        resultSet.push(pages[x]);
      }
    }
    res.status(200);
    res.json(resultSet);
  }

  function findPageById(req, res){
    var pageId = req.params["pid"];
    var curSite = null;
    for (var page of pages)  {
      if (page._id === pageId) {
        curSite = page;
      }
    }
    if (curSite == null) res.status(404).send("Page not found.");
    else res.status(200).send(curSite);
  }

  function updatePage(req, res) {
    var pageId = req.params["pid"];
    var page = req.body;
    for (var i = 0; i < pages.length; i++) {
      if (pages[i]._id === pageId) {
        pages[i] = page;
        res.status(200).send(page);
        return;
      }
    }
    res.status(404).send("Page not fount by delete page");
  }

  function deletePage(req, res) {
    var pageId = req.params["pid"];
    for (var i = 0; i < pages.length; i++) {
      if (pages[i]._id === pageId) {
        pages.splice(i,1);
        res.status(200).send(pages);
        return;
      }
    }
    res.status(404).send("Page not fount by delete page");
  }
}
