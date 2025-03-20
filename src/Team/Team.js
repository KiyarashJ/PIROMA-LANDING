import React from 'react'
import "./Team.css"
import { TeamPersonelsDatas } from './TeamPersonelsDatas';

export default function Team() {
  return (
    <>
      <h1 className='KJ' align="center">Our Team </h1>
      <div className='TeamAllContainer'>
        {TeamPersonelsDatas.map(Person =>(
            <div className='TeamContainer'>
                <div className='PersonContainer'>
                    <img src={Person.src} alt={Person.alt}/>
                </div>
                <div className='PersonelInfoCon'>
                    <h3>{Person.P_Name}</h3>
                    <p>{Person.position}</p>
                </div>
            </div>
        ))}
        </div>
    </>
  )
}
