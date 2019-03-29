var mongoose = require('mongoose');
var widgetSchema = require('../widget/widget.schema.server');

var pageSchema = new mongoose.Schema({
  _website: {type: mongoose.Schema.ObjectId, ref: "websiteModel"},
  name: String,
  title: String,
  description: String,
  dateCreated: {type: Date, default: Date.now()},
  widgets: [{type: mongoose.Schema.Types.ObjectId, ref: 'widgetModel'}]
});

module.exports = pageSchema;

