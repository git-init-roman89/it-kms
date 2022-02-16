import React from 'react';
import { Link } from 'react-router-dom';

import './SiteLogo.css';

function SiteLogo() {
    return (
      <div className="site-logo">
        <Link to="/" className='logo-link'>
        <i class="fa-solid fa-share-nodes"></i>
        <span className='logo-text'>SocialV</span>
        </Link>
        <i class="fa-solid fa-bars"></i>
      </div>
    );
  }
  
  export default SiteLogo;
  


