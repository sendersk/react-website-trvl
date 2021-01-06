import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import imageNo2 from "../assets/images/img-2.jpg";
import imageNo9 from "../assets/images/img-9.jpg";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out this EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__item">
            <CardItem
              src={imageNo9}
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src={imageNo2}
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Luxury"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
