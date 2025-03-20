import React from 'react'
import "./CompanyInfo.css"



export default function Staffs() {
  return (
    <>
    <h1 align="center" style={{margin : 120}}>Company Info</h1>
      <div className='StaffsRandDataAllCon'>
        <div className='StaffsRandDataCon'>
            <div className='ImgCon'>
                <img src={require('./../Images/counts-img.jpg')} alt='StaffImg'/>
            </div>
            <div className='TextCon'>
                <div className='titleCon'>
                    <h1>little Section of Company Personels :</h1>
                    <p>here are some informations about us like ; how many do we have active personel or ...</p>
                </div>
            
            <div className='flexedTexts'>
                <div className='T1'>
                    <h2>How many do we have active Personels ?</h2>
                    <p>now , we have about 20,000 active personels that works in different sections</p>
                </div>
                
                <div className='T1'>
                    <h2>how much time do we spend on work ? </h2>
                    <p>perhaps 71% of all our time ,means 17 Hours a day</p>
                </div>                                        
                
                <div className='T1'>
                    <h2>The Quality of our Products : </h2>
                    <p>absolutely 100% , we're working with latest Technologies and spend so much time for</p>
                </div>
                
                <div className='T1'>
                    <h2>How long have we been working ?</h2>
                    <p>we've been working for 46 Years !!</p>
                </div>
                

            </div>
            </div>
            
        </div>
      </div>
    </>
  )
}
