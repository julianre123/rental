import React from "react";
import "./FindLocation.css";
import { Link } from "react-router-dom";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import sanFrancisco from "../../assets/Rental images/location/san-francisco.png";
import Austin from "../../assets/Rental images/location/austin.png";
import NewYork from "../../assets/Rental images/location/new-york.png";
import Chicago from "../../assets/Rental images/location/chicago.png";
const FindLocation = ({ filters, setFilters }) => {
  return (
    <div className="find__location">
      <div className="find__location__container">
        <div className="find__location__text">
          <h1>Find your location</h1>
          <Link to="/locations">
            See all locations{" "}
            <span>
              <KeyboardArrowRightIcon />
            </span>
          </Link>
        </div>
        <div className="find__location__items">
          <Link
            className="find__location__item"
            to="/browse"
            onClick={() =>
              setFilters(() => ({
                state: "San Francisco",
                amenitie: "",
              }))
            }
          >
            <img src={sanFrancisco} alt="" />
            <p>San Francisco</p>
          </Link>
          <Link
            className="find__location__item"
            to="/browse"
            onClick={() =>
              setFilters(() => ({
                state: "Austin",
                amenitie: "",
              }))
            }
          >
            <img src={Austin} alt="" />
            <p>Austin</p>
          </Link>
          <Link
            className="find__location__item"
            to="/browse"
            onClick={() =>
              setFilters(() => ({
                state: "New York",
                amenitie: "",
              }))
            }
          >
            <img src={NewYork} alt="" />
            <p>New York</p>
          </Link>
          <Link
            className="find__location__item"
            to="/browse"
            onClick={() =>
              setFilters(() => ({
                state: "Chicago",
                amenitie: "",
              }))
            }
          >
            <img src={Chicago} alt="" />
            <p>Chicago</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FindLocation;
