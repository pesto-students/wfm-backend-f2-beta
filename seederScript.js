require("dotenv").config();

const propertyData = require("./data/properties");
const connectDB = require("./config/db");
const Property = require("./models/Property");

connectDB();

const importData = async () => {
  try {
    await Property.deleteMany({});

    await Property.insertMany(productData);

    console.log("Data Import Success");

    process.exit();
  } catch (error) {
    console.error("Error with data import", error);
    process.exit(1);
  }
};

importData();