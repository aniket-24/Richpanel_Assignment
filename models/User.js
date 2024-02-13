const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  userID: String,
  id: String,
});

module.exports = mongoose.model("User", userSchema);
