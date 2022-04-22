const asyncHandler = require("express-async-handler");
const Form = require("../models/form_modal.js");

const addForm = asyncHandler(async (req, res) => {
  const { first_name, last_name, email, address, phone, postal_code } =
    req.body;

  const newForm = await Form.create({
    first_name,
    last_name,
    email,
    address,
    phone,
    postal_code,
  });

  if (newForm) {
    res.status(201).json({
      id: newForm.id,
      status: "success",
    });
  } else {
    res.status(400).json({
      message: "Form not created",
    });
  }
});

module.exports = { addForm };
