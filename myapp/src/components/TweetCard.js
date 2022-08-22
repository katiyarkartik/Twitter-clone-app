import React from "react";
import "./TweetCard.css";
import { BsSuitHeart ,BsBookmarkDash} from "react-icons/bs";
import { RiArrowLeftRightLine } from "react-icons/ri";
import  {FaRegCommentDots} from "react-icons/fa";
import {AiOutlineHeart} from "react-icons/ai";

const TweetCard = ({ name, phonenumber, img, tweet, addimgUrl }) => {
  return (
    <div className="tweetcard">
      <div>
        <div className="tweet-data">
          <div className="user-pic">
            <img src={img} alt="" />
          </div>
          <div className="user-tag">
            <p>
              {name}{" "}
              <span
                style={{ color: "#1DA1F2", fontSize: "14px" }}
                className=".userphone"
              >
                @{phonenumber}{" "}
              </span>
            </p>
          </div>
        </div>
        <div className="user-tweet">{tweet}</div>
      </div>
      {/* <div className="like">
        <BsSuitHeart />
        <span> 5.2k</span>
      </div> */}
      <div className="tweet-img">
        <img src={addimgUrl} alt="" />
      </div>
      <br />
      <div>
        <ul className="like-comment">
          <li>
            <AiOutlineHeart /><span>230</span>
          </li>
          <li>
            <FaRegCommentDots /> <span>66</span>
          </li>
          <li>
            <RiArrowLeftRightLine /> <span>12</span>
          </li>
          <li>
            <BsBookmarkDash /> <span>4</span>
          </li>
        </ul>
      </div>
      <br />
      <div className="hr-bottom"></div>
    </div>
  );
};

export default TweetCard;
