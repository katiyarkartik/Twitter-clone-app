import React from "react";
import "./Profile.css";
import { Link } from "react-router-dom";
const Profile = () => {
  const userInfo = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;
  return (
    <div className="profile">
      <div className="profile-pic-box">
        <img  className="profile-img" src={userInfo.img} alt="" />
      </div>
      <div className="profile-data">
        <p>{userInfo.name}</p>
        <p style={{ fontSize: "28px", color: "#1DA1F2" }}>
          @{userInfo.phonenumber}
        </p>
        <Link to={"/home"}>
          <div className="gth">
            <p>Go Back TO Home</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
