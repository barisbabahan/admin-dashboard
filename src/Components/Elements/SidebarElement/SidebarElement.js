import React from "react";
import { useDispatch } from "react-redux";
import ElementIcon from "../../../images/sidebar-element.svg";
import { changePage } from "../../../actions/activePage";
import "./SidebarElement.css";

const SidebarElement = ({ title, subElements }) => {
  const dispatch = useDispatch();

  return (
    <div className="element-card-root">
      <h4 className="element-category-title">{title}</h4>
      {subElements.map((element, i) => (
        <div
          onClick={() =>
            dispatch(changePage(element.name.replace(/\s/g, "").toLowerCase()))
          }
          key={i}
          className="elemnt-category-item"
        >
          <div className="left-side">
            <img className="item-icon" src={ElementIcon} alt="sidebar item" />
            <p className="category-elemet-text">{element.name}</p>
          </div>
          <div className="right-side">
            {element.notificationCount > 0 && (
              <div className="notification-alert">
                {element.notificationCount}
              </div>
            )}
            <span>&gt;</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SidebarElement;
