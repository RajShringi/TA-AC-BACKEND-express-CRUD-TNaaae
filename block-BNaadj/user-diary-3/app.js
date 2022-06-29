const express = require("express");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/user-diary-3", (err) => {
  console.log(err ? err : "connected to database");
});

const app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.urlencoded({ extended: false }));

app.use("/users", require("./routes/users"));

app.listen(4000, () => {
  console.log("server is listening on port 4k");
});
