var mongoose = require('mongoose');
var widgetSchema = require('../widget/widget.schema.server');

var websiteSchema =mongoose.Schema({
  name: String,
  developerId: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
  description: String,
  pages: [{type: mongoose.Schema.Types.ObjectId, ref: 'pageModel'}]
}, {collection: 'website'})

module.exports = websiteSchema;


