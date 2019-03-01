module.exports = function(app) {
  //demo hello world api calls
  app.get("/api/page", helloworld);

  //functions start from here
  function helloworld(req, res) {
    console.log("Get API call here");
    res.status(200).send('Hello Page');
  }

}
