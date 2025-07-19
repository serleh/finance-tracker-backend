const router = require("express").Router();
const User = require("../models/Users");

router.get("/", (req, res) => {
  res.send("Welcome");
});

router.get("/api/users", async (req, res) => {
  try {
    const user = await User.find();
    res.json(user);
  } catch (err) {
    console.error(err);
  }
});

router.post("/api/user", async (req, res) => {
  const { name, number } = req.body;
  try {
    await User.create({ name, number });
    console.log("User added to DB");
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
