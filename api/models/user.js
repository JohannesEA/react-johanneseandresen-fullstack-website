const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    username: { type: String, require: true },
    about: { type: String, required: false },
    password: { type: String, require: true },
    isAdmin: { type: Boolean, default: false },
    img: { type: String, required: false },
    title: { type: String, required: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
