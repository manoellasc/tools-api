const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const ToolSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  tags: {
    type: Array,
    required: true
  }
});

ToolSchema.plugin(mongoosePaginate);

mongoose.model("Tool", ToolSchema);
