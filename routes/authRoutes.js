const express = require("express");

const User = require("../models/User");

const router = express.Router();

router.post("/api/v1/login", async (req, res) => {
  const { name, email, userID, id } = req.body;
  try {
    // userID
    const findUser = await User.find({ userID: userID });
    if (findUser.length === 0) {
      const newUser = new User({
        name,
        email,
        userID,
        id,
      });
      await newUser.save();
      res.status(200).json(newUser);
    }
    return res.status(200).send({ message: "User Already exist" });
  } catch (err) {
    return res.status(404).json(err.message);
  }
});

module.exports = router;
