import React, { useState } from "react";
import "../../../../App.scss";

import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";

//import our assets
import video from "../../../LoginAssets/video.mp4";

//icons
import { MdMarkEmailRead } from "react-icons/md";

const ForgotPassword = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }  //useState to hold our inputs
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigateTo = useNavigate();

  //Onclick let us get what the user has entered
  const createUser = (e) => {
    e.preventDefault();
    //create  shall require axios to create an API that connects to the server - lets install that
    Axios.post("http://localhost:3002/register", {
      Email: email,
      UserName: userName,
      Password: password
    }).then((res) => {
      //On register let us redirect the user to the login page
      navigateTo("/");

      //let us clear the fields too
      setEmail("");
      setUserName("");
      setUserName("");
    });
  };

  return (
    <div className="registerPage flex">
      <div className="container flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>

          <div style={{ marginBottom: "-104px" }} className="textDiv">
            <h2 style={{ marginTop: "-65px" }} className="title">
              Code never lies sometimes comments do
            </h2>
            {/* <p>Adopt the peace of nature!</p>  */}
          </div>

          <div style={{ marginBottom: "-200px" }} className="footerdiv flex">
            <span className="text">Have an account</span>

            <Link to={"/"}>
              <button className="btn">Login</button>
            </Link>
          </div>
        </div>

        <div
          style={{ marginTop: "-138px", marginLeft: "px" }}
          className="formDiv flex"
        >
          <div className="header">
            <form action="" className="form grid">
              {/* <img src={leaf} alt="Logo Image" /> */}
              <h3>Reset Password</h3>

              <div className="inputDev">
                <label htmlFor="email">Email</label>
                <div className="input flex">
                  <MdMarkEmailRead className="icon" />
                  <input
                    type="text"
                    id="email"
                    placeholder="Enter email"
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                  />
                </div>
              </div>

              <button type="submit" className="btn flex" onClick={createUser}>
                <span>Reset Password</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
