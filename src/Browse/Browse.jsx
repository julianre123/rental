import React, { useEffect, useState } from "react";
import "./Browse.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Listing } from "../Data";
import ListingItem from "../Home/RecentListings/ListingItem";
import { Link } from "react-router-dom";
const Browse = ({ filters, setFilters }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const filterProducts = (Listing) => {
    if (filters.amenitie === "" && filters.state === "All") {
      return Listing;
    } else if (filters.state !== "All") {
      return Listing.filter((item) => item.state === filters.state);
    } else if (filters.amenitie !== "") {
      return Listing.filter((item) => {
        const Amenitie = item.amenitie.map((am) => am);
        return Amenitie.includes(filters.amenitie);
      });
    }
  };

  const filteredProducts = filterProducts(Listing);
  const handleChangeState = (event) => {
    setFilters(() => ({
      amenitie: "",
      state: event.target.value,
    }));
  };
  const handleChangeAmenitie = (event) => {
    setFilters(() => ({
      state: "All",
      amenitie: event.target.value,
    }));
  };
  return (
    <div className="browse">
      <div className="browse__content">
        <div className="container">
          <div className="browse__text">
            <h1>All listings</h1>

            <div className="browse__filters">
              <FormControl className="browse__filter">
                <InputLabel id="demo-simple-select-label">Location</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="State"
                  onChange={handleChangeState}
                  value={filters.state}
                >
                  <MenuItem value="All">All</MenuItem>
                  <MenuItem value="Chicago">Chicago</MenuItem>
                  <MenuItem value="New York">New York</MenuItem>
                  <MenuItem value="Austin">Austin</MenuItem>
                  <MenuItem value="San Francisco">San Francisco</MenuItem>
                  <MenuItem value="Columbus">Columbus</MenuItem>
                  <MenuItem value="Houston">Houston</MenuItem>
                  <MenuItem value="Los Angeles">Los Angeles</MenuItem>
                  <MenuItem value="Phoenix">Phoenix</MenuItem>
                </Select>
              </FormControl>

              <FormControl className="browse__filter">
                <InputLabel id="demo-simple-select-label">Includes</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Amenitie"
                  onChange={handleChangeAmenitie}
                  value={filters.amenitie}
                >
                  <MenuItem value="">Select Amenitie</MenuItem>
                  <MenuItem value="Fire Extinguisher">
                    Fire Extinguisher
                  </MenuItem>

                  <MenuItem value="Gym">Gym</MenuItem>
                  <MenuItem value="Air Conditioning">Air Conditioning</MenuItem>
                  <MenuItem value="Wifi">Wifi</MenuItem>
                  <MenuItem value="BBQ">BBQ</MenuItem>
                  <MenuItem value="Balcony">Balcony</MenuItem>
                  <MenuItem value="TV">TV</MenuItem>
                  <MenuItem value="Fireplace">Fireplace</MenuItem>
                  <MenuItem value="Spa">Spa</MenuItem>
                  <MenuItem value="Washing Machine">Washing Machine</MenuItem>
                  <MenuItem value="Workspace">Workspace</MenuItem>
                  <MenuItem value="Pool">Pool</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="find__location__items recent__items">
            {filteredProducts.slice(0, 6).map((item) => (
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
          <div className="browse__email">
            <div className="browse__email__text">
              <h3>Can't find what you're looking for?</h3>
              <p>Get notified on future listings by signing up to our emails</p>
            </div>
            <div className="browse__email__email">
              <input
                type="email"
                name=""
                id=""
                placeholder="Enter your email"
              />
              <button>Subscribe</button>
            </div>
          </div>
          <div className="find__location__items recent__items">
            {filteredProducts.slice(6).map((item) => (
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
    </div>
  );
};

export default Browse;
