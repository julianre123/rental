import React, { useEffect } from "react";
import Banner from "./Banner/Banner";
import FindLocation from "./FindLocation/FindLocation";
import HowWorks from "./HowWorks/HowWorks";
import RecentListings from "./RecentListings/RecentListings";
import Amenities from "./Amenities/Amenities";
import FindSpot from "./FindSpot/FindSpot";

const Home = ({ filters, setFilters }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="home">
      <Banner />
      <FindLocation filters={filters} setFilters={setFilters} />
      <HowWorks />
      <RecentListings />
      <Amenities filters={filters} setFilters={setFilters} />
      <FindSpot />
    </div>
  );
};

export default Home;
