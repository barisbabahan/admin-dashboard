import React from "react";
import ProfileImg from "../../../images/profile.jpeg";
import "./ProfileCard.css";
const ProfileCard = () => {
  return (
    <div className="profile-card-root">
      <div className="profile-avatar-img-container">
        <img className="profile-avatar" src={ProfileImg} alt="your profile" />
      </div>
      <p className="profile-card-name">Barış Babahan</p>
      <p className="profile-card-email">(babahaninfo@gmail.com)</p>
      <button className="profile-card-redirect-btn">View Profile</button>
    </div>
  );
};

export default ProfileCard;
