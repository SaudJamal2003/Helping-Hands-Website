import React from 'react';
import '../CssFiles/ClothDonationDetails.css';
import Logo from '../DashBoardImages/Logo.png'
import clothDonationPic from '../DonationDetailsimages/clothDonationPic.png';
import GoogleLogo from '../SignUpImages/GoogleLogo.png';

export default function ClothDonationDetails(){

    return (
        <div> 

        <div className="clothDonationPic">
      <img src={clothDonationPic} alt="..." className='clothDonationPic' />
    </div>
    <div className="container-fluid" id='logoDiv'>
            <img src ={Logo} alt="..." className='logo'/>
        </div>
          <div className="overlap">
            <div className="overlap-group">
              <div className="overlap-wrapper">
                <div className="div">
                <div className="ProceedBtn">
                      <button type="ProceedBtn" className="ProceedBtn btn-outline-ProceedBtn">Proceed</button>
                      </div>
                  <p className="p">Enter Amount You Want To Donate</p>
                  <div className="overlap-2">
                    <div className="overlap-3">
                      <div className="text-wrapper-2">QTY</div>
                    </div>
                    <div className="text-wrapper-3">1</div>
                  </div>
                  <div className="text-wrapper-4">Make a Donation</div>
                  <div className="text-wrapper-5">Select Foundation</div>
                  <div className="overlap-4">
                    <div className="overlap-5">
                      <div className="text-wrapper-2">Charity</div>
                    </div>
                    <div className="text-wrapper-6">Al Khidmat Foundation</div>
                  </div>
                </div>
              </div>
              <div className="text-wrapper-7">+</div>
              <img className="arrow" alt="Arrow" src="arrow-2.svg" />
            </div>
          </div>
          <div className="text-wrapper-8">Cloth Donation Details</div>
          <div className="text-wrapper-9">State</div>
          <div className="text-wrapper-10">City</div>
          <div className="text-wrapper-11">Date</div>
          <div className="text-wrapper-12">Time</div>
          <div className="text-wrapper-13">Zip Code</div>
          <div className="text-wrapper-14">Location</div>
          <div className="overlap-6">
            <div className="text-wrapper-15">State</div>
          </div>
          <div className="overlap-7">
            <div className="text-wrapper-15">City</div>
          </div>
          <div className="overlap-8">
            <div className="text-wrapper-15">DD-MM-YYYY</div>
          </div>
          <div className="overlap-9">
            <div className="text-wrapper-15">00:00 PM</div>
          </div>
          <div className="overlap-10">
            <div className="text-wrapper-16">Zip code</div>
          </div>
          <div className="overlap-11">
            <div className="text-wrapper-17">Location</div>
          </div>
          <div className="text">{""}</div>
          <div className="text-2">{""}</div>
          <div className="DonateBtn">
              <button type="DonateBtn" className="DonateBtn">Donate Now</button>
            </div>
        </div>
    );



}