import React from 'react';

import UserNavTimeline from "../UserNavButtons/UserNavTimeline";
import UserNavAbout from "../UserNavButtons/UserNavAbout";
import UserNavFriends from "../UserNavButtons/UserNavFriends";
import UserNavPhotos from "../UserNavButtons/UserNavPhotos";
import './UserNavMenu.css';

function UserNavMenu() {
  return (
    <div className="user-nav-menu">
      <UserNavTimeline />
      <UserNavAbout />
      <UserNavFriends />
      <UserNavPhotos />
    </div>
  );
}

export default UserNavMenu;
