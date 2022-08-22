import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./PhoneSignUp.css";
import { GrTwitter } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
function PhoneSIgnUp() {
  let navigate = useNavigate();
  const [name, setname] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const [password, setpassword] = useState("");
  const [confirm, setconfirm] = useState("");
  const [empty, setempty] = useState(true);
  const [imglink, setimglink] = useState("");

  async function registeruser(event) {
    console.log(phonenumber);
    console.log(password);

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const bodyobj = {
      phonenumber,
      password,
    };

    event.preventDefault();
    const { data } = await axios.post("/login", bodyobj, config);

    console.log(data);
    if (data.status == "ok") {
      alert("login successfull");
      window.localStorage.setItem("userInfo", JSON.stringify(data.data));
      window.location.href = "./home";
    }
  }
  return (
    <div className="phone-signup">
      <div className="signup-form">
        <Link to="/">
          <AiOutlineClose style={{ color: "white", fontSize: "32px" }} />
        </Link>
        <h1>Sign In </h1>

        <form className="form" onSubmit={registeruser}>
          <input
            type="text"
            placeholder=" Phone Number or Email"
            name="phonenumber"
            onChange={(e) => setphonenumber(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder=" Password"
            password="password"
            onChange={(e) => setpassword(e.target.value)}
          />
          <br />

          <input
            style={{
              padding: 0,
              height: "40px",
              borderRadius: "100px",
              backgroundColor: "#1DA1F2",
              fontSize: "20px",
            }}
            type="submit"
            value="submit"
          />
        </form>
        <p className="questext">
          Don't have an account ?{" "}
          <Link to="/signup-phone">
            <span style={{ color: "#1DA1F2" }}>Sign Up</span>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default PhoneSIgnUp;
