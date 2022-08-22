const express = require("express");
const app = express();
const morgan = require("morgan");
const colors = require("colors");
const cors = require("cors");
const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
app.use(morgan('dev'))
app.use(cors());
app.use(express.urlencoded({extended: true}))
app.use(express.json());
const path = require("path");
const connectDB = require("./config/db");
//Mongo URI

connectDB()
//Register user

require("./models/usermodel");

const User = mongoose.model("userInfo");

app.post("/register", async (req, res) => {
  const { name, phonenumber, password, imglink } = req.body;
  try {
    const encryptedPassword = await bcryptjs.hash(password, 10);
    await User.create({
      name,
      phonenumber,
      password: encryptedPassword,
      imglink,
    });
    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "error" });
  }
});

//User Login

app.post(
  "/login",
  asyncHandler(async (req, res) => {
    const { phonenumber, password } = req.body;

    const user = await User.findOne({ phonenumber });

    if (!user) {
      res.status(400);
      res.json({ error: "user not found" });
    }
    if (await bcryptjs.compare(password, user.password)) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_KEY);
      if (res.status(201)) {
        return res.json({
          status: "ok",
          data: {
            token: token,
            name: user.name,
            phonenumber: user.phonenumber,
            img: user.imglink,
            id: user._id,
          },
        });
      } else {
        res.status(500);
        return res.json({ error: "error" });
      }
    } else {
      res.status(401);
      res.json({ status: "error", error: "Invalid password" });
    }
  })
);
const PORT = process.env.PORT || 8000;

app.post("/userdata", async (req, res) => {
  const { token } = req.body;
  try {
    const user = jwt.verify(token, JWT_KEY);
    const phonenumber = user.phonenumber;
    User.findOne({ phonenumber: phonenumber })
      .then((data) => {
        res.send({ staus: "ok", data: data });
        console.log(token);
      })
      .catch({ status: "error", data: error });
  } catch (error) {}
});

//tweet

require("./models/postmodel");

const Tweet = mongoose.model("postInfo");

app.post("/addtweet", async (req, res) => {
  const { name, phonenumber, img, tweet, date, addimgUrl } = req.body;
  try {
    await Tweet.create({
      name,
      phonenumber,
      img,
      tweet,
      date,
      addimgUrl,
    });

    res.json({ status: "ok" });
    res.status(201);
  } catch (error) {
    res.json({ status: "error" });
    res.status(400);
  }
});
app.get("/gettweets", async (req, res) => {
  Tweet.find({}, function (err, tweet) {
    if (err) console.warn(err);
    console.log(tweet);
    return res.json(tweet);
  }).sort({ date: -1 });
});


if (process.env.NODE_ENV === "production") {
  app.use(express.static("myapp/build"));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve("myapp", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API in work!");
  });
}

app.listen(PORT, (req, res) => {
  console.log(`server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.inverse);
});
