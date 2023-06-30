import React, { useEffect } from "react";
import "./Locations.css";
import { Link } from "react-router-dom";
import { Locations as Location } from "../Data";
import FindSpot from "../Home/FindSpot/FindSpot";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
const Locations = ({ filters, setFilters }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="find__location">
        <div className="find__location__container">
          <div className="find__location__text">
            <h1>Find your location</h1>
          </div>
          <div className="find__location__items">
            {Location.map((item) => (
              <Link
                className="find__location__item"
                to="/browse"
                key={item.id}
                onClick={() =>
                  setFilters(() => ({
                    state: item.name,
                    amenitie: "",
                  }))
                }
              >
                <img src={item.image} alt="" />
                <p>{item.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <FindSpot />
    </div>
  );
};

export default Locations;
