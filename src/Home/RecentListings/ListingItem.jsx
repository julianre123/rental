import React from "react";
import "./RecentListings.css";
import { Link } from "react-router-dom";
const ListingItem = ({ bedroom, guests, state, city, price, date, image }) => {
  return (
    <Link className="listing__item" to={`/listing/${city}`}>
      <img src={image} alt="" />
      <div className="listing__item__text">
        <div className="listing__item__bedroom">
          <p>{guests} guests</p>
          <div className="divider__dot"></div>
          <p>{bedroom} bedroom</p>
        </div>
        <p>
          {city}, {state}
        </p>
        <p>{date}</p>
        <p>${price} /week</p>
      </div>
    </Link>
  );
};

export default ListingItem;
