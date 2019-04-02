var mongoose = new require('mongoose');
var websiteSchema = require('./website.schema.server');
var websiteModel = mongoose.model("websiteModel", websiteSchema);
var userModel = require('../user/user.model.server');
mongoose.set('useFindAndModify', false);

websiteModel.createWebsite = createWebsite;
websiteModel.findWebsitesForUser = findWebsitesForUser;
websiteModel.findWebsiteById = findWebsiteById;
websiteModel.updateWebsite = updateWebsite;
websiteModel.deleteWebsite = deleteWebsite;



module.exports = websiteModel;

function findWebsitesForUser(userId){
  // return WebsiteModel.find({"developerId": userId})
  // .populate('developerId')
  //   .populate('developerId', 'username')
  //   .exec();
  return websiteModel.find({developerId: userId});
}

function createWebsite(website){
  return websiteModel.create(website);
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
