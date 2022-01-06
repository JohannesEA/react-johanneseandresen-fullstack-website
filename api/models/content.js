const mongoose = require("mongoose");

const ContentSchema = new mongoose.Schema(
  {
    herotitle: { type: String, required: false },
    heroSubTitle: { type: String, require: false },
    heroImg: { type: String, required: false },
    link: { type: String, require: false },
    heroCV: { type: String, default: false },
    education: { type: Array, required: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Content", ContentSchema);
