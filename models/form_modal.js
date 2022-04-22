const mongoose = require("mongoose");

const formSchema = mongoose.Schema({
  first_name: {
    required: true,
    type: String,
  },
  last_name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  phone: {
    required: true,
    type: String,
  },
  address: {
    required: true,
    type: String,
  },
  postal_code: {
    require: true,
    type: String,
  },
});

module.exports = mongoose.model("Form", formSchema);
