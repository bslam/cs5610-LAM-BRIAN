module.exports = function(app) {


  //demo hello world api calls
  app.get("/api/user", helloworld);

  //functions start from here
  function helloworld(req, res) {
    console.log("Get API call here");
    res.status(200).send('Hello User');
  }

  app.get("/api/user/:uid", findUserById);
  //functions start from here
  function findUserById(req, res) {
    console.log("Finding users by ID");
    var userId = req.params.userId;
    for(var i in users) {
      if(users[i]._id ===userId) {
        res.send(users[i]);
        return;
      }
    }
  }

  app.get("api/user/:uid")
  function findUserByCred(req, res) {
    var username = req.query['username'];
    var password = req.query['password'];
    for (var i in users) {
      if(users[i].username === username && users[i].password === password) {
        res.send(users[i]);
        return;
      }
    }
  }

}
