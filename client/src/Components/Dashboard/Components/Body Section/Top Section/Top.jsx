import React from "react";
import "./top.scss";
import { BiSearchAlt } from "react-icons/bi";
import { TbMessageCircle } from "react-icons/tb";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsArrowRightShort } from "react-icons/bs";

//Imported images
import MPhoto from "../../../../../../src/Components/Dashboard/Assets/MPhoto.jpg";
import image1 from "../../../../../../src/Components/Dashboard/Assets/image1.jpeg";
import video from "../../../../../../src/Components/LoginAssets/video.mp4";

const Top = () => {
  return (
    <div className="topSection">
      <div className="headerSection flex">
        <div className="title">
          <h1>Welcome to Planti.</h1>
          <p>Hello Mahesh, Welcome back!</p>
        </div>
        <div className="seacrhBar flex">
          <input type="text" placeholder="Search Dashboard" />
          <BiSearchAlt className="icon" />
        </div>
        <div className="adminDiv flex">
          <TbMessageCircle className="icon" />
          <IoMdNotificationsOutline className="icon" />
          <div className="adminImage">
            <img style={{ height: "30px" }} src={MPhoto} alt="Admin Image" />
          </div>
        </div>
      </div>
      <div className="cardSection flex">
        <div className="rightCard flex">
          <h1>Create and sell extraordinary products</h1>
          <p>World's fast growing industry today are natural made products!</p>

          <div className="buttons flex">
            <button className="btn">Explore More</button>
            <button className="btn transparent">Top Sellers</button>
          </div>
          <div className="videoDiv">
            <video src={video} autoPlay muted loop></video>
          </div>
        </div>

        <div className="leftCard flex">
          <div className="main flex">
            <div className="textDiv">
              <h1>My Stat</h1>

              <div className="flex">
                <span>
                  Today
                  <br />
                  <small>4 Orders</small>
                </span>
              </div>

              <div className="flex">
                <span style={{ marginLeft: "146px", marginTop: "-63px" }}>
                  This Month
                  <br />
                  <small>177 Orders</small>
                </span>
              </div>
              <span className=" flex link">
                Go to my orders <BsArrowRightShort className="icon" />
              </span>
            </div>
            <div className="imgDiv">
              <img src={image1} alt="Image Name" />
            </div>

            {/* <div className="sideBarCard">
              <BsQuestionCircle className="icon" />
              <div className="cardContent">
                <div className="circle1"></div>
                <div className="circle2"></div>

                <h3>Help Center</h3>
                <p>
                  Having trouble in planti, please contact us from for more
                  questions
                </p>
                <button className="btn">Go to help center</button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
