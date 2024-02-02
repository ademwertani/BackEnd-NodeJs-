const { Double } = require("mongodb");
const mongoose = require("mongoose");

const Address = mongoose.model("Address", {
  name: {
    type: String,
  },
  latitude: {
    type: Number,
  },
  longitude: {
    type: Number,
  },
  localisation: {
    type: Number,
  },
  telephone: {
    type: Number,
  },
});

module.exports = Address;
