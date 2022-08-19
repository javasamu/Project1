import React from 'react';
import './Rightheader.css';
import girl from '../../../Images/girl.png'
import image1 from '../../../Images/picture.png'
import image2 from '../../../Images/Rectangle 48.png'
import vectory from '../../../Images/Vector.png'
import vectory1 from '../../../Images/Vector1.png'


function Rightheader() {
  return (
    <div>
      <div className='rightside-header'>
          <h1 id='header1'>CT<span>146</span></h1>
          <h1 id='header2'>Profile</h1>
      </div>
      <div className='middle-section'>
          <div>
            <img id='image' src={girl}></img>
          </div>
          <div className='names'>
            <h3>Anitha</h3>
            <h3>Umubyeyi</h3>
          </div>
          <div className='icons'>
            <img id='image2' src={vectory}></img>
            <img id='image2' src={vectory1}></img>
          </div>
      </div>
      <div className='bottom-section'>
        <div className='paragraph1'>
          <img src={image1}></img>
            <div className='sentence'>
            <p>Label</p>
            <p >Umubyeyianitha439@gmail.com</p>
          </div>
        </div>
      
      </div>
    <div className='midle'>
      <div className='paragraph2'>
            <img src={image2}></img>
          <div className='line2'>
            <p>Location</p>
            <p>Kigali/Rwanda</p>
          </div>
        </div>
      </div>
      <di>
      <div className='paragraph2'>
            <img src={image2}></img>
          <div className='line2'>
            <p>Phone</p>
            <p>+250788888888</p>
          </div>
        </div>  
      </di>
    </div>
  )
}

export default Rightheader