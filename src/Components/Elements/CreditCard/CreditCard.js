import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import CirclesImg from "../../../images/circles.png";
import "./CreditCard.css";
const CreditCard = ({ bgColor }) => {
  return (
    <div style={{ background: bgColor }} className="credit-card-root">
      <img className="card-circles-bg" src={CirclesImg} alt="circle" />
      <div className="top-section">
        <div className="card-icon-container">
          <PersonIcon className="card-icon" />
        </div>
        <div className="card-detail-btn">View detail</div>
      </div>
      <div className="card-information">
        <p className="card-date">Last Week</p>
        <p className="card-user"> New Users</p>
        <p className="card-balance">200</p>
      </div>
    </div>
  );
};

export default CreditCard;
