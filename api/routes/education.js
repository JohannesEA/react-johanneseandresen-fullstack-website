const Education = require("../models/education");
const router = require("express").Router();

router.post("/", async (req, res) => {
  const education = new Education(req.body);
  try {
    const savedEducation = await education.save();
    res.status(200).json(savedEducation);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedEducation = await Education.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updatedEducation);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedEducation = await Education.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedEducation);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const education = await Education.find();
    res.status(200).json(education);
  } catch (error) {
    res.send(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const education = await Education.findById(req.params.id);
    res.status(200).json(education);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
