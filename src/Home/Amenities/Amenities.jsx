import React from "react";
import "./Amenities.css";
import { Amenities as hola } from "../../Data";
import { Link } from "react-router-dom";
const Amenities = ({ filters, setFilters }) => {
  return (
    <div className="amenities">
      <div className="amenities__container">
        <h1>Browse by amenities</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
        <div className="amenities__items">
          {hola.map((item) => (
            <Link
              key={item.id}
              className="amenities__item"
              to="/browse"
              onClick={() =>
                setFilters(() => ({
                  state: "All",
                  amenitie: item.text,
                }))
              }
            >
              <img src={item.image} alt="" />
              <p>{item.text}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Amenities;
