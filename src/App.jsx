import { useState, useEffect } from "react";

import "./App.css";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Footer from "./Footer";
import { Routes, Route, Outlet } from "react-router-dom";
import Browse from "./Browse/Browse";
import Product from "./Product/Product";
import Locations from "./Locations/Locations";
import FAQ from "./FAQ/FAQ";
import About from "./About/About";
import List from "./List/List";

const Page = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

function App() {
  const [openCarousel, setOpenCarousel] = useState(false);
  const [filters, setFilters] = useState({
    state: "All",
    amenitie: "",
  });
  return (
    <>
      <Routes>
        <Route path="" element={<Page />}>
          <Route
            index
            element={<Home filters={filters} setFilters={setFilters} />}
          />
          <Route
            path="/browse"
            element={<Browse filters={filters} setFilters={setFilters} />}
          />
          <Route
            path="/listing/:city"
            element={
              <Product
                openCarousel={openCarousel}
                setOpenCarousel={setOpenCarousel}
              />
            }
          />
          <Route
            path="/locations"
            element={<Locations filters={filters} setFilters={setFilters} />}
          />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/about" element={<About />} />
          <Route path="/list" element={<List />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
