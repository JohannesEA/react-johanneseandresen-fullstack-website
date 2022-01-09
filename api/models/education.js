const mongoose = require("mongoose");

const EducationSchema = new mongoose.Schema(
  {
    title: { type: String, required: false },
    area: { type: String, require: false },
    year: { type: String, required: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Education", EducationSchema);
