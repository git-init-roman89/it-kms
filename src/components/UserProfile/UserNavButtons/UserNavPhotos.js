import React from 'react';
import { Link } from "react-router-dom";

import './UserNavPhotos.css';


function UserNavPhotos() {
  return (
    <div className="user-nav-photos">
      <Link to="/myphotos"><button className='user-link'>Photos</button></Link>
    </div>
  );
}

export default UserNavPhotos;
