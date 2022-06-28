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

router.get("/", (req, res, next) => {
  User.find({}, (err, users) => {
    if (err) return next(err);
    res.render("users", { users });
  });
});

router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  User.findById(id, (err, user) => {
    if (err) return next(err);
    res.render("singleUser", { user });
  });
});

router.get("/:id/edit", (req, res, next) => {
  User.findById(req.params.id, (err, user) => {
    if (err) return next(err);
    res.render("updateForm", { user });
  });
});

router.post("/:id", (req, res, next) => {
  const id = req.params.id;
  User.findByIdAndUpdate(req.params.id, req.body, (err, updatedUser) => {
    if (err) return next(err);
    res.redirect(`/users/${id}`);
  });
});

module.exports = router;
