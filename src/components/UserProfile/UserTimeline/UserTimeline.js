import React from 'react';
import { Routes, Route } from "react-router-dom";
import UserPosts from "./UserPosts/UserPosts";
import UserAbout from './UserAbout/UserAbout';
import UserFriends from "./UserFriends/UserFriends";
import UserPhotos from "./UserPhotos/UserPhotos";

import './UserTimeline.css';


function UserTimeline() {
  return (
    <div className="user-timeline">
      <Routes>
        <Route path="/myposts" element={<UserPosts />} />
        <Route path="/myabout" element={<UserAbout />} />
        <Route path="/myfriends" element={<UserFriends />} />
        <Route path="/myphotos" element={<UserPhotos />} />
      </Routes>
    </div>
  );
}

export default UserTimeline;
