const Skills = require("../models/skills");
const router = require("express").Router();

router.get("", async (req, res) => {
  try {
    const skills = await Skills.find();
    res.status(200).json(skills);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const skills = await Skills.findById(id);
    res.status(200).json(skills);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedSkill = await Skills.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedSkill);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/", async (req, res) => {
  const skill = new Skills(req.body);

  try {
    const savedSkill = await skill.save();
    res.status(200).json(savedSkill);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deleteSkill = await Skills.findByIdAndDelete(req.params.id);
    res.status(200).json(deleteSkill);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
