import React from 'react'
import "./Footer.css"


export default function Footer() {
  return (
    <>
      <div className='FooterAllCon'>
        <div className='FooterUpSec'>
            <div className='Links'>
                
                <a href='#'>Home</a>
                <a href='#'>About</a>
                <a href='#'>Services</a>
                <a href='#'>Blogs</a>
                <a href='#'>Rand</a>
            </div>
            <div className='Social-Media'>
                
                <i className='fa-brands fa-instagram'>&nbsp;&nbsp;&nbsp;Instagram</i>
                <i className='fa-brands fa-linkedin'>&nbsp;&nbsp;&nbsp;LinkedIn</i>
                <i className='fa-brands fa-telegram'>&nbsp;&nbsp;&nbsp;Telegram</i>
                <i className='fa-brands fa-facebook'>&nbsp;&nbsp;&nbsp;FaceBook</i>
                <i className='fa-brands fa-twitter'>&nbsp;&nbsp;&nbsp;Twitter</i>
                
            </div>
            <div className='Logo'>
                <address>
                <i class="fa-solid fa-location-dot">&nbsp;&nbsp;&nbsp;Iran , Urmia , Daneshkadeh Street</i>
                <br /><br />
                <i class="fa-solid fa-phone">&nbsp;&nbsp;&nbsp;12345678910</i>
                <br /><br />
                <i className='fa fa-envelope' style={{letterSpacing : 2}}>&nbsp;&nbsp;&nbsp;info@example.com</i>
                </address>
                <img src={require('./../Images/logo.png')} alt='Logo'/>
                <h1>PIROMA</h1>
            </div>
            
        </div>
            
        
        <div className='FooterDownSec'>
            <h2 align="center">All rights reserved by PIROMA </h2>
        </div>
      </div>
    </>
  )
}
