import React from 'react'
import "./Resume.css";
import { ProductsData } from './../ProductsData';

export default function Resume() {
  return (
    <>
      <h1 align="center" >Products Section</h1>
      <div className='ProductsAllCon'>
        {ProductsData.map(Product =>(
            <div className='ProductImgContainer' key={Product.id}>
            <img src={Product.Src} alt={Product.alt} style={{width : Product.width , height : Product.height}}/>
            </div>
        ))}
      </div>
    </>
  )
}
