const { default: mongoose } = require("mongoose");

const mqqtSchema = new mongoose.Schema({
  topic: String,
  subscribe: {
    default: false,
    type: Boolean,
  },
  publish: String,
});

module.exports = mongoose.model("mqqt", mqqtSchema);
