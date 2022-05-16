const mongoose = require("mongoose");

const listSchema = new mongoose.Schema(
  {
    title: { type: String, unique: true },
    description: { type: String },
    isDone: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true, collection: "listCollection" }
);
const List = mongoose.model("List", listSchema);
module.exports = List;
