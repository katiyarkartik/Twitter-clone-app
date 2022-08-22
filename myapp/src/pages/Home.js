import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { Route } from "react-router-dom";
import { GrTwitter } from "react-icons/gr";
import { GrHome } from "react-icons/gr";
import { RiHomeSmileFill } from "react-icons/ri";
import { MdExplore } from "react-icons/md";
import { BsBell, BsBookmarks } from "react-icons/bs";
import { FiMail, FiHash } from "react-icons/fi";
import { CgMoreO, CgNotes } from "react-icons/cg";
import { FiUser } from "react-icons/fi";
import { TbHome } from "react-icons/tb";
import Homepage from "./Homepage";
import News from "../components/News";
import { Link } from "react-router-dom";
const Home = () => {
  let navigate = useNavigate();
  // const [userInfo, setUserInfo] = useState();
  const userInfo = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;
  async function logout() {
    localStorage.removeItem("userInfo");
    navigate("/");
  }
  return (
    <div>
      <div className="home">
        <div className="left-menu">
          <ul className="nav-list">
            <li style={{ fontSize: "30px" }}>
              <GrTwitter />{" "}
            </li>
            <li>
              <TbHome />
              <span>Home</span>
            </li>
            <Link to={"/profile"}>
              <li>
                <FiUser />
                <span>Profile</span>
              </li>
            </Link>
            <li>
              <FiHash />
              <span>Explore</span>
            </li>
            <li>
              <BsBell />
              <span>Notifications</span>
            </li>
            <li>
              <FiMail />
              <span>Messages</span>
            </li>
            <li>
              <BsBookmarks />
              <span>Bookmarks</span>
            </li>
            <li>
              <CgNotes />
              <span>Lists</span>
            </li>

            <li>
              <CgMoreO />
              <span>More</span>
            </li>
          </ul>

          <div className="tweet-btn">
            <button onClick={logout}>Logout</button>
          </div>

          <div className="userdetails">
            <div className="userImg">
              <img src={userInfo && userInfo.img} alt="" />
            </div>
            <div className="userId">
              <p className="name-user">{userInfo && userInfo.name}</p>
              <p className="name-username">{userInfo.phonenumber}</p>
            </div>
          </div>
        </div>
        <div className="vl"></div>
        <div className="center">
          <Homepage
            pic={userInfo.img}
            name={userInfo.name}
            phonenumber={userInfo.phonenumber}
          />
        </div>

        <div className="vl"></div>
        <div className="right-menu">
          <div className="search">
            <input
              type="text"
              className="search-box mainLoginInput"
              placeholder="Search.."
            />
          </div>
          <div className="whats-happening">
            <p className="whats-happening-header">What's happening</p>
            <News />
          </div>
          {/* <div className="whotofollow">
            <p className="whotofollow-header">Who to follow</p>
            <div className="follow">
              <div className="follow-img">

                <img src="" alt="" />
              </div>
              <div className="follow-btn">

              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
