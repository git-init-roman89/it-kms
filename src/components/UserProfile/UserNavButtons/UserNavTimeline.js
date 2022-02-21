import React from 'react';
import { Link } from "react-router-dom";

import './UserNavTimeline.css';


function UserNavTimeline() {
  return (
    <div className="user-nav-timeline">
      <Link to="/myposts"><button className='user-link'>Timeline</button></Link>
    </div>
  );
}

export default UserNavTimeline;
