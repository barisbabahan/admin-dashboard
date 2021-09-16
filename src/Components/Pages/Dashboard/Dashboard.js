import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { alpha, makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";

import TutorialVideoCard from "../../Elements/TutorialVideoCard/TutorialVideoCard";
import CreditCard from "../../Elements/CreditCard/CreditCard";

import WelcomeImg from "../../../images/welcome.svg";
import UpgradeImg from "../../../images/upgrade.svg";

import "./Dashboard.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Dashboard = ({ setShowSidebar, isSideBarClosed }) => {
  const classes = useStyles();
  console.log(setShowSidebar);
  return (
    <div
      className={`${classes.root} ${
        isSideBarClosed ? "active-page" : "full-page"
      }`}
    >
      <AppBar style={{ background: "#253152" }} position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={() => setShowSidebar((prevVal) => !prevVal)}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Dashboard
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </Toolbar>
      </AppBar>
      <div className="dashboard-section-container">
        <div className="welcome-section">
          <h1 className="welcome-title">Welcome back! Baris</h1>
          <p className="welcome-content">
            We are glad to see your back. You can check our new updates. Please
            watch our instruction videos to get start
          </p>
          <img className="welcome-img" src={WelcomeImg} alt="welcome" />
        </div>
        <div className="information-section">
          <div className="upgrade-section">
            <img src={UpgradeImg} alt="upgrade" />
            <p className="upgrade-content">
              Upgrade to <strong style={{ color: "#fff" }}>PRO</strong> for more
              resources
            </p>
            <Button
              variant="contained"
              style={{ background: "#7467ef", color: "#fff" }}
            >
              Upgrade
            </Button>
          </div>
          <div className="tutorial-video-card">
            <TutorialVideoCard />
            <TutorialVideoCard isRed="red" />
          </div>
        </div>
        <div className="credit-cards-container">
          <CreditCard bgColor="#f44336" />
          <CreditCard bgColor="#7467ef" />
          <CreditCard bgColor="#ff9e43" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
