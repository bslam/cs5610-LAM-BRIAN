var mongoose = require('mongoose');
var widgetSchema = require('../widget/widget.schema.server');

var websiteSchema =mongoose.Schema({
  name: String,
  developerId: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
  description: String,
  widgets: [widgetSchema],
  visitCount: Number
}, {collection: 'website'})

module.exports = websiteSchema;
