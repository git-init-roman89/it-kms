import React from 'react';
import { Link } from "react-router-dom";

import './UserNavAbout.css';


function UserNavAbout() {
  return (
    <div className="user-nav-about">
      <Link to="/myabout"><button className='user-link active'>About</button></Link>
    </div>
  );
}

export default UserNavAbout;
