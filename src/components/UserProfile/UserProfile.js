import React from 'react';
import UserWallpaper from "./UserWallpaper/UserWallpaper";
import UserSocialbar from "./UserSocialbar/UserSocialbar";
import UserNavMenu from './UserNavMenu/UserNavMenu';
import './UserProfile.css';
import UserTimeline from './UserTimeline/UserTimeline';
import UserAbout from './UserTimeline/UserAbout/UserAbout';


function UserProfile() {
  return (
    <div className="user-profile">
      <UserWallpaper />
      <UserSocialbar/>
      <UserNavMenu />
      <UserTimeline />
      {/* <UserAbout /> */}
    </div>
  );
}

export default UserProfile;
