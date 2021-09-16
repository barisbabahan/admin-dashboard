import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import Sidebar from "./Components/Pages/Sidebar/Sidebar";
import UserList from "./Components/Pages/UserList/UserList";
import Profile from "./Components/Pages/Profile/Profile";
import { getUsers } from "./reducers/userList";
import "./css/global.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <>
      <Sidebar />
      <UserList />
      <Profile />
    </>
  );
}

export default App;
