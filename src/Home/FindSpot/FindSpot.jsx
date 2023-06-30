import React from "react";
import "./FindSpot.css";
import logo from "../../assets/Rental images/logo-white.svg";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
const FindSpot = () => {
  return (
    <div className="find">
      <div className="find__container">
        <div className="box__wrapper">
          <div className="find__container__text">
            <img src={logo} alt="" />
            <div className="find__container__text__text">
              <h1>Find your spot</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="find__container__btns">
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
        </div>
      </div>
    </div>
  );
};

export default FindSpot;
