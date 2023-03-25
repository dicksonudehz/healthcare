import React from 'react'
import './Nav.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';
import InstagramIcon from '@mui/icons-material/Instagram';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import footerimg from '../image/logo.png';


function Nav() {
  return (
<>
<nav>
    <div className="topHeader">
        <div className="welcomeNote">
          <p>Welcomed To Our Medical & Research Center</p>
        </div>

        <div className="socialIcons">
          <FacebookIcon className='iconList'/>
          <TwitterIcon className='iconList'/>
          <LanguageIcon className='iconList'/>
          <InstagramIcon className='iconList'/>
        </div>
    </div>
</nav>
<div className="middleNavSession">
  <div className="logo">
    <h1 className="logo"><img src={footerimg} alt="testimonial" /></h1>
  </div>

  <div className="utilitiesContainer">
    <div className="utilitiesOne">
      <div className="utilityIconContainer">
      <CallIcon className='utilityOneIcon'/>
      </div>
        <div className="utilityContacts">
          <p>090 774 778 87</p>
          <p>090 774 778 87</p>
        </div>
    </div>

    <div className="utilitiesTwo">
      <div className="utilityIconContainer2">
      <EmailIcon className='utilitiesTwoIcon'/>
      </div>
      <div className="utilitiesEmail">
        <p>hello@medical.com</p>
        <p>info@medical.com</p>
      </div>
    </div>

    <div className="utilitiesThree">
      <div className="utilityIconContainer3">
      <LocationOnIcon className='utilitiesThreeIcon'/>
      </div>
      <div className="utilitiesAddress">
        <p>PO Box 16122 Collins Street West <br/>
          Victoria 8007 Australia</p>
      </div>
    </div>
  </div>
</div>
<div className="bottomNavContainer">
  <ul className='list'>
    <li className="ListItems">
      home
    </li>
    <li className="ListItems">
      about us
    </li>
    <li className="ListItems">
      service
    </li>
    <li className="ListItems">
      pages
    </li>
    <li className="ListItems">
      doctors
    </li>
    <li className="ListItems">
      appointment
    </li>
    <li className="ListItems">
      gallery
    </li>
    <li className="ListItems">
      blog
    </li>
    <li className="ListItems">
      contact
    </li>
  </ul>
</div>
</>
  )
}

export default Nav
