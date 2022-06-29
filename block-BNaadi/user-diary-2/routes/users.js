const express = require("express");
const router = express.Router();
const User = require("../models/users");

// Get user
router.get("/", (req, res, next) => {
  User.find({}, (err, users) => {
    if (err) return next(err);
    res.render("listUsers", { users });
  });
});

router.get("/:id", (req, res, next) => {
  let id = req.params.id;
  User.findById(id, (err, user) => {
    if (err) return next(err);
    res.render("singleUser", { user });
  });
});

// Create user
router.get("/new", (req, res, next) => {
  res.render("userForm");
});

router.post("/", (req, res, next) => {
  User.create(req.body, (err, createdUser) => {
    if (err) return next(err);
    res.redirect("/users");
  });
});

// Update user
router.put("/:id", (req, res, next) => {
  let id = req.params.id;
  User.findByIdAndUpdate(id, req.body, (err, updatedUser) => {
    if (err) return next(err);
    res.redirect(`/users/${id}`);
  });
});

// Delete user
router.delete("/:id", (req, res, next) => {
  let id = req.params.id;
  User.findByIdAndDelete(id, (err, deletedUser) => {
    if (err) return next(err);
    res.redirect("/users");
  });
});

module.exports = router;
