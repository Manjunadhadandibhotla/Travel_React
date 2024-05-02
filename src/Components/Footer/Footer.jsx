import React from "react";
import "./footer.css";
import video2 from "../../Assets/video2.mp4";
import { IoIosSend } from "react-icons/io";

const Footer = () => {
  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>
      <div className="secContent">
        <div className="text">
          <small>KEEP IN TOUCH</small>
          <h2>Travel With Us</h2>
        </div>
        <div className="inputDiv">
          <input type="text" placeholder="Enter Email Address" />
          <button className="button" type="submit">
            SEND <IoIosSend className="icon" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Footer;
