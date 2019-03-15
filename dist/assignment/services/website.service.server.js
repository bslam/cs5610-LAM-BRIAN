import { Website } from "../../src/app/models/website.model.client.ts";

var websites = [
  new Website('123', 'Facebook', '456', 'Lorem'),
  new Website('234', 'Tweeter', '456', 'Lorem' ),
  new Website('456', 'Gizmodo', '456', 'Lorem' ),
];

module.exports = function(app) {
  //demo hello world api calls
  app.get("/api/website", helloworld);

  //functions start from here
  function helloworld(req, res) {
    console.log("Get API call here");
    res.status(200).send('Hello Website');
  }

}
