const mongoose = require("mongoose");

const propertySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  distance: {
    type: String,
    required: true,
  },
  Meals: {
    type: Boolean,
    required: true,
  },
  Pets: {
    type: Boolean,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

const Property = mongoose.model("property", propertySchema);

module.exports = Property;