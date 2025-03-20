import React from 'react'
import "./Contact.css"



export default function Contact() {
  return (
    <>
            <h1 align="center">Contact Us</h1>      
            <div className='ContactUsAllCon'>
                <div className='YourInfosSec'>
                    <input type='text' placeholder='Your Name... '/>
                    <input type='email' placeholder='Your E-mail... '/>                    
                </div>
                <div className='Email-Title'>
                    <input type='text' title='Email-Title' placeholder='Email-Title'/>
                </div>
                <textarea placeholder='Write Your email Here ...'></textarea>
                <br/>
                <div className='buttonCon'>
                <button className='submitBtn'>Send Mail</button>
                </div>
            </div>
    </>
  )
}
