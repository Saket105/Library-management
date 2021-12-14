const mongoose = require("mongoose");

var schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  gener: {
    type: String,
    required: true
  },
  edition: {
    type: String,
    required: true
  },
});

const Bookdb = mongoose.model("bookdb", schema);

module.exports = Bookdb;
