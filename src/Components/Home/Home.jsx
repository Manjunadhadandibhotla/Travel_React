import React from 'react'
import './home.css'
import video from '../../Assets/video4.mp4'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";
import { IoListOutline } from "react-icons/io5";
import { TbApps } from "react-icons/tb";

const Home = () => {
  return (
    <section className="home">
      <div className="overlay">
        <video src={video} muted autoPlay loop type="video4/mp4"></video>
        <div className="homeContent container">
          <div className="textDiv">
            <span className="smallText">Our Packages</span>
            <h1 className="homeTitle">Search for Your Holiday</h1>
          </div>

          <div className="cardDiv grid">
            <div className="destinationInput">
              <label htmlFor="city">Search Your destination:</label>
              <div className="input flex">
                <input type="text" placeholder="Enter name here....." />
                <HiOutlineLocationMarker className="icon" />
              </div>
            </div>
            <div className="dateInput">
              <label htmlFor="date">Select Your Date:</label>
              <div className="input flex">
                <input type="date" />
              </div>
            </div>
            <div className="priceInput">
              <div className="label_total flex">
                <label htmlFor="price">Max Price:</label>
                <h3 className="total">$5000</h3>
              </div>
              <div className="input flex">
                <input type="range" min="1000" max="5000" />
              </div>
            </div>
            <div className="searchOptions flex">
              <HiFilter className="icon" />
              <span>More Filters</span>
            </div>
          </div>
          <div className="homeFooterIcons flex">
            <div className="rightIcons">
              <FiFacebook className="icon" />
              <FaInstagram className="icon" />
              <FaTripadvisor className="icon" />
            </div>
            <div className="leftIcons">
              
              <IoListOutline className="icon" />
              <TbApps className='icon'/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home