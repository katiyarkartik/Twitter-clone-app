import React from "react";
import { useState } from "react";
import "./AddTweet.css";
import { FiImage } from "react-icons/fi";
import { AiOutlineFileGif } from "react-icons/ai";
import { RiBarChartHorizontalFill } from "react-icons/ri";
import { VscSmiley } from "react-icons/vsc";
import { GoLocation } from "react-icons/go";
import axios from "axios";
const AddTweet = ({ img, name, phonenumber }) => {
  const [tweet, settweet] = useState("");
  const [addimgUrl, setaddimgUrl] = useState("");
  //  async function addTweetData() {
  //     console.log(pic, name, phonenumber, tweet);
  //   }

  /////////////////////////////////

  async function addTweetData(event) {
    event.preventDefault();
    let date = new Date();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const bodyobj = {
      name,
      phonenumber,
      img,
      tweet,
      date,
      addimgUrl,
    };
    console.log(img, name, phonenumber, tweet, addimgUrl);
    const { data } = await axios.post("/addtweet", bodyobj, config);

    console.log(data);
    alert("tweet added");
    window.location.reload(false);
  }

  ////////////////////////////////
  return (
    <div className="addtweet">
      <div className="add-post">
        <div className="profile-pic">
          <img src={img} alt="" />
        </div>
        <div className="post-text">
          <input
            type="text"
            placeholder="What's happening ?"
            onChange={(e) => settweet(e.target.value)}
          />
        </div>
      </div>
      <div className="divider"></div>
      <p className="add-box-additionals">
        <div className="img-box">
          <input
            type="text"
            placeholder="Add Image Url"
            onChange={(e) => setaddimgUrl(e.target.value)}
          />
        </div>
        <div>
          <div className="tweet-btn-post">
            <button onClick={addTweetData}>Tweet</button>
          </div>
        </div>
      </p>
    </div>
  );
};

export default AddTweet;
