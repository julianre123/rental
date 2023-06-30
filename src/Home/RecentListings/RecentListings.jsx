import React from "react";
import "./RecentListings.css";
import { Link } from "react-router-dom";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Listing } from "../../Data";
import ListingItem from "./ListingItem";
const RecentListings = () => {
  return (
    <div className="recent">
      <div className="find__location__container">
        <div className="find__location__text">
          <h1>Recent Listings</h1>
          <Link to="/browse">
            See all listings{" "}
            <span>
              <KeyboardArrowRightIcon />
            </span>
          </Link>
        </div>
        <div className="find__location__items recent__items">
          {Listing.slice(0, 6).map((item) => (
            <ListingItem
              bedroom={item.bedroom}
              guests={item.guests}
              key={item.id}
              image={item.image}
              state={item.state}
              city={item.city}
              date={item.date}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentListings;
