const express = require("express");
const mongoose = require("mongoose");

const usersRouter = "./routes/users";

mongoose.connect("mongodb://localhost/user-diary", (err) => {
  console.log(err ? err : "connected to database");
});

const app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.urlencoded({ extended: false }));

app.use("/users", require(usersRouter));

// error middleware
app.use((req, res, next) => {
  res.send("Page not found");
});

app.listen(3000, () => {
  console.log("server is listening on port 3k");
});
