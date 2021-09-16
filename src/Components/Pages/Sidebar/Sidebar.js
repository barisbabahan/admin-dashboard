import React from "react";
import ProfileCard from "../../Elements/ProfileCard/ProfileCard";
import SidebarElement from "../../Elements/SidebarElement/SidebarElement";
import "./Sidebar.css";
const Sidebar = () => {
  const mockSidebarElements = [
    {
      categoryTitle: "navigation menu",
      subElements: [
        { name: "List of users", notificationCount: 0 },
        { name: "dashboard", notificationCount: 0 },
        { name: "application", notificationCount: 2 },
      ],
    },
    {
      categoryTitle: "blocks",
      subElements: [
        { name: "elements", notificationCount: 0 },
        { name: "data display", notificationCount: 5 },
        { name: "marketing", notificationCount: 2 },
      ],
    },
    {
      categoryTitle: "components",
      subElements: [
        { name: "widgets", notificationCount: 0 },
        { name: "charts", notificationCount: 7 },
        { name: "tables", notificationCount: 0 },
      ],
    },
    {
      categoryTitle: "forms",
      subElements: [
        { name: "controls", notificationCount: 1 },
        { name: "components", notificationCount: 1 },
        { name: "apps", notificationCount: 1 },
      ],
    },
  ];
  return (
    <div className="sidebar-root-container">
      <h2>Admin</h2>
      <ProfileCard />
      {mockSidebarElements.map((element, i) => (
        <SidebarElement
          key={i}
          title={element.categoryTitle}
          subElements={element.subElements}
        />
      ))}
    </div>
  );
};

export default Sidebar;
