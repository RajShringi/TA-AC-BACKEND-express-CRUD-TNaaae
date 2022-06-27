const express = require("express");
const router = express.Router();
const User = require("../model/user");

router.get("/new", (req, res) => {
  res.render("form");
});

router.post("/", (req, res, next) => {
  User.create(req.body, (err, createdUser) => {
    if (err) {
      res.redirect("/users/new");
    } else {
      console.log(createdUser);
      res.redirect("/");
    }
  });
});

module.exports = router;
