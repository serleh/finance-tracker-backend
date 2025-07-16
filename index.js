const express = require("express");
const app = express();
const homeRoute = require("./routes/main");
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const connectDB = require("./config/database");
connectDB();

app.use("/", homeRoute);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
