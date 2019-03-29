var mongoose = new require('mongoose');
var websiteSchema = require('./website.schema.server');
var websiteModel = mongoose.model("websiteModel", websiteSchema);
var userModel = require('../user/user.model.server');
mongoose.set('useFindAndModify', false);

websiteModel.createWebsite = createWebsiteForUser;
websiteModel.findWebsitesForUser = findAllWebsitesForUser;
websiteModel.findWebsiteById = findWebsiteById;
websiteModel.updateWebsite = updateWebsite;
websiteModel.deleteWebsite = deleteWebsite;



module.exports = WebsiteModel;

function findWebSitesForUser(userId){
  // return WebsiteModel.find({"developerId": userId})
  // .populate('developerId')
  //   .populate('developerId', 'username')
  //   .exec();
  return websiteModel.find({_user: userId});
}

function createWebsite(website){
  website._user = userId;
  console.log(userId);
  return websiteModel.create(website)
    .then(function(responseWebsite) {
      console.log('response');
      userModel.findUserById(responseWebsite._user)
        .then(function(user) {
          user.websites.push(responseWebsite);
          return user.save();
        });
      console.log(responseWebsite);
      return responseWebsite;
    });
  console.log('response');
}

function findWebsiteById(websiteId) {
  return websiteModel.findById(websiteId);
}

function updateWebsite(websiteId, website) {
  return websiteModel.findByIdAndUpdate(websiteId, website);
}

function deleteWebsite(websiteId) {
  return websiteModel.findByIdAndRemove(websiteId);
}
