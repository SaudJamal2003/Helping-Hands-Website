import React from 'react'
import profilePic1 from '../DashBoardImages/ProfilePic1.png'
import {convertSqlDateToFormattedDate} from '../lib';
import DashBoardCss from '../CssFiles/DashBoard.module.css';



export default function RecentDonationCards({first_name, donation_date, amount}) {

  let amountVariable
  if(amount != null){
    amountVariable = <p>${amount}</p>
  }
  else{
    amountVariable = <p style={{fontWeight: '500', fontSize:'medium'}}>NULL</p>
  }

  return (
    <>

    <button className={DashBoardCss.personBtn1}>
    <img src={profilePic1} alt='...' className={DashBoardCss.personPic1}/>
    <p className={DashBoardCss.name1}>{first_name}</p>
    <p className={DashBoardCss.date1}>{convertSqlDateToFormattedDate(donation_date)}</p>
    <p className={DashBoardCss.amount1}>{amountVariable}</p></button>

    </>
  )
}
