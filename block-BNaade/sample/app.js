const express = require("express");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/sample", (err) => {
  console.log(err ? err : "connected to database");
});

// initalize express
const app = express();

// middleware

// ejs setup
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.urlencoded({ extended: false }));

// routes
app.use("/", require("./routes/index"));
app.use("/users", require("./routes/user"));

// error middleware
app.use((req, res, next) => {
  res.send("Page Not Found");
});

app.use((err, req, res, next) => {
  res.send(err);
});

// listener
app.listen(3000, () => {
  console.log("server is listening on port 3k");
});
