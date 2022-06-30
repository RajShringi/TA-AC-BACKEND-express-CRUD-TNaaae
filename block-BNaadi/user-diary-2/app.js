const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

// database connect
mongoose.connect("mongodb://localhost/user-diary-2", (err) => {
  console.log(err ? err : "connected to database");
});

// express initialization
const app = express();

// middleware

//view engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(logger("dev"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));

// routes
app.use("/users", require("./routes/users"));

// Error middlewares
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
