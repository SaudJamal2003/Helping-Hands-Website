import React from 'react';
import AdminCss from '../CssFiles/adminPanel.module.css';
import {convertSqlDateToFormattedDate} from '../lib';

export default function AdminVolunteerTable({volunteer_name, foundation_name, registration_date, email, _status}) {
  return (
        <button className={AdminCss.tableBtn}>
        <p className={AdminCss.name}>{volunteer_name}</p>
        <p className={AdminCss.donationType}>{email}</p>
        <p>{foundation_name}</p>
        <p className={AdminCss.date}>{convertSqlDateToFormattedDate(registration_date)}</p>
        <p className={AdminCss.amount}>{_status}</p></button>
  )
}

