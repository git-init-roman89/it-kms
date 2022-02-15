import React from 'react';


import './UserProfile.css';

function UserProfile() {
  return (
    <div className="user-profile">

        <div className='user-profile-wallpaper-caption'>
      <img src="../img/pexels-moose-photos-1037999.jpg" alt="city skyline" className='user-profile-wallpaper'/>
      </div>
      <div className='user-socialbar'>
          <div className='user-socialbar-icons'>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-instagram-square"></i>
          <i class="fa-brands fa-google-plus-square"></i>
          <i class="fa-brands fa-youtube"></i>
          <i class="fa-brands fa-linkedin"></i>
          </div>
          <div className='main-username'>
          <div className='main-user-photo-caption'>
        <img src="../img/pexels-pavel-danilyuk-8000595.jpg" alt="user portrait" className='main-user-photo' />
        </div>
              <span>John Doe</span></div>
          <div className='user-followers'>
              <div className='user-followers-item'>
              <span className='user-followers-item-title'>Posts</span>
              <span className='user-followers-item-number'>690</span>
              </div>
              <div className='user-followers-item'>
              <span className='user-followers-item-title'>Followers</span>
              <span className='user-followers-item-number'>206</span>
              </div>
              <div className='user-followers-item'>
              <span className='user-followers-item-title'>Following</span>
              <span className='user-followers-item-number'>100</span>
              </div>
          </div>

      </div>
    </div>
  );
}

export default UserProfile;
