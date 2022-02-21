import React from 'react';
import {Routes, Route, Link} from "react-router-dom";
import ContactInfo from '../UserAbout/ContactInfo/ContactInfo';
import DetailsAbout from '../UserAbout/DetailsAbout/DetailsAbout';
import PlacesLived from '../UserAbout/PlacesLived/PlacesLived';
import Relationship from '../UserAbout/Relationship/Relationship';
import WorkInfo from '../UserAbout/WorkInfo/WorkInfo';
import './UserAbout.css';


function UserAbout() {
  return (
    <div className="user-about">
        <ul className='user-about-list'>
        <Link to="/myabout/contactinfo"><button className='user-about-link'>Contact and Basic Info</button></Link>
        <Link to="/myabout/relationship"><button className='user-about-link'>Family and Relationship</button></Link>
        <Link to="/myabout/workinfo"><button className='user-about-link'>Work and Education</button></Link>
        <Link to="/myabout/placeslived"><button className='user-about-link'>Places You've Lived</button></Link>
        <Link to="/myabout/mydetails"><button className='user-about-link'>Details About You</button></Link>
        </ul>
        <div className='user-about-components'>
        <Routes>
        <Route path="contactinfo" element={<ContactInfo />} />
        <Route path="mydetails" element={<DetailsAbout />} />
        <Route path="placeslived" element={<PlacesLived />} />
        <Route path="relationship" element={<Relationship />} />
        <Route path="workinfo" element={<WorkInfo />} />
        </Routes>
        </div>
    </div>
  );
}

export default UserAbout;
