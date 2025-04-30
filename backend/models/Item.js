const mongoose = require('mongoose');

// Define the schema for the "items" collection
const ItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
});

const Item = mongoose.model('Item', ItemSchema);
module.exports = Item;
