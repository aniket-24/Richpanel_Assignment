const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected!");
  } catch (error) {
    console.log("error");
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = dbConnect;
