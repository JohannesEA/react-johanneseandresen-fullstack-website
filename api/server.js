const express = require("express");
const cors = require("cors");
// const path = require('path');


const app = express();

app.use(cors());


app.get("/", (req, res) => {
    res.send("Hello world!!");
});


app.get("/api/test", (req, res) => {
    res.send({ "name": "Johannes", "age": "22" });
});

// app.use(express.static(path.join(__dirname, '../client/build')));

// app.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
// });


app.listen(process.env.PORT || 5000, () => {
    console.log("Server is running..");
});

