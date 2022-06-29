const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  age: Number,
  adderess: String,
  bio: String,
  hobbies: [String],
});

module.exports = mongoose.model("User", userSchema);
