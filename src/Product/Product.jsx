import React, { useState, useEffect } from "react";
import "./Product.css";
import { useParams } from "react-router-dom";
import { Listing } from "../Data";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import first from "../assets/Rental images/listing/small_images/1st.png";
import second from "../assets/Rental images/listing/small_images/2nd.png";
import third from "../assets/Rental images/listing/small_images/3rd.png";
import fourth from "../assets/Rental images/listing/small_images/4th.png";
import CloseIcon from "@mui/icons-material/Close";
const Product = ({ openCarousel, setOpenCarousel }) => {
  const { city } = useParams();
  const product = Listing.find((product) => product.city === city);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const Body = document.querySelector("body");
  const overflowHidden = () => {
    Body.style.overflowY = "hidden";
  };
  const overflowScroll = () => {
    Body.style.overflowY = "scroll";
    setOpenCarousel(false);
  };
  const handleCarousel = () => {
    setOpenCarousel(true);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const {
    bedroom,
    guests,
    state,
    price,
    date,
    image,
    text1,
    text2,
    text3,
    text4,
    text5,
    text6,
    text7,
  } = product;
  return (
    <div className="product">
      <div className="container product__container">
        <h1>
          {city}, {state}
        </h1>
        <div className="product__images" onClick={overflowHidden}>
          <img src={image} alt="" onClick={handleCarousel} />
          <div className="product__images__small">
            <div className="product__images__small__container">
              <img src={first} alt="" onClick={handleCarousel} />
              <img src={second} alt="" onClick={handleCarousel} />
              <img src={third} alt="" onClick={handleCarousel} />
              <img src={fourth} alt="" onClick={handleCarousel} />
            </div>
          </div>
        </div>
      </div>
      <div
        className="carousel__container"
        style={{
          display: openCarousel ? "block" : "none",
          position: "absolute",
          width: "100vw",
          height: "100vh",
          top: "0px",
        }}
      >
        <CloseIcon
          style={{
            zIndex: "150",
            fill: "#fff",
            position: "absolute",
            top: "10px",
            right: "10px",
            cursor: "pointer",
          }}
          className="icon"
          onClick={overflowScroll}
        />
        {openCarousel && (
          <div className="carousel">
            <div className="bg"></div>
            <Carousel width="500px" dynamicHeight={true}>
              <div className="carousel__item">
                <img src={image} />
              </div>
              <div className="carousel__item">
                <img src={first} />
              </div>
              <div className="carousel__item">
                <img src={second} />
              </div>
              <div className="carousel__item">
                <img src={third} />
              </div>
              <div className="carousel__item">
                <img src={fourth} />
              </div>
            </Carousel>
          </div>
        )}
      </div>
      <div className="container product__info">
        <div className="product__info__text">
          <div className="product__info__guests">
            <div className="product__info__guests__text">
              <p>{guests} guests</p>
            </div>
            <div className="product__info__guests__text">
              <p>{bedroom} bedroom</p>
            </div>
          </div>
          <div className="product__info__text__text">
            <h3>About this listing</h3>
            <p>{text1}</p>
            <br />
            <p>{text2}</p>
            <br />
            <p>{text3}</p>
            <br />
            <p>{text4}</p>
            <br />
            <p>{text5}</p>
            <br />
            <p>{text6}</p>
            <br />
            <p>{text7}</p>
            <br />
          </div>
        </div>
        <div className="product__info__sticky">
          <div className="product__info__reserve">
            <h3>${price} /week</h3>
            <h4>{date}</h4>
            <div className="product__info__form">
              <label htmlFor="name">Full name*</label>
              <input type="text" name="" id="name" required />
            </div>
            <div className="product__info__form">
              <label htmlFor="email">Email*</label>
              <input type="text" name="" id="email" required />
            </div>
            <div className="product__info__form">
              <label htmlFor="phone">Phone number*</label>
              <input type="text" name="" id="phone" required />
            </div>
            <button>Send Inquiry</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
