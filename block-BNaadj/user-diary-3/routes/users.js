const express = require("express");
const router = express.Router();
const User = require("../models/users");

router.get("/new", (req, res, next) => {
  res.render("form");
});

router.post("/", (req, res, next) => {
  User.create(req.body, (err, createdUser) => {
    if (err) return next(err);
    res.redirect("/users");
  });
});

router.get("/", (req, res, next) => {
  User.find({}, (err, users) => {
    if (err) return next(err);
    res.render("listUsers", { users });
  });
});

router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  User.findById(id, (err, user) => {
    if (err) return next(err);
    res.render("userDetail", { user });
  });
});

router.get("/:id/edit", (req, res, next) => {
  const id = req.params.id;
  User.findById(id, (err, user) => {
    if (err) return next(err);
    res.render("updateForm", { user });
  });
});

router.post("/:id", (req, res, next) => {
  const id = req.params.id;
  User.findByIdAndUpdate(id, req.body, (err, updatedUser) => {
    if (err) return next(err);
    res.redirect("/users/" + id);
  });
});

module.exports = router;
