const Product = require("../models/Product");

const getProperty = async (req, res) => {
  try {
    const property = await Property.find({});
    res.json(properties);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getPropertyById = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);

    res.json(property);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getProperties,
  getPropertyById,
};