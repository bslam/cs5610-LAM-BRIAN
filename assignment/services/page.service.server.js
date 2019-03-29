module.exports = function (app) {
  app.post("/api/website/:websiteId/page", createPage);
  app.get("/api/website/:websiteId/page", findAllPagesForWebsite);
  app.get("/api/page/:pageId", findPageById);
  app.put("/api/page/:pageId", updatePage);
  app.delete("/api/page/:pageId", deletePage);

  pages = [
    { _id: "321", name: "Post 1", websiteId: "456", title: "Lorem" },
    { _id: "432", name: "Post 2", websiteId: "456", title: "Lorem" },
    { _id: "543", name: "Post 3", websiteId: "456", title: "Lorem" },
    { _id: "111", name: "Post 1", websiteId: "890", title: "Lorem" },
    { _id: "222", name: "Post 2", websiteId: "890", title: "Lorem" },
    { _id: "333", name: "Post 3", websiteId: "890", title: "Lorem" },
    { _id: "444", name: "Post 1", websiteId: "567", title: "Lorem" },
    { _id: "555", name: "Post 2", websiteId: "567", title: "Lorem" },
    { _id: "666", name: "Post 3", websiteId: "567", title: "Lorem" },
    { _id: "777", name: "Post 1", websiteId: "678", title: "Lorem" },
    { _id: "888", name: "Post 2", websiteId: "678", title: "Lorem" },
    { _id: "999", name: "Post 3", websiteId: "678", title: "Lorem" }
  ];

  function createPage(req, res) {
    var websiteId = req.params["websiteId"];
    var page = req.body;
    // const new_page = {
    //   _id: (new Date()).getTime() + '',
    //   name: page.name,
    //   websiteId: websiteId,
    //   description: page.description
    // };
    // pages.push(new_page);
    // res.json(new_page);
    pageModel.createPage(websiteId, page).then(
      function (newPage) {
        res.status(200).json(newPage);
      }, function (err) {
        res.status(404).json(err);
      }
    );
  }

  function findAllPagesForWebsite(req, res) {
    var websiteId = req.params.websiteId;
    var resultSet = [];
    // for (var x = 0; x < pages.length; x++) {
    //   if (pages[x].websiteId === websiteId) {
    //     resultSet.push(pages[x]);
    //   }
    // }
    // res.json(resultSet);
    pageModel.findAllPagesForWebsite(websiteId).then(
      function (foundPage) {
        res.status(200).json(foundPage);
      }, function (err) {
        res.status(404).json(err);
      }
    );
  }

  function findPageById(req, res) {
    var pageId = req.params.pageId;
    // for (var i = 0; i < pages.length; i++) {
    //   if (pages[i]._id === pageId) {
    //     return res.json(pages[i]);
    //   }
    // }
    // res.status(404).send("Cannot find page.");
    pageModel.findPageById(pageId).then(
      function (foundPage) {
        res.status(200).json(foundPage);
      }, function (err) {
        res.status(404).json(err);
      }
    );
  }

  function updatePage(req, res) {
    var pageId = req.params.pageId;
    var updatedPage = req.body;
    // for (var i = 0; i < pages.length; i++) {
    //   if (pages[i]._id === pageId) {
    //     pages[i].name = updatedPage.name;
    //     pages[i].title = updatedPage.title;
    //     res.json(pages[i]);
    //     return;
    //   }
    // }
    // res.status(404).send("Cannot find page");
    pageModel.updatePage(pageId, updatedPage).then(
      function (newlyUpdatedPage) {
        res.status(200).json(newlyUpdatedPage);
      }, function (err) {
        res.status(404).json(err);
      }
    );
  }

  function deletePage(req, res) {
    var pageId = req.params.pageId;
    // for (var x = 0; x < pages.length; x++) {
    //   if (pages[x]._id === pageId) {
    //     res.json(pages[x]);
    //     pages.splice(x, 1);
    //     return;
    //   }
    // }
    // res.status(404).send("Cannot find page");
    pageModel.deletePage(pageId).then(
      function (deletedOrNot) {
        res.status(200).json(deletedOrNot);
      }, function (err) {
        res.status(404).json(err);
      }
    );
  }
}
