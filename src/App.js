import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Sidebar from "./Components/Pages/Sidebar/Sidebar";
import UserList from "./Components/Pages/UserList/UserList";
import Profile from "./Components/Pages/Profile/Profile";
import Dashboard from "./Components/Pages/Dashboard/Dashboard";
import { getUsers } from "./reducers/userList";
import "./css/global.css";

function App() {
  const dispatch = useDispatch();
  const activePage = useSelector((state) => state.activePage);
  const [showSidebar, setShowSidebar] = useState(true);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const renderActivePage = () => {
    switch (activePage) {
      case "dashboard":
        return (
          <Dashboard
            isSideBarClosed={showSidebar}
            setShowSidebar={setShowSidebar}
          />
        );
      case "listofusers":
        return <UserList />;
      case "profile":
        return <Profile />;
      default:
        return (
          <Dashboard
            isSideBarClosed={showSidebar}
            setShowSidebar={setShowSidebar}
          />
        );
    }
  };

  return (
    <>
      {showSidebar && <Sidebar />}
      {renderActivePage()}
    </>
  );
}

export default App;
