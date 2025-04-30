const Item = require('../models/Item');

// Get all items from the "items" collection
const getItems = async (req, res) => {
  try {
    const items = await Item.find();  // Retrieve all items
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new item
const createItem = async (req, res) => {
  const newItem = new Item(req.body);

  try {
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getItems, createItem };
