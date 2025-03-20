import React from 'react'
import  {SliderLogosDatas}  from './SliderLogosDatas';
import "./SliderLogo.css"

export default function SliderLogo() {
    return(
        <>
        <div className='SliderLogoContainer'>
        {SliderLogosDatas.map(Logo => (
            <div className='LogosImageContainer' key={Logo.id}>
                <img src={Logo.Src}  alt={Logo.alt} />        
            </div>
            )
            )
        }
        </div>
  </>
)
}
