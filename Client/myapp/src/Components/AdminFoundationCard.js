import React, { useState } from 'react';
import AdminCss from '../CssFiles/adminPanel.module.css';
import {convertSqlDateToFormattedDate} from '../lib';
import foundPic from '../DashBoardImages/foundPic.svg'


export default function AdminFoundationCard({foundation_name, location_id, email, _status}) {
  const [foundationEmail, setEmail]= useState({
    _email: ''
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleApprove = async () => {

    setIsLoading(true);
    setEmail({ ...foundationEmail, _email: email});

    try {
      // Make API call to approve volunteer request using fetch
      const response = await fetch('http://localhost:3002/api/adminFoundationPanel/approveFoundation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        // You can pass any necessary data here in the body
        // For example: JSON.stringify({ volunteerId: 'volunteerIdHere' })
        body: JSON.stringify({_email: email}) //volEmail instead of this ?
      });

      if (!response.ok) {
        throw new Error('Failed to approve registration request');
      }

      alert('Registration request approved and email sent successfully.');
    } catch (error) {
      console.error('Error approving Registration request:', error);
      alert('Error approving Registration request. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleReject = async () => {
    setIsLoading(true);
    setEmail({ ...foundationEmail, _email: email});

    try {
      // Make API call to approve volunteer request using fetch
      const response = await fetch('http://localhost:3002/api/adminFoundationPanel/rejectFoundation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        // You can pass any necessary data here in the body
        // For example: JSON.stringify({ volunteerId: 'volunteerIdHere' })
        body: JSON.stringify({_email: email}) //volEmail instead of this ?
      });

      if (!response.ok) {
        throw new Error('Failed to reject registration request');
      }

      alert('Registration request rejected and email sent successfully.');
    } catch (error) {
      console.error('Error rejecting Registration request:', error);
      alert('Error rejecting Registration request. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
        <div className={AdminCss.outerCard}>
          
          <div className={AdminCss.volDetails}>
              <img src={foundPic} alt='pic' className={AdminCss.pic}/>
              <div className={AdminCss.personalDetails}>
                <h4>{foundation_name}</h4>
                <p>____________________________________</p>
                <p>Email: {email}</p>
                <p>Status: <span style={{color: _status ==='Rejected' ? '#FD5D5D' : _status === 'Approved' ? '#28C423' : '#FFA500'}}>{_status}</span></p>
                <p>Location: {location_id}</p>
              </div>
          </div>

          <div className={AdminCss.buttons}>
            <button onClick={handleApprove} className={AdminCss.approveBtn}>Approve</button>
            <button className={AdminCss.rejectBtn} onClick={handleReject}>Reject</button>
          </div>
        </div>
    </>
  )
}

