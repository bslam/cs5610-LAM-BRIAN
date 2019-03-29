var mongoose = require('mongoose');
var userSchema = require('./user.schema.server');

var userModel = mongoose.model("User",userSchema);

userModel.createUser = createUser;
userModel.findUserById = findUserById;
userModel.findUserByUserName = findUserByUserName;
userModel.findByCredential = findByCredential;
userModel.updateUser = updateUser;
userModel.deleteUser = deleteUser;

//helper function
userModel.populateUsers = populateUsers;

module.exports = userModel;

function createUser(user) {
  return userModel.create(user);
}

function findUserById(userId) {
  return userModel.findById(userId);
}

function findByUsername(username) {
  return userModel.findOne({username: username});
}

function findByCredentials(username, password) {
  return userModel.findOne({username: username, password: password});
}

function updateUser(userId, user) {
  return userModel.findByIdAndUpdate(userId, user);
}

function deleteUser(userId) {
  return userModel.findByIdAndRemove(userId);
}
