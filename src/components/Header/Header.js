import React from 'react';
import SiteLogo from '../SiteLogo/SiteLogo';
import SiteSearchBar from '../SiteSearchBar/SiteSearchBar';
import UserMenuTopRight from "../UserMenuTopRight/UserMenuTopRight";

import './Header.css';

function Header() {
    return (
      <div className="main-header">
        <SiteLogo />
        <SiteSearchBar />
        <UserMenuTopRight />
      </div>
    );
  }
  
  export default Header;
  