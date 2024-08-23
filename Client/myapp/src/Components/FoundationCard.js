import React from 'react'
import FoundationPic from '../ViewFoundationsImages/FoundationPic.png';
import cssfile from '../CssFiles/viewFoundations.module.css'


export default function FoundationCard({foundationName, description, cityName}) {
  return (
    <>
        <div className={cssfile.card}>
          <div className={cssfile.foundationNames}> 
              <img src={FoundationPic}  className={cssfile.FoundationPic} alt='FoundationPic'/>
          </div>

          <div className={cssfile.text}>
              <h2>{foundationName}</h2>

              <div>
                <p>
                    {description}
                </p>
                <p style={{fontWeight: '500', fontSize:'larger'}}>Headquaters Location: {cityName}</p>
              </div>

          </div> 
        </div>
    </>
  )
}
