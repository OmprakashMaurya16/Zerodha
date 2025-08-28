require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;
const URL = process.env.MONGO_URL;

const app = express();
mongoose.connect(URL);

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
