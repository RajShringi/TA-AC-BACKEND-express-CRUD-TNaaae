const express = require("express");
const mongoose = require("mongoose");

const indexRouter = "./routes/index";
const studentsRouter = "./routes/students";

mongoose.connect("mongodb://localhost/school", (err) => {
  console.log(err ? err : "connected to database");
});

const app = express();

app.use(express.json());

// set view engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// routes
app.use("/", require(indexRouter));
app.use("/students", require(studentsRouter));

// error middleware
app.use((req, res, next) => {
  res.send("Page not found");
});

app.listen(3000, () => {
  console.log("server is listening on port 3k");
});
