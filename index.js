const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
const formRoute = require("./routes/form_route.js");
const cors = require("cors");

// Configurations
dotenv.config();
const app = express();
connectDB();
const port = process.env.PORT || 5000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Routes
app.use("/api", formRoute);

// Listning to port
app.listen(port, () => console.log(`Server started on port ${port}`));
// app.listen();
