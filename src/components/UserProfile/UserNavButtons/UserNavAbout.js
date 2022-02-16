import React from 'react';
import { Link } from "react-router-dom";

import './UserNavAbout.css';


function UserNavAbout() {
  return (
    <div className="user-nav-about">
      <Link to="/myabout" className='user-link'>About</Link>
    </div>
  );
}

export default UserNavAbout;
