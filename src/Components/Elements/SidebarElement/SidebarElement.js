import React from "react";
import ElementIcon from "../../../images/sidebar-element.svg";
import "./SidebarElement.css";

const SidebarElement = ({ title, subElements }) => {
  return (
    <div className="element-card-root">
      <h4 className="element-category-title">{title}</h4>
      {subElements.map((element, i) => (
        <div key={i} className="elemnt-category-item">
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
