import React from 'react'
import "./Services.css";
import { ServicesDatas } from './ServicesDatas';


export default function Services() {
  return (
    <>
      <h1 style={{textAlign: 'center'}}>Check Our Services out</h1>
      <div className='ServicesAllCon'>
        {ServicesDatas.map(Box =>(
            <div className='BoxCon' key={Box.id}>
                <i className={Box.icons}></i>
                <h3>{Box.Title}</h3>
                <p>{Box.ServicesDesc}</p>
            </div>
        ))}
      </div>
    </>
  )
}
