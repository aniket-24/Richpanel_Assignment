const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dbConnect= require("./config/database");
const authRoutes = require("./routes/authRoutes");
require("dotenv").config();

const app = express();

//CORS
app.use((req, res, next) => {
  res.append("Access-Control-Allow-Origin", ["*"]);
  res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.append("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});
app.use(cors());

app.use(bodyParser.json());

// Routes
app.use(authRoutes);

// Mongoose Connection
dbConnect();

// For Production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(PORT);
});
