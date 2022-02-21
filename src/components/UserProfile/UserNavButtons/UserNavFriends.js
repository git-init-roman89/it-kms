import React from 'react';
import { Link } from "react-router-dom";

import './UserNavFriends.css';


function UserNavFriends() {
  return (
    <div className="user-nav-friends">
      <Link to="/myfriends" ><button className='user-link'>Friends</button></Link>
    </div>
  );
}

export default UserNavFriends;
