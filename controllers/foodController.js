const Food = require("../models/Food");

const getAllFoods = async (req, res) => {
  const foods = await Food.find({}).sort({ quantity: -1 });
  res.json(foods);
};

const getFood = async (req, res) => {
  const { id } = req.params;
  const food = await Food.findById(id);

  if (!food) {
    res.json({ err: "Food Item does not exist" });
  } else {
    res.json(food);
  }
};

const createFood = async (req, res) => {
  const { name, price, quantity, availability, description } = req.body;
  const food = await Food.create({
    name,
    price,
    quantity,
    availability,
    description,
  });
  res.json({ msg: "Food Item created" });
};

const updateFood = async (req, res) => {
  const { id } = req.params;
  const food = await Food.findByIdAndUpdate(id, {
    ...req.body,
  });

  if (!food) {
    res.json({ err: "Food Item does not exist" });
  } else {
    res.json({ msg: "Food Item updated" });
  }
};

const deleteFood = async (req, res) => {
  const { id } = req.params;
  const food = await Food.findByIdAndDelete(id);

  if (!food) {
    res.json({ err: "Food Item does not exist" });
  } else {
    res.json({ msg: "Food Item deleted" });
  }
};

const getAvailableFood = async (req, res) => {
  const foods = await Food.find({ availability: "true" });
  res.json(foods);
};

module.exports = {
  getAllFoods,
  getFood,
  createFood,
  updateFood,
  deleteFood,
  getAvailableFood,
};
