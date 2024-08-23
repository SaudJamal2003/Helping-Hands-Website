import React from "react";
import {Link} from 'react-router-dom';
import '../CssFiles/DonationSuccessfulCss.css';
import tickmark2 from '../ConfrmationImages/tickmark2.png';

export default function DonationSuccessful(){
  return (
    <div className="donation-completion">
      <div className="donation-successful">
        Donation <br />
        Successful
      </div>
      <div className="text-wrapper">Thankyou For Donating!</div>
      <img src ={tickmark2} alt="tickmark2" className='tickmark2'/>
      <Link to='/'>
        <button className="BackBtn">Back</button>
      </Link>
    </div>
  );
};
