import React, { useState, useEffect } from "react";
import "./login.scss";
import "../../../../App.scss";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";

//import our assets
import video1 from "../../../LoginAssets/video1.mp4";
// import leaf from "../../../LoginAssets/leaf.jpg";

//icons
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";

const Login = () => {
  //UseState Hook to store inputs
  const [loginUserName, setloginUserName] = useState("");
  const [loginPassword, setloginPassword] = useState("");
  const navigateTo = useNavigate();

  //Let us show the message to the user
  const [loginStatus, setLoginStatus] = useState();
  const [statusHolder, setstatusHolder] = useState("message");

  //Onclick let us get what the user has entered
  const loginUser = (e) => {
    //Lets prevent submitting
    e.preventDefault();
    //we shall require axios to create an API that connects to the server - lets install that
    Axios.post("http://localhost:3002/login", {
      //create variables to send the variables through the route
      LoginUserName: loginUserName,
      LoginPassword: loginPassword,
    })
      .then((response) => {
        console.log();
        //I want to catch response first - we have successfully from the database and we can catch error if the crededentials are wrong.
        if (
          response.data.message ||
          loginUserName == "" ||
          loginPassword == ""
        ) {
          //if Credential dont match
          navigateTo("/"); //so we shall navigate to the same login page
          setLoginStatus("Credentials don't exist!");
        } else {
          navigateTo("/dashboard"); // if the credentials match we shall navigate to the dashboard
        }
      })
      .catch((error) => {
        console.error(error);
        setLoginStatus("An error occurred while logging in.");
      });
  };

  useEffect(() => {
    if (loginStatus !== "") {
      setstatusHolder("showMessage"); // show message
      setTimeout(() => {
        setstatusHolder("message"); // hide it after 4s
      }, 4000);
    }
  }, [loginStatus]);

  //Lets clear the form on submit
  const onSubmit = () => {
    setloginUserName("");
    setloginPassword("");
  };

  return (
    <div className="loginPage flex">
      <div className="container flex">
        <div className="videoDiv">
          <video src={video1} autoPlay muted loop></video>

          <div style={{ marginBottom: "-104px" }} className="textDiv">
            <h2 style={{ marginTop: "-65px" }} className="title">
              Create and Sell Extraordinary Products
            </h2>
            {/* <p>Adopt the peace of nature!</p>  */}
          </div>

          <div style={{ marginBottom: "-200px" }} className="footerdiv flex">
            <span className="text">Don't have an account</span>

            <Link to={"/register"}>
              <button className="btn">Sign up</button>
            </Link>
          </div>
        </div>

        <div
          style={{ marginTop: "-14px", marginLeft: "px" }}
          className="formDiv flex"
        >
          <div className="header">
            <form action="" className="form grid" onSubmit={onSubmit}>
              {/* <img src={leaf} alt="Logo Image" /> */}
              <h3>Welcome Back!</h3>
              <span className={statusHolder}>{loginStatus}</span>

              <div className="inputDev">
                <label htmlFor="username">Username</label>
                <div className="input flex">
                  <FaUserShield className="icon" />
                  <input
                    type="text"
                    id="username"
                    placeholder="Enter Username"
                    onChange={(event) => {
                      setloginUserName(event.target.value);
                    }}
                  />
                </div>
              </div>

              <div className="inputDev">
                <label htmlFor="password">Password</label>
                <div className="input flex">
                  <BsFillShieldLockFill className="icon" />
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter Password"
                    onChange={(event) => {
                      setloginPassword(event.target.value);
                    }}
                  />
                </div>
              </div>
              <button type="submit" className="btn flex" onClick={loginUser}>
                <span>Login</span>
                <AiOutlineSwapRight className="icon" />
              </button>

              {/* <a href="/dashboard">Dashboard</a> */}

              <span variant="text" style={{ textTransform: 'none', fontSize: '1rem', marginLeft:'auto' }}>
                <a href="">Forgot Password?</a>
              </span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
