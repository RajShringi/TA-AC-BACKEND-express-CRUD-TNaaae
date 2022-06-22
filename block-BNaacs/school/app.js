const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

mongoose.connect("mongodb://localhost/school", (err) => {
  console.log(err ? err : "connected to database");
});

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3000, () => {
  console.log("server is listening on port 3k");
});
