import React, { useEffect, useState } from 'react';
import DashBoardCss from '../CssFiles/DashBoard.module.css';
import Logo from '../DashBoardImages/Logo.png'
import profilePic from '../DashBoardImages/ProfilePic.png'
import percentageDrop from '../DashBoardImages/percentageDrop.png'
import people from '../DashBoardImages/people.png'
import graph from '../DashBoardImages/graph.png'
import RecentDonationCards from './RecentDonationCards';
import DonationHistoryTable from './DonationHistoryTable';
import logo from '../DashBoardImages/Logo.png';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


export default function DashBoard() {

  const [recentDonations, setRecentDonations] = useState(null);
  const [countDonators, setcountDonators] = useState(null);
  const [totalSum, setTotalSum] = useState(null);

  const fetchData = () => {
    fetch('http://localhost:3002/api/dashBoard', {
      credentials: 'include'
    })
      .then((response) => response.json())
      .then((data) => {
        // Update the state with the received data
        setRecentDonations(data);
      })
      .catch((error) => {
        // Handle errors here
        console.error('Error:', error);

        setRecentDonations({ error: true });

      });
  };

  const fetchData2 = () => {
    fetch('http://localhost:3002/api/dashBoard/Count',{
      credentials: 'include'
    })
      .then((response) => response.json())
      .then((data) => {
        // Update the state with the received data
        console.log(data);
        setcountDonators(data);
      })
      .catch((error) => {
        // Handle errors here
        console.error('Error:', error);

        setcountDonators({ error: true, errorMessage: 'Error fetching count' });

      });
  };

  const fetchData3 = () => {
    fetch('http://localhost:3002/api/dashBoard/Total',{
      credentials: 'include'
    })
      .then((response) => response.json())
      .then((data) => {
        // Update the state with the received data
        console.log(data);
        setTotalSum(data);
      })
      .catch((error) => {
        // Handle errors here
        console.error('Error:', error);

        setTotalSum({ error: true, errorMessage: 'Error fetching count' });

      });
  };

  useEffect(() => {
    // Fetch data when the component mounts
    fetchData();
    fetchData2();
    fetchData3();
  }, []); // Empty dependency array means this effect runs once after the initial render  

  let contentRecentDonations;
  let donationHistory;
  if (recentDonations == null) {
    contentRecentDonations = <p1>Loading...</p1>
    donationHistory = <p1>Loading...</p1>
  } else if (recentDonations.length < 1) {
    contentRecentDonations = <p1>No Donations Yet</p1>
    donationHistory = <p1>No Donations Yet</p1>
  } else {
    contentRecentDonations = recentDonations.map((item) => {
      return <RecentDonationCards first_name={item.first_name} donation_date={item.donation_date} amount={item.amount} />
    })
    donationHistory = recentDonations.map((item) => {
      return <DonationHistoryTable first_name={item.first_name} donation_date={item.donation_date} amount={item.amount} donation_type={item.donation_type} />
    })
  }
  const navigate = useNavigate();


  const handleLogout = async () => {
    await fetch('http://localhost:3002/api/user/logout',{
      credentials: 'include'
    })
    navigate(0)
  }

const handleHomeRoute = async () => {
    navigate('/');
}

const handleTeamsRoute = async () => {
    navigate('/aboutus');
}
const handleFoundationRoute = async () => {
    navigate('/viewFoundations');
}

  return (
    <>
  <div className={DashBoardCss.main}>    
    <nav className={DashBoardCss.navbar}>
                <Link to='/'>
                    <img src={logo} alt='logo' className={DashBoardCss.logo}/>
                </Link>                    <div className={DashBoardCss.mainMenu}>
                        <h4>Main Menu</h4>
                            <button className={DashBoardCss.adminBtn} onClick={handleHomeRoute}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m21.743 12.331-9-10c-.379-.422-1.107-.422-1.486 0l-9 10a.998.998 0 0 0-.17 1.076c.16.361.518.593.913.593h2v7a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4h4v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-7h2a.998.998 0 0 0 .743-1.669z"></path></svg>
                            <p>Home</p></button>
                        <button className={DashBoardCss.DashBtn}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 13h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1zm-1 7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v4zm10 0a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v7zm1-10h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1z"></path></svg>
                            <p>DashBoard</p></button>
                        <button onClick={handleFoundationRoute} className={DashBoardCss.foundationBtn}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18.991 2H9.01C7.899 2 7 2.899 7 4.01v5.637l-4.702 4.642A1 1 0 0 0 3 16v5a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4.009C21 2.899 20.102 2 18.991 2zm-8.069 13.111V20H5v-5.568l2.987-2.949 2.935 3.003v.625zM13 9h-2V7h2v2zm4 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"></path><path d="M7 15h2v2H7z"></path></svg>
                            <p>Foundations</p></button>
                        <button className={DashBoardCss.statsBtn}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 21H3a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1zm7 0h-3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1zm7 0h-3a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1z"></path></svg><p>Statistics</p></button>
                    </div>
                    <div className={DashBoardCss.teams} onClick={handleTeamsRoute}>
                        <h5>Teams</h5>
                        <ul>
                            <li>Design</li>
                            <li>Development</li>
                        </ul>
                    </div>
                    <div className={DashBoardCss.utility}>
                        <div className={DashBoardCss.setting}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m2.344 15.271 2 3.46a1 1 0 0 0 1.366.365l1.396-.806c.58.457 1.221.832 1.895 1.112V21a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1.598a8.094 8.094 0 0 0 1.895-1.112l1.396.806c.477.275 1.091.11 1.366-.365l2-3.46a1.004 1.004 0 0 0-.365-1.366l-1.372-.793a7.683 7.683 0 0 0-.002-2.224l1.372-.793c.476-.275.641-.89.365-1.366l-2-3.46a1 1 0 0 0-1.366-.365l-1.396.806A8.034 8.034 0 0 0 15 4.598V3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1.598A8.094 8.094 0 0 0 7.105 5.71L5.71 4.904a.999.999 0 0 0-1.366.365l-2 3.46a1.004 1.004 0 0 0 .365 1.366l1.372.793a7.683 7.683 0 0 0 0 2.224l-1.372.793c-.476.275-.641.89-.365 1.366zM12 8c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4z"></path></svg>
                            <p>Settings</p></div>
                        <div className={DashBoardCss.logout} onClick={handleLogout}><i class='bx bx-exit'></i><p>Log Out</p></div>
                    </div>
            </nav>


            <div className={DashBoardCss.mainSegment}>

              <div className={DashBoardCss.firstHalf}>

                  <div className={DashBoardCss.recentlyDonated}>
                      <h1>Analytics</h1>
                      <p>Recently Donated</p>
                      <div className={DashBoardCss.scrollDiv}>
                      <div className={DashBoardCss.ScrollContainer}>
                          <div className={DashBoardCss.scrollBar}>
                            {contentRecentDonations}
                          </div>
                        </div>
                      </div>
                  </div>

                  <div className={DashBoardCss.table}>
                    <h2>Donation History</h2>
                    <div className={DashBoardCss.tableContainer}>
                      <div className={DashBoardCss.scrollBar}>
                        {donationHistory}
                      </div>
                    </div>
                  </div>
              </div>

              <div  className={DashBoardCss.numbersDiv}>
                    <div className={DashBoardCss.firstBox}>
                      <h2>Number of Donations</h2>
                      <h1 style={{color: '#FF7070'}}>{countDonators && countDonators.count}</h1>
                      <img src={percentageDrop} alt='percentageDrop' className={DashBoardCss.percentageDrop} />
                      <img src={people} alt='people' className={DashBoardCss.people} />
                    </div>
                  
                    <div className={DashBoardCss.secondBox}>
                      <h2>Total Donations</h2>
                      <h1 style={{color: '#FF7070'}}>${totalSum && totalSum.sum}</h1>
                      <img src={percentageDrop} alt='percentageDrop' className={DashBoardCss.percentageDrop} />
                      <img src={graph} alt='graph' className={DashBoardCss.graph} />
                    </div>
                  </div>
            </div>
    </div>


    </>

  )
}
