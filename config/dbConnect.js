const { default: mongoose } = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose
      .connect(
        "mongodb://127.0.0.1:27017/mqqtDB"
      )
      .then(() => {
        console.log(`connected to mongoDb`);
      });
  } catch (error) {
    throw new Error(error);
  }
};
module.exports = dbConnect;
