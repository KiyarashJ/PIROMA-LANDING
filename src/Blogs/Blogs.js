import React from 'react'
import "./Blogs.css"



export default function Blogs() {
  return (
    <>
      <div className='BlogsAllCon'>
        <div className='BlogsCon'>
          <div className='ImageCon'>
            <img src={require('./../Images/features.jpg')} alt='BlogsBg'/>
          </div>
          <div className='TextCon'>
            <div className='TextElems'>
              <h1>What advantages has our Company?</h1>
              <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
            </div>
            <div className='TextElems'>
              <h1>How can we have Contribution with this Com?</h1>
              <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
            </div>
            <div className='TextElems'>
              <h1>Is this Company credential?</h1>
              <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
            </div>
            <div className='TextElems'>
              <h1>Does this Company hire Teenager Staffs?</h1>
              <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
