import React from 'react'
import sliderimg from '../image/sliderimg1.jpg'
import './slider.css';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


export default function Slider() {
  return (
    <>
      <div className="sliderContainer">
        <img src={sliderimg} alt="testimonial" className='imgSlider'/>
        <div className="sliderContentContainer">
            <p className="mainheader">Hello, we are medicals we care about your health</p>
            <p className="header">best hospital in your town</p>
            <button className="contact">contact now</button>
        </div>
      </div>
    </>
  )
}
