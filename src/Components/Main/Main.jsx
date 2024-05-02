import React from "react";
import "./main.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuClipboardCheck } from "react-icons/lu";
import img from "../../Assets/img2.jpeg";
import img3 from "../../Assets/img3.jpeg";
import img5 from "../../Assets/img14.jpeg";
import img6 from "../../Assets/img6.jpeg";
import img7 from "../../Assets/img7.jpeg";
import img8 from "../../Assets/img8.jpeg";
import img9 from "../../Assets/img9.jpeg";
import img10 from "../../Assets/img10.jpeg";
import img11 from "../../Assets/img11.jpeg";

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Bora Bora",
    location: "French Polynesia",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "The epitome of romance, Bora Bora is one of the best travel destinations in the world. Known for its luxurious stays and adventurous activities.",
  },
  {
    id: 2,
    imgSrc: img3,
    destTitle: "Santorini",
    location: "Greece",
    grade: "SCENIC BEAUTY",
    fees: "$1000",
    description:
      "Santorini is famous for its stunning sunsets, blue-domed churches, and breathtaking views of the Aegean Sea.",
  },
  {
    id: 3,
    imgSrc: img5,
    destTitle: "Kyoto",
    location: "Japan",
    grade: "HISTORICAL CULTURE",
    fees: "$800",
    description:
      "Kyoto is a city of temples, shrines, and traditional tea houses, offering a glimpse into Japan’s rich cultural heritage.",
  },
  {
    id: 4,
    imgSrc: img6,
    destTitle: "Maui",
    location: "Hawaii, USA",
    grade: "NATURAL PARADISE",
    fees: "$900",
    description:
      "Maui is renowned for its stunning beaches, lush landscapes, and diverse marine life, making it a paradise for nature lovers.",
  },
  {
    id: 5,
    imgSrc: img7,
    destTitle: "Machu Picchu",
    location: "Peru",
    grade: "ANCIENT WONDER",
    fees: "$1200",
    description:
      "Machu Picchu is a UNESCO World Heritage site and one of the most iconic archaeological sites in the world, nestled in the Andes mountains.",
  },
  {
    id: 6,
    imgSrc: img8,
    destTitle: "Paris",
    location: "France",
    grade: "CULTURAL ICON",
    fees: "$600",
    description:
      "Paris is celebrated for its art, fashion, gastronomy, and historic landmarks like the Eiffel Tower and Louvre Museum.",
  },
  {
    id: 7,
    imgSrc: img9,
    destTitle: "Cape Town",
    location: "South Africa",
    grade: "COASTAL GEM",
    fees: "$950",
    description:
      "Cape Town boasts stunning beaches, vibrant neighborhoods, and iconic landmarks like Table Mountain and Cape Point.",
  },
  {
    id: 8,
    imgSrc: img10,
    destTitle: "Great Barrier Reef",
    location: "Australia",
    grade: "MARINE WONDERLAND",
    fees: "$1100",
    description:
      "The Great Barrier Reef is the world’s largest coral reef system, teeming with colorful marine life and ideal for diving and snorkeling.",
  },
  {
    id: 9,
    imgSrc: img11,
    destTitle: "Amalfi Coast",
    location: "Italy",
    grade: "SCENIC DRIVE",
    fees: "$850",
    description:
      "The Amalfi Coast is famous for its picturesque cliffside towns, stunning coastal views, and Mediterranean charm.",
  },
];

const Main = () => {
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 className="title">Most Visited Destinations</h3>
      </div>
      <div className="setContent grid">
        {Data.map((destination) => (
          <div key={destination.id} className="singleDestination">
            <div className="imageDiv">
              <img src={destination.imgSrc} alt={destination.destTitle} />
            </div>
            <div className="destinationDetails">
              <h4 className="destTitle">{destination.destTitle}</h4>
              <span className="continent flex">
                <HiOutlineLocationMarker className="icon" />
                <p className="name">{destination.location}</p>
              </span>
              <div className="fees flex">
                <div className="grade">
                  <span>
                    {destination.grade}
                    <small>+1</small>
                  </span>
                </div>
                <div className="price">
                  <h5>{destination.fees}</h5>
                </div>
              </div>
              <div className="desc">
                <p>{destination.description}</p>
              </div>
              <button className="btn flex">
                DETAILS
                <LuClipboardCheck className="icon" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Main;
