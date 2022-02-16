import React from 'react';
import { Link } from "react-router-dom";

import './UserNavTimeline.css';


function UserNavTimeline() {
  return (
    <div className="user-nav-timeline active">
      <Link to="/myposts" className='user-link active'>Timeline</Link>
    </div>
  );
}

export default UserNavTimeline;
