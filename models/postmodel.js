const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phonenumber: {
      type: String,
      required: true,
      unique: true,
    },
    img: {
      type: String,
      required: true,
    },
    tweet: {
      type: String,
      required: true,
    },
    addimgUrl: {
      type: String,
    },
    date: {
      type: String,
      required: true,
    },
  },
  // { timestamps: true },
  { collection: "postInfo" }
);
mongoose.model("postInfo", PostSchema);
