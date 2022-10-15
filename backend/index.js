const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
// Importing routes
const userRoute = require("./routes/user.route");
const postRoute = require("./routes/post.route");

const app = express();

// Load env variables
dotenv.config();

// Middlewares
app.use(express.json());
app.use(cors());

// Using routes
app.use("/api/user", userRoute);
app.use("/api/post", postRoute);
// so the url is /api/user/register - for register
// so the url is /api/user/login - for login

// DB Connection
mongoose.connect(
  'mongodb+srv://admin:l7dhBiwhmaOVhuWu@cluster0.lciiavf.mongodb.net/test',
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB");
  }
);

// Server Initiation
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
