const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Team = new Schema({
  school: {
    type: String,
    required: "School name required",
  },
  search_name: {
    type: Date,
    required: "Search name required",
  },
  nickname: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  
});

module.exports = mongoose.model("Team", Team);
