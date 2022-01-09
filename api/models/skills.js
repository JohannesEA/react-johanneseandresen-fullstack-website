const mongoose = require("mongoose");

const SkillSchema = new mongoose.Schema(
  {
    title: { type: String, required: false, unique: true },
    details: { type: String, require: false },
    grade: { type: String, required: false },
    color: { type: String, required: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Skill", SkillSchema);
