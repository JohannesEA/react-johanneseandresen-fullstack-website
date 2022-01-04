const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema(
  {
    title: { type: String, required: false, unique: true },
    type: { type: String, require: false },
    details: { type: String, required: false },
    link: { type: String, require: false },
    price: { type: Number, default: false },
    img: { type: Array, required: false },
    logo: { type: String, required: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", ProjectSchema);
