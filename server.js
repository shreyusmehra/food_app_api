require("dotenv").config();
const express = require("express");
const app = express();
const foodRoutes = require("./routes/foodRoutes");
const authRoutes = require("./routes/authRoutes");
const mongoose = require("mongoose");

//middleware
app.use(express.json());

//routes
app.use("/foods", foodRoutes);
app.use("/users", authRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
