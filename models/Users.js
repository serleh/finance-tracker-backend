const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  number: { type: Number, requiref: true },
});

module.exports = mongoose.model("User", userSchema);
