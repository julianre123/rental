import React from "react";
import { useRef } from "react";
import "./Header.css";
import logo from "../assets/Rental images/black-Logo.svg";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
const Header = () => {
  let navbar = useRef();
  const showNavBar = () => {
    navbar.current.classList.toggle("open");
  };
  const deleteNavbar = () => {
    navbar.current.classList.remove("open");
  };
  return (
    <div className="header">
      <div className="header__content">
        <Link
          to="/"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          <img src={logo} alt="" onClick={deleteNavbar} />
        </Link>
        <button className="nav__btn">
          <MenuIcon onClick={showNavBar} />
        </button>
        <ul ref={navbar}>
          <li onClick={deleteNavbar}>
            <Link
              to="/browse"
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
            >
              Browse all
            </Link>
          </li>
          <li onClick={deleteNavbar}>
            <Link
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              to="/locations"
            >
              Locations
            </Link>
          </li>
          <li onClick={deleteNavbar}>
            <Link
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              to="/faq"
            >
              FAQs
            </Link>
          </li>
          <li onClick={deleteNavbar}>
            <Link
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              to="/about"
            >
              About
            </Link>
          </li>
          <li onClick={deleteNavbar}>
            <Link
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              to="/list"
            >
              List your place
            </Link>
          </li>
          <li onClick={deleteNavbar}>
            <Link
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              to="/browse"
            >
              Browse Listings
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
