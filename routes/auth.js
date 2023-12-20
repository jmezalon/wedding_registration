const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.post("/login", async (req, res, next) => {
  try {
    //
  } catch (error) {
    next(error);
  }
});

router.post("/register", async (req, res, next) => {
  try {
    // take email and password, rsp status, and the number of guest
    // and create a new user in our database
  } catch (error) {
    next(error);
  }
});

module.exports = router;
