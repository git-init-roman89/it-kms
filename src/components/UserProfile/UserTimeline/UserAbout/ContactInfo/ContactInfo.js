import React from 'react';

import './ContactInfo.css';


function ContactInfo() {
  return (
    <article className="contact-info">
      <div className='contact-header'><span>Contact Information</span></div>
      <div className='contact-address-info'>
        <div className='contact-info-item'>
        <span>Email</span>
        <span>Mobile</span> 
        <span>Address</span>     
        </div>
        
        <div className='contact-info-text'>
        <span>Bnijohn@gmail.com</span>  
        <span>(001) 4544 565 456</span>
        <span>United States of America</span>    
        </div>
      </div>

      <div className='contact-header'><span>Websites and Social Links</span></div>
      <div className='contact-address-info'>
        <div className='contact-info-item'>
        <span>Website</span>
        <span>Social Link</span>  
        </div>
        
        <div className='contact-info-text'>
        <span>reactjs.org</span>  
        <span>reactjs.org</span>
        </div>
      </div>

      <div className='contact-header'><span>Basic Information</span></div>
      <div className='contact-address-info'>
        <div className='contact-info-item'>
        <span>Birth Date</span>
        <span>Birth Year</span> 
        <span>Gender</span>
        <span>Interested in</span> 
        <span>Language</span>          
        </div>
        
        <div className='contact-info-text'>
        <span>24 January</span>  
        <span>1994</span>
        <span>Female</span>
        <span>Designing</span>
        <span>English, French</span>        
        </div>
      </div>

    </article>
  );
}

export default ContactInfo;
