var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//defining schema with data 
var eventSchema = new Schema ({
  title:  String,
  date: String,
  start_time: String,
  end_time: String,
  comments: String,
  street: String,
  district: String,
  city: String,
  postal_code: String,
  contact: String,
  phone: String
});

//model is a class that constructs documents
module.exports = mongoose.model("Event", eventSchema);

