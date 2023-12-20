const express = require("express");
const router = express.Router();

router.post("/login", async (req, res, next) => {
  try {
    // take user email and password and attempt to authenicate them
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
