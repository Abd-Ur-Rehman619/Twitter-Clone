import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Components/HomePage";
import Communities from "./SidebarBtnComponents/Communities";
import Explore from "./SidebarBtnComponents/Explore";
import List from "./SidebarBtnComponents/List";
import Message from "./SidebarBtnComponents/Message";
import Notification from "./SidebarBtnComponents/Notification";
import Profile from "./SidebarBtnComponents/Profile";
import Verified from "./SidebarBtnComponents/Verified";
import ForYou from "./BtnComponents/ForYou";
import Following from "./BtnComponents/Following";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/Communities" exact element={<Communities />} />
        <Route path="/Explore" exact element={<Explore />} />
        <Route path="/List" exact element={<List />} />
        <Route path="/Message" exact element={<Message />} />
        <Route path="/Notification" exact element={<Notification />} />
        <Route path="/Profile" exact element={<Profile />} />
        <Route path="/Verified" exact element={<Verified />} />
        <Route path="/ForYouPage" exact element={<ForYou />} />
        <Route path="/Following" exact element={<Following />} />
      </Routes>
    </>
  );
}

export default App;
