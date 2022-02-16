import React from 'react';
import { Link } from "react-router-dom";

import './UserNavFriends.css';


function UserNavFriends() {
  return (
    <div className="user-nav-friends">
      <Link to="/myfriends" className='user-link'>Friends</Link>
    </div>
  );
}

export default UserNavFriends;
