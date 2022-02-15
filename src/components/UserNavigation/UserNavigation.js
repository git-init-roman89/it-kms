import React from "react";


import "./UserNavigation.css";

const navigationArray = [
    {id: 1, icon: <i class="fa-solid fa-square-rss"></i>, title: <span className='user-navigation-item-title'>Newsfeed</span>},
    {id: 2, icon: <i class="fa-solid fa-user"></i>, title: <span className='user-navigation-item-title'>Profile</span>},
    {id: 3, icon: <i class="fa-solid fa-user-group group-icon"></i>, title: <span className='user-navigation-item-title'>Friends List</span>},
    {id: 4, icon: <i class="fa-solid fa-user-group group-icon"></i>, title: <span className='user-navigation-item-title'>Friend Profile</span>},
    {id: 5, icon: <i class="fa-solid fa-users"></i>, title: <span className='user-navigation-item-title'>Group</span>},
    {id: 6, icon: <i class="fa-solid fa-image"></i>, title: <span className='user-navigation-item-title'>Profile Image</span>},
    {id: 7, icon: <i class="fa-solid fa-video"></i>, title: <span className='user-navigation-item-title'>Profile Video</span>},
    {id: 8, icon: <i class="fa-solid fa-retweet"></i>, title: <span className='user-navigation-item-title'>Profile Events</span>},
    {id: 9, icon: <i class="fa-solid fa-certificate"></i>, title: <span className='user-navigation-item-title'>Profile Badges</span>},
    {id: 10, icon: <i class="fa-brands fa-wpforms"></i>, title: <span className='user-navigation-item-title'>Profile Forum</span>},
    {id: 11, icon: <i class="fa-solid fa-bell group-icon"></i>, title: <span className='user-navigation-item-title'>Notification</span>},
    {id: 12, icon: <i class="fa-solid fa-file"></i>, title: <span className='user-navigation-item-title'>Files</span>},
    {id: 13, icon: <i class="fa-solid fa-anchor"></i>, title: <span className='user-navigation-item-title'>Friend Request</span>},
    {id: 14, icon: <i class="fa-solid fa-message"></i>, title: <span className='user-navigation-item-title'>Chat</span>},
    {id: 15, icon: <i class="fa-solid fa-circle-check"></i>, title: <span className='user-navigation-item-title'>Todo</span>},
    {id: 16, icon: <i class="fa-solid fa-calendar-days"></i>, title: <span className='user-navigation-item-title'>Calendar</span>},
    {id: 17, icon: <i class="fa-solid fa-cake-candles"></i>, title: <span className='user-navigation-item-title'>Birthday</span>},
    {id: 18, icon: <i class="fa-solid fa-cloud-sun"></i>, title: <span className='user-navigation-item-title'>Weather</span>},
    {id: 19, icon: <i class="fa-solid fa-music"></i>, title: <span className='user-navigation-item-title'>Music</span>},
    {id: 20, icon: <i class="fa-solid fa-square-poll-vertical"></i>, title: <span className='user-navigation-item-title'>MarketPlace</span>, arrow:<i class="fa-solid fa-angle-right"></i>},
    {id: 21, icon: <i class="fa-light fa-newspaper"></i> , title: <span className='user-navigation-item-title'>Profiles</span>, arrow:<i class="fa-solid fa-angle-right"></i>},
    {id: 22, icon: <i class="fa-light fa-newspaper"></i> , title: <span className='user-navigation-item-title'>Blog</span>, arrow:<i class="fa-solid fa-angle-right"></i>},
    {id: 23, icon: <i class="fa-light fa-newspaper"></i> , title: <span className='user-navigation-item-title'>Store</span>, arrow:<i class="fa-solid fa-angle-right"></i>},
    {id: 24, icon: <i class="fa-light fa-newspaper"></i> , title: <span className='user-navigation-item-title'>Email</span>, arrow:<i class="fa-solid fa-angle-right"></i>},
    {id: 25, icon: <i class="fa-light fa-newspaper"></i> , title: <span className='user-navigation-item-title'>Ui-Elements</span>, arrow:<i class="fa-solid fa-angle-right"></i>},
    {id: 26, icon: <i class="fa-light fa-newspaper"></i> , title: <span className='user-navigation-item-title'>Pages</span>, arrow:<i class="fa-solid fa-angle-right"></i>},
];

const navMenuItem = navigationArray.map(({id, icon, title, arrow})=> <div className="user-navigation-item" key={id}> {icon} {title} {arrow} </div>)

function UserNavigation() {
  return (
    <div className="user-navigation">
      <div className='user-navigation-flex'>
        {navMenuItem}
      </div>
    </div>
  );
}

export default UserNavigation;
