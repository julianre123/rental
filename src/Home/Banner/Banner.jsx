import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__content">
        <div className="text__box">
          <h1>Find rental housing that suits you.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            atque consequuntur quae nostrum quod. Inventore non minus sit aut?
          </p>
          <Link to="/browse">
            Browse Listings{" "}
            <span>
              <SearchIcon />
            </span>
          </Link>
          <Link to="/list">
            List your place{" "}
            <span>
              <KeyboardArrowRightIcon />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
