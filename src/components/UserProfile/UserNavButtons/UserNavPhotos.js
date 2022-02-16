import React from 'react';
import { Link } from "react-router-dom";

import './UserNavPhotos.css';


function UserNavPhotos() {
  return (
    <div className="user-nav-photos">
      <Link to="/myphotos" className='user-link'>Photos</Link>
    </div>
  );
}

export default UserNavPhotos;
