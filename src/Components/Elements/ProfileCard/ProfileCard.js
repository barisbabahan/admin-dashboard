import React from "react";
import ProfileImg from "../../../images/profile.jpeg";
import { changePage } from "../../../actions/activePage";
import { useDispatch } from "react-redux";
import "./ProfileCard.css";
const ProfileCard = () => {
  const dispatch = useDispatch();

  return (
    <div className="profile-card-root">
      <div className="profile-avatar-img-container">
        <img className="profile-avatar" src={ProfileImg} alt="your profile" />
      </div>
      <p className="profile-card-name">Barış Babahan</p>
      <p className="profile-card-email">(babahaninfo@gmail.com)</p>
      <button
        onClick={() => dispatch(changePage("profile"))}
        className="profile-card-redirect-btn"
      >
        View Profile
      </button>
    </div>
  );
};

export default ProfileCard;
