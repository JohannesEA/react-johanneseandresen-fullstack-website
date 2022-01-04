const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const skillsRoute = require("./routes/skills");
const projectRoute = require("./routes/project");

// const path = require('path');
const app = express();
dotenv.config();

mongoose
  .connect(
    "mongodb+srv://johannesea:BraHAnDek527!Jek!@cluster0.0nfuw.mongodb.net/johannesea_website?retryWrites=true&w=majority"
  )
  .then(() => console.log("db connection successfull"))
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());
app.use("/api/skills", skillsRoute);
app.use("/api/projects", projectRoute);

app.get("/", (req, res) => {
  res.send("Server is running..");
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running..");
});
