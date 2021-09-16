import React from "react";
import ProfileImg from "../../../images/profile.jpeg";
import "./Profile.css";

const HeaderCards = ({ title, point }) => {
  return (
    <div className="header-card-root">
      <p className="header-card-title">{title}</p>
      <p className="header-card-information-number">{point}</p>
    </div>
  );
};

const ContactCard = ({ fullName, country, isNew, bgColor }) => {
  return (
    <div className="contact-card-root">
      <div
        style={{ background: bgColor ? bgColor : "rgba(100, 100, 256, 0.4)" }}
        className={`name-circle ${isNew && "new"}`}
      >
        {fullName.split(" ")[0].charAt(0).toUpperCase() +
          fullName.split(" ")[1].charAt(0).toUpperCase()}
      </div>
      <div className="contact-information">
        <p className="contact-name">{fullName}</p>
        <p className="contact-country">{country}</p>
      </div>
    </div>
  );
};

const Profile = () => {
  return (
    <div className="active-page">
      <div className="profile-header-section">
        <div className="profile-information-section">
          <img className="profile-img" src={ProfileImg} alt="profile" />
          <p className="profile-name">Baris Babahan</p>
          <div className="profile-balance-information">
            <div className="profile-balance-container">
              <p className="profile-balance-title">Balance</p>
              <p className="profile-balance">$ 20495</p>
            </div>
            <div className="profile-balance-container">
              <p className="profile-balance-title">Points</p>
              <p className="profile-balance">PT 3000</p>
            </div>
          </div>
        </div>
        <div className="profile-header-cards-container">
          <HeaderCards title="Project created" point="15" />
          <HeaderCards title="Completed" point="11" />
          <HeaderCards title="Published" point="18" />
        </div>
      </div>
      <div className="bottom-sections-container">
        <div className="data-usage-container">
          <h6 className="data-usage-title">Data Use</h6>
          <div className="data-results-container">
            <div className="data-result-container">
              <p className="data-result-point">140</p>
              <p className="data-point-info">avg yearly</p>
            </div>
            <div className="data-result-container">
              <p className="data-result-point">12</p>
              <p className="data-point-info">avg monthly</p>
            </div>
            <div className="data-result-container">
              <p className="data-result-point">3</p>
              <p className="data-point-info">avg weekly</p>
            </div>
          </div>
        </div>
        <div className="contacts-container">
          <h6 className="contacts-section-title">Contacts</h6>
          <ContactCard fullName="Baris Babahan" country="Lefkosa" isNew />
          <ContactCard
            bgColor="#f44336"
            fullName="John Doe"
            country="New York"
          />
          <ContactCard fullName="Watson Joyce" country="London" isNew />
          <ContactCard
            bgColor="#ff9e43"
            fullName="Emma Watson"
            country="Istanbul"
          />
        </div>
      </div>
      <h1 className="construction-text">
        Something awesome under construction....
      </h1>
    </div>
  );
};

export default Profile;
