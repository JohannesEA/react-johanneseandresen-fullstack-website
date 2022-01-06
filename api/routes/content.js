const Content = require("../models/content");
const router = require("express").Router();

router.post("/", async (req, res) => {
  const content = new Content(req.body);
  try {
    const savedContent = await content.save();
    res.status(200).json(savedContent);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedContent = await Content.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updatedContent);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedContent = await Content.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedContent);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const content = await Content.find();
    res.status(200).json(content);
  } catch (error) {
    res.send(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const content = await Content.findById(req.params.id);
    res.status(200).json(content);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
