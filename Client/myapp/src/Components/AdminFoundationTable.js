import React from 'react';
import AdminCss from '../CssFiles/adminPanel.module.css';
import {convertSqlDateToFormattedDate} from '../lib';

export default function AdminFoundationTable({foundation_name, foundation_id,location_id, email, _status}) {
  return (
        <button className={AdminCss.tableBtn}>
        <p className={AdminCss.name}>{foundation_name}</p>
        <p className={AdminCss.donationType}>{foundation_id}</p>
        <p>{location_id}</p>
        <p className={AdminCss.date}>{email}</p>
        <p className={AdminCss.amount}>{_status}</p></button>
  )
}

