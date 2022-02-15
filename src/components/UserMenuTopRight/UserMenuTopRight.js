import React from 'react';


import './UserMenuTopRight.css';

function UserMenuTopRight() {
    return (
      <div className="user-menu-top-right">
<i class="fa-solid fa-house"></i>
<i class="fa-solid fa-user-group"></i>
<i class="fa-solid fa-bell"></i>
<i class="fa-solid fa-envelope"></i>
<div className='header-user-photo-caption'>
<img src="../img/pexels-pavel-danilyuk-8000595.jpg" alt="user portrait" className='header-user-photo' />
</div>
<span className='header-user-name'>John Doe</span>
      </div>
    );
  }
  
  export default  UserMenuTopRight;
  