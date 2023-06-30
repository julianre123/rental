import React from "react";
import "./List.css";
const List = () => {
  return (
    <div className="browse">
      <div className="browse__content list__content">
        <div className="container">
          <div className="list__flex">
            <div className="list__flex__left">
              <h1>List your rental</h1>
              <p>
                We offer tools to connect with millions of guests who are
                looking for a rental property just like yours.
              </p>
              <ul>
                <li>Central and synchronized calendars</li>
                <li>Easy to access account statistics</li>
                <li>Account support via phone, email and chat</li>
                <li>Direct bookings to your calendar</li>
                <li>Handling of payments between the traveler and you</li>
              </ul>
            </div>
            <div className="list__flex__right">
              <p>Share your details and we will connect with you shortly</p>
              <div className="right__form">
                <div className="right__form__input">
                  <label htmlFor="name">Full name*</label>
                  <input type="text" name="" id="name" />
                </div>
                <div className="right__form__input">
                  <label htmlFor="email">Email*</label>
                  <input type="email" name="" id="email" />
                </div>
              </div>
              <div className="right__form">
                <div className="right__form__input">
                  <label htmlFor="phone">Phone number*</label>
                  <input type="text" name="" id="phone" />
                </div>
                <div className="right__form__input">
                  <label htmlFor="describe">What best describes you?*</label>
                  <select name="" id="describe">
                    <option value="Homeowner" style={{ color: "#303037;" }}>
                      Homeowner
                    </option>
                    <option value="Property Manager">Property Manager</option>
                    <option value="Software Provider">Software Provider</option>
                    <option value="Listing Website">Listing Website</option>
                    <option value="Travel Website">Travel Website</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              <div className="right__form__input">
                <label htmlFor="properties">
                  How many properties do you manage?*
                </label>
                <input type="number" />
              </div>
              <div className="right__form__input">
                <label htmlFor="comments">Comments or questions</label>
                <textarea name="comments" id="" cols="30" rows="3"></textarea>
              </div>
              <button>Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
