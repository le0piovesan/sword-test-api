const express = require("express");
const app = express();
const port = process.env.PORT || 8888;

app.get("/", function (req, res) {
  res.send("GET request to the homepage");
});

app.post("/", function (req, res) {
  res.send("POST request to the homepage");
});

app.listen(port, () => console.log("api running"));
