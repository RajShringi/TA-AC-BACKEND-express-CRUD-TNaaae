const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  //list users
  res.render("users", { list: ["Joey", "Ross", "Chandler"] });
});

router.get("/new", (req, res) => {
  // show user form
  res.render("userForm");
});

router.get("/:id", (req, res) => {
  // find by id
  // show user
  res.render("singleUser", { user: { name: "joey", email: "joey@gmail.com" } });
});

router.delete("/:id", (req, res) => {
  // findByIdAndDelete
});

router.put("/:id", (req, res) => {
  //findByIdAndUpdate
});

module.exports = router;
