import React from 'react';


import './SiteSearchBar.css';

function SiteSearchBar() {
    return (
      <form className="site-searchbar">
          <input type="text" placeholder='Search here...' className='seachbox' />
          <i class="fa-solid fa-magnifying-glass"></i>
      </form>
    );
  }
  
  export default SiteSearchBar;
  