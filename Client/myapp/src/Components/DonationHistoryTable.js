import React from 'react'
import {convertSqlDateToFormattedDate} from '../lib';
import DashBoardCss from '../CssFiles/DashBoard.module.css';

export default function DonationHistoryTable({first_name, donation_type, donation_date, amount}) {
    
  return (
    <>
    {/* <div className={DashBoardCss.tableDiv}> */}

        <button className={DashBoardCss.tableBtn}>
        <p className={DashBoardCss.name}>{first_name}</p>
        <p className={DashBoardCss.donationType}>{donation_type}</p>
        <p className={DashBoardCss.date}>{convertSqlDateToFormattedDate(donation_date)}</p>
        <p className={DashBoardCss.amount}>{amount}/-</p>
        </button>

    {/* </div> */}
    </>
  )
}
