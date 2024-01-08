const mongoose = require("mongoose");

const poetSchema = new mongoose.Schema({
  poet: {
    type: String,
    required: true,
  },
  data: {
    type: String,
    required: true,
  },
});

const postModel = new mongoose.model("post", poetSchema);
module.exports = postModel;
