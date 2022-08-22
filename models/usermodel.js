const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
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
    password: {
      type: String,
      required: true,
    },
    imglink: {
      type: String,
      required: true,
    },
  },
  { collection: "userInfo" }
);
mongoose.model("userInfo", UserSchema);
