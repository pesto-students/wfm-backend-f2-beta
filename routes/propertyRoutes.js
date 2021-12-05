const express = require("express");
const router = express.Router();
const {
  getProperties,
  getPropertyById,
} = require("../controller/propertyControllers");

router.get("/", getPropertys);
router.get("/:id", getPropertyById);

module.exports = router;