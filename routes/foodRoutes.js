const express = require("express");
const router = express.Router();

const {
  getAllFoods,
  getFood,
  createFood,
  updateFood,
  deleteFood,
  getAvailableFood,
} = require("../controllers/foodController");

router.get("/", getAllFoods);
router.get("/:id", getFood);
router.get("/available", getAvailableFood);
router.post("/", createFood);
router.patch("/:id", updateFood);
router.delete("/:id", deleteFood);

module.exports = router;
