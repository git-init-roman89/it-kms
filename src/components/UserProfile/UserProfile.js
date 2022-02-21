import React from 'react';
import UserWallpaper from "./UserWallpaper/UserWallpaper";
import UserSocialbar from "./UserSocialbar/UserSocialbar";
import UserNavMenu from './UserNavMenu/UserNavMenu';
import './UserProfile.css';
import UserTimeline from './UserTimeline/UserTimeline';

function UserProfile() {
  return (
    <div className="user-profile">
      <UserWallpaper />
      <UserSocialbar/>
      <UserNavMenu />
      <UserTimeline />
    </div>
  );
}

export default UserProfile;
