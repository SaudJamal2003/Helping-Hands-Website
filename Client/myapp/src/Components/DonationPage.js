import React from 'react';
import Logo from '../DashBoardImages/Logo.png'
import cash from '../DonationPageImages/cash.png'
import cloth1 from '../DonationPageImages/cloth1.png'
import food from '../DonationPageImages/food.png'
import {Link} from 'react-router-dom'
import donationPageCss from'../CssFiles/donationPage.module.css'
export default function DonationPage(){

    return(
        <>
        <div className={donationPageCss.main}>

          <Link to='/'>
             <img src={Logo} alt='Logo' className={donationPageCss.Logo}/>
          </Link>

          <div className={donationPageCss.title}>
             <h1 className={donationPageCss.heading}>We Now Live In ChangeMaker World.</h1>
          </div>

          <div className={donationPageCss.outerBtnDiv}>

              <div className={donationPageCss.buttonGroup}>
                <Link to='/cashDonationDetails'>
                  <button className={donationPageCss.cashBtn}>
                    <img src={cash} alt='cash' className={donationPageCss.cashBtnImg}/>
                    <p className={donationPageCss.cashText}>CASH DONATION</p>            
                  </button>
                </Link>

                <Link to='/clothDonationDetails'>
                  <button className={donationPageCss.clothBtn}>
                    <img src={cloth1} alt='cloth1' className={donationPageCss.clothBtnImg}/>
                    <p className={donationPageCss.clothText}>CLOTH DONATION</p>            
                  </button>
                </Link>

                <Link to='/foodDonationDetails'>
                  <button className={donationPageCss.foodBtn}>
                    <img src={food} alt='food' className={donationPageCss.foodBtnImg}/>
                    <p className={donationPageCss.foodText}>FOOD DONATION</p>            
                  </button>
                </Link>

            </div>
          </div>
        </div>

        </>
    );

}