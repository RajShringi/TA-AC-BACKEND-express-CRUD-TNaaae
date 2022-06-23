const express = require("express");
const router = express.Router();

router.get("/new", (req, res) => {
  // show student form
});

router.post("/", (req, res) => {
  // capture the data
  // store into database
  // send response
});

router.get("/", (req, res) => {
  // list all the students
  res.render("students", { list: ["ankit", "suraj", "prashant", "ravi"] });
});

router.get("/:id", (req, res) => {
  res.render("studentDetail", {
    student: { name: "rahul", email: "rahul@altcampus.io" },
  });
});

module.exports = router;
