import React from "react";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import { Button } from "@material-ui/core";
import "./TutorialVideoCard.css";

const TutorialVideoCard = ({ isRed }) => {
  return (
    <div
      style={{ background: isRed ? "#f44336" : "#7467ef" }}
      className="tutorial-card-root"
    >
      <div className="tutorial-informaiton-container">
        <div className="video-code-container">C1</div>
        <div className="video-information">
          <p className="video-sub-title">see updates</p>
          <p className="vide-title">Check updated</p>
        </div>
      </div>
      <Button className="video-play-button">
        <PlayCircleOutlineIcon className="play-button-svg" />
      </Button>
    </div>
  );
};

export default TutorialVideoCard;
