import React from "react";
import "./About.css";
import first from "../assets/Rental images/about/1st.webp";
import second from "../assets/Rental images/about/2nd.webp";
import { Link } from "react-router-dom";
import FindSpot from "../Home/FindSpot/FindSpot";

import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import logo from "../assets/Rental images/logo-white.svg";
const About = () => {
  return (
    <div className="browse">
      <div className="browse__content about__content">
        <div className="container about__container">
          <h3>ABOUT</h3>
          <div className="about__first">
            <div className="about__first__left">
              <h2>Find the short term rental that suits you.</h2>
            </div>
            <div className="about__first__right">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <br />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <img src={first} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="about__second">
        <div className="browse__content about__second__content">
          <div className="container about__second__container">
            <h2>
              List your location and start earning on a weekly basis today.
            </h2>
            <Link to="/list">List your place</Link>
          </div>
        </div>
      </div>

      <div className="browse">
        <div className="browse__content">
          <div className="container">
            <div className="about__first">
              <div className="about__first__left about__third__left">
                <h2>Where we come in</h2>
              </div>
              <div className="about__first__right about__third__right">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
            <div className="about__third__flex">
              <div className="about__third__flex__text">
                <p>01</p>
                <h3>You enquire</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="about__third__flex__text">
                <p>02</p>
                <h3>We check</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="about__third__flex__text">
                <p>03</p>
                <h3>Good to go</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="browse__content">
              <div className="box__wrapper about__fourth__wrapper">
                <div className="about__fourth__flex">
                  <h3>How we help</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </div>

            <div className="image__block">
              <div className="image__block__text">
                <p>services</p>
                <h3>Let us help you do everything you need.</h3>
              </div>
              <img src={second} alt="" />
            </div>
            <div className="box__wrapper about__last__wrapper">
              <div className="find__container__text">
                <img src={logo} alt="" />
                <div className="find__container__text__text">
                  <h1>Find your spot</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
      </div>
    </div>
  );
};

export default About;
