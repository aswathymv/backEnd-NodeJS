
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = new Schema({
  name: { type: String, required : true},
  email: { type: String, required : true},
  password: { type: String, required : true, minLength: 6},
  image: { type: String, required : true},
  places: [{ type: mongoose.Types.ObjectId , required : true, ref: 'Places'}],
});
userSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Users', userSchema);
