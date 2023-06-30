import React, { useState, useRef, useEffect } from "react";
import "./FAQ.css";
import AddIcon from "@mui/icons-material/Add";
import { FAQItem } from "./FAQItem";
import FindSpot from "../Home/FindSpot/FindSpot";
const FAQ = () => {
  const [toggle, setToggle] = useState(null);
  let handleToggle = (id) => {
    if (toggle === id) {
      setToggle(null);
      return false;
    }
    setToggle(id);
  };
  return (
    <div className="browse">
      <div className="browse__content faq__content">
        <div className="container">
          <div className="faq__text">
            <h1>FAQs</h1>
            <p>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed quia non numquam eius modi
              tempora incidunt ut labore et dolore magnam aliquam quaerat
              voluptatem.
            </p>
          </div>
          <div className="faq__container">
            {FAQItem.map((item) => (
              <div
                key={item.id}
                className="question-section"
                onClick={() => handleToggle(item.id)}
                style={{
                  backgroundColor: "transparent",
                }}
              >
                <div className="question-align">
                  <h4>{item.question}</h4>
                  <span style={{ color: "#303037" }}>
                    <AddIcon
                      className={
                        item.id === toggle
                          ? `question-icon rotate`
                          : `question-icon`
                      }
                    />
                  </span>
                </div>
                {item.id === toggle ? (
                  <div className="p">{item.answer}</div>
                ) : (
                  ""
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <FindSpot />
    </div>
  );
};

export default FAQ;
