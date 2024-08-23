import React, {useEffect, useState } from 'react'
import AdminVolunteerCard from './AdminVolunteerCard';
import AdminVolunteerTable from './AdminVolunteerTable';
import AdminCss from '../CssFiles/adminPanel.module.css';
import {convertSqlDateToFormattedDate} from '../lib';
import logo from '../HomePageImages/Logo.png';
import people from '../DashBoardImages/people.png';
import percentage from '../DashBoardImages/percentageDrop.png';
import graph from '../DashBoardImages/graph.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function AdminPage() {
    const[volunteerDetails, setDetails] = useState([]);
    const[totalDonations, settotalDonations] = useState(0);
    const[totalDonators, setTotalDonators] = useState(0);
    const[totalVolunteers, setTotalVolunteers] = useState(null);

    const[queryName, setQueryName] = useState(null);
    const [userName, setUserName] = useState(null);
    
    const [showTableScroll, setShowTableScroll] = useState(true);


    useEffect(() => {
        fetchData();
        fetchData2();
        fetchData3();
        fetchData4();
        // fetchData5();
    }, []);

    const fetchData = () => {
        fetch('http://localhost:3002/api/adminPanel')
        .then((response) => response.json())
        .then((data => {
            setDetails(data)
        }))
        .catch((error) => {
            console.log('Error', error)
            setDetails({error:true})
        });
    };

    const fetchData2 = () =>{
        fetch('http://localhost:3002/api/adminPanel/totalDonations')
        .then((response) => response.json())
        .then((data => {
            settotalDonations(data);
        }))
        .catch((error) => {
            console.log('Error', error)
            settotalDonations({error: true});
        });
    };

    const fetchData3 = () => {
        fetch('http://localhost:3002/api/adminPanel/totalDonators')
        .then((response) => response.json())
        .then((data => {
            setTotalDonators(data);
        }))
        .catch((error) => {
            console.log('Error', error);
            setTotalDonators({error:true});
        })
    }

    const fetchData4 = () => {
        fetch('http://localhost:3002/api/adminPanel/totalVolunteers',{
            credentials: 'include'
        })
        .then((response) => response.json())
        .then((data => {
            console.log(data.count);
            setTotalVolunteers(data);
        }))
        .catch((error) => {
            console.log('Error', error);
            setTotalVolunteers({error:true});
        })
    }

    const handleInputChange = (e) => {
        setUserName(e.target.value);
        // console.log(userName);
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:3002/api/adminPanel/queryRecord?queryName=${userName}`,{ 
            // this way of writing URL allows us to send parameter to controller
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then((response) => response.json())
        .then((data => {
            setQueryName(data[0])
            // console.log(queryName)
            // console.log(data)
            console.log('Success')
        }))
        .catch((error) =>{
            console.log('Error', error);
            setQueryName({error: true});
        })

        setShowTableScroll(false);

    };

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

  return (
    <>
        <div className={AdminCss.main}>
            <nav className={AdminCss.navbar}>
                <Link to='/'>
                    <img src={logo} alt='logo' className={AdminCss.logo}/>
                </Link>                    <div className={AdminCss.mainMenu}>
                        <h4>MAIN MENU</h4>
                        {/* <Link to='/dashboard'> */}
                            <button className={AdminCss.DashBtn} onClick={handleHomeRoute}>
                            <svg style={{height: '30px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="estate"><path fill="#FFFDFD" d="M20,8h0L14,2.74a3,3,0,0,0-4,0L4,8a3,3,0,0,0-1,2.26V19a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V10.25A3,3,0,0,0,20,8ZM14,20H10V15a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1Zm5-1a1,1,0,0,1-1,1H16V15a3,3,0,0,0-3-3H11a3,3,0,0,0-3,3v5H6a1,1,0,0,1-1-1V10.25a1,1,0,0,1,.34-.75l6-5.25a1,1,0,0,1,1.32,0l6,5.25a1,1,0,0,1,.34.75Z"></path></svg>
                            <p>Home</p></button>
                        {/* </Link> */}
                        <button className={AdminCss.adminBtn}><svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2457 10.6261C13.1801 10.6261 15.5588 8.24736 15.5588 5.31304C15.5588 2.37873 13.1801 0 10.2457 0C7.31143 0 4.9327 2.37873 4.9327 5.31304C4.9327 8.24736 7.31143 10.6261 10.2457 10.6261ZM10.2439 23.9084C15.3789 23.9084 19.5417 21.5296 19.5417 18.5953C19.5417 15.661 15.3789 13.2823 10.2439 13.2823C5.10882 13.2823 0.946045 15.661 0.946045 18.5953C0.946045 21.5296 5.10882 23.9084 10.2439 23.9084Z" fill="white"/>
                            </svg>
                            <p>Admin Panel</p></button>
                        <button className={AdminCss.accountsBtn}><svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.9344 13.305C12.6189 13.2936 12.3033 13.2822 11.9734 13.2822C8.50217 13.2822 5.26046 14.045 2.49209 15.3543C1.22983 15.9463 0.498291 17.062 0.498291 18.2347V20.1132C0.498291 20.7394 1.14377 21.2517 1.93268 21.2517H13.7807C12.7676 20.1046 12.1555 18.7649 12.0069 17.369C11.8582 15.9731 12.1783 14.5708 12.9344 13.305Z" fill="#FAFAFA"/>
                            <path d="M11.1206 10.6259C14.0549 10.6259 16.4336 8.24725 16.4336 5.31297C16.4336 2.3787 14.0549 0 11.1206 0C8.18632 0 5.80762 2.3787 5.80762 5.31297C5.80762 8.24725 8.18632 10.6259 11.1206 10.6259Z" fill="#FAFAFA"/>
                            <path d="M25.722 17.2677C25.722 16.9749 25.6795 16.7087 25.637 16.4292L26.8268 15.4577C27.0818 15.2447 27.1384 14.8987 26.9685 14.6192L26.1328 13.2617C26.0527 13.128 25.9249 13.0253 25.7719 12.9717C25.6189 12.9181 25.4507 12.9171 25.2971 12.9689L23.7956 13.448C23.3423 13.0886 22.8324 12.8091 22.2658 12.6095L21.9542 11.1588C21.9208 11.0089 21.8337 10.8742 21.7074 10.7773C21.5811 10.6804 21.4232 10.6272 21.2601 10.6265H19.5887C19.2488 10.6265 18.9655 10.8527 18.8946 11.1588L18.583 12.6095C18.0164 12.8091 17.5065 13.0886 17.0532 13.448L15.5518 12.9689C15.3979 12.9192 15.2305 12.9213 15.0781 12.9747C14.9257 13.0281 14.7978 13.1295 14.7161 13.2617L13.8804 14.6192C13.7104 14.8987 13.767 15.2447 14.022 15.4577L15.2118 16.4292C15.1693 16.7087 15.1269 16.9749 15.1269 17.2677C15.1269 17.5605 15.1693 17.8267 15.2118 18.1062L14.022 19.0777C13.767 19.2907 13.7104 19.6367 13.8804 19.9162L14.7161 21.2737C14.8861 21.5532 15.2402 21.673 15.5518 21.5665L17.0532 21.0874C17.5065 21.4467 18.0164 21.7262 18.583 21.9258L18.8946 23.3765C18.9655 23.6826 19.2488 23.9089 19.5887 23.9089H21.2601C21.6001 23.9089 21.8834 23.6826 21.9542 23.3765L22.2658 21.9258C22.8324 21.7262 23.3423 21.4467 23.7956 21.0874L25.2971 21.5665C25.6228 21.673 25.9628 21.5399 26.1328 21.2737L26.9685 19.9162C27.1384 19.6367 27.0818 19.2907 26.8268 19.0777L25.637 18.1062C25.6795 17.8267 25.722 17.5605 25.722 17.2677ZM20.4103 19.9295C18.8521 19.9295 17.5773 18.7317 17.5773 17.2677C17.5773 15.8037 18.8521 14.6059 20.4103 14.6059C21.9684 14.6059 23.2432 15.8037 23.2432 17.2677C23.2432 18.7317 21.9684 19.9295 20.4103 19.9295Z" fill="#FAFAFA"/>
                            </svg>
                            <p>Accounts</p></button>
                        <button className={AdminCss.statsBtn}><svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.772461" y="10.8677" width="6.52055" height="13.0411" fill="#FAFAFA"/>
                            <rect x="9.46655" width="6.52055" height="23.9087" fill="#FAFAFA"/>
                            <rect x="18.1606" y="6.52051" width="6.52055" height="17.3881" fill="#FAFAFA"/>
                            </svg><p>Statistics</p></button>
                    </div>
                    <div className={AdminCss.teams} onClick={handleTeamsRoute}>
                        <h5>Teams</h5>
                        <ul>
                            <li>Design</li>
                            <li>Development</li>
                        </ul>
                    </div>
                    <div className={AdminCss.utility}>
                        <div className={AdminCss.setting}><svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.9344 13.305C12.6189 13.2936 12.3033 13.2822 11.9734 13.2822C8.50217 13.2822 5.26046 14.045 2.49209 15.3543C1.22983 15.9463 0.498291 17.062 0.498291 18.2347V20.1132C0.498291 20.7394 1.14377 21.2517 1.93268 21.2517H13.7807C12.7676 20.1046 12.1555 18.7649 12.0069 17.369C11.8582 15.9731 12.1783 14.5708 12.9344 13.305Z" fill="#FAFAFA"/>
                            <path d="M11.1206 10.6259C14.0549 10.6259 16.4336 8.24725 16.4336 5.31297C16.4336 2.3787 14.0549 0 11.1206 0C8.18632 0 5.80762 2.3787 5.80762 5.31297C5.80762 8.24725 8.18632 10.6259 11.1206 10.6259Z" fill="#FAFAFA"/>
                            <path d="M25.722 17.2677C25.722 16.9749 25.6795 16.7087 25.637 16.4292L26.8268 15.4577C27.0818 15.2447 27.1384 14.8987 26.9685 14.6192L26.1328 13.2617C26.0527 13.128 25.9249 13.0253 25.7719 12.9717C25.6189 12.9181 25.4507 12.9171 25.2971 12.9689L23.7956 13.448C23.3423 13.0886 22.8324 12.8091 22.2658 12.6095L21.9542 11.1588C21.9208 11.0089 21.8337 10.8742 21.7074 10.7773C21.5811 10.6804 21.4232 10.6272 21.2601 10.6265H19.5887C19.2488 10.6265 18.9655 10.8527 18.8946 11.1588L18.583 12.6095C18.0164 12.8091 17.5065 13.0886 17.0532 13.448L15.5518 12.9689C15.3979 12.9192 15.2305 12.9213 15.0781 12.9747C14.9257 13.0281 14.7978 13.1295 14.7161 13.2617L13.8804 14.6192C13.7104 14.8987 13.767 15.2447 14.022 15.4577L15.2118 16.4292C15.1693 16.7087 15.1269 16.9749 15.1269 17.2677C15.1269 17.5605 15.1693 17.8267 15.2118 18.1062L14.022 19.0777C13.767 19.2907 13.7104 19.6367 13.8804 19.9162L14.7161 21.2737C14.8861 21.5532 15.2402 21.673 15.5518 21.5665L17.0532 21.0874C17.5065 21.4467 18.0164 21.7262 18.583 21.9258L18.8946 23.3765C18.9655 23.6826 19.2488 23.9089 19.5887 23.9089H21.2601C21.6001 23.9089 21.8834 23.6826 21.9542 23.3765L22.2658 21.9258C22.8324 21.7262 23.3423 21.4467 23.7956 21.0874L25.2971 21.5665C25.6228 21.673 25.9628 21.5399 26.1328 21.2737L26.9685 19.9162C27.1384 19.6367 27.0818 19.2907 26.8268 19.0777L25.637 18.1062C25.6795 17.8267 25.722 17.5605 25.722 17.2677ZM20.4103 19.9295C18.8521 19.9295 17.5773 18.7317 17.5773 17.2677C17.5773 15.8037 18.8521 14.6059 20.4103 14.6059C21.9684 14.6059 23.2432 15.8037 23.2432 17.2677C23.2432 18.7317 21.9684 19.9295 20.4103 19.9295Z" fill="#FAFAFA"/>
                            </svg>
                            <p>Settings</p></div>
                        <div className={AdminCss.logout} onClick={handleLogout}><i class='bx bx-exit'></i><p>Log Out</p></div>
                    </div>
            </nav>

            <div className={AdminCss.pageContent}>

                <div className={AdminCss.detailsDiv}>

                    <div className={AdminCss.volunteerRequest}>
                        <div className={AdminCss.header}>
                            <h2>Admin Panel</h2>
                            <div className={AdminCss.dropdown}>
                                <button className={AdminCss.dropbtn}>Volunteer Details</button>
                                <div className={AdminCss.dropdownContent}>
                                    <Link to='/adminFoundationPage'>    
                                        <p>Foundation Details</p>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className={AdminCss.newVolunteers}>
                            <h5>Volunteer Requests</h5>
                            <div className={AdminCss.scrollBar}>
                                {volunteerDetails.map((item) => {
                                            return<AdminVolunteerCard volunteer_name={item.volunteer_name} foundation_name={item.foundation_name}
                                            email={item.email} registration_date={item.registration_date} _status={item._status}/>
                                        })}
                            </div> 
                        </div>
                        
                        <div className={AdminCss.searchVolunteer}>
                            <h5>Search Volunteers</h5>
                            <form onSubmit={handleSubmit}>
                                <input type='text' placeholder='   Search Volunteers by name, date, ID or email'
                                onChange={handleInputChange} name='userName' value ={userName || ''} required/>
                                <button type='submit' onClick={handleSubmit} className={AdminCss.searchBtn}><svg  className={AdminCss.btnSvg} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" style={{fill: 'rgba(0, 0, 0, 1)'}}><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path></svg></button>
                            </form>
                        </div>

                    </div>


                    <div className={AdminCss.countDiv}>
                        <div className={AdminCss.volunteerCount}>
                            <h4>Volunteer Count</h4>
                            <h2 style={{color: '#FF7070'}}>{totalVolunteers && totalVolunteers.count}+</h2>
                            <img src={percentage} alt='percent' className={AdminCss.percent}/>
                            <img src={people} alt='people' className={AdminCss.people}/>
                        </div>
                        <div className={AdminCss.totalDonation}>
                            <h4>Total Donations</h4>
                            <h2 style={{color: '#FF7070'}}>${totalDonations && totalDonations.sum}</h2>
                            <img src={percentage} alt='percent' className={AdminCss.percent}/>
                            <img src={graph} alt='graph' className={AdminCss.graph}/>
                        </div>

                    </div>

                </div>

                <div className={AdminCss.table}>
                    <button className={AdminCss.tableBtnHeader}>
                        <p>Name</p>
                        <p>Email</p>
                        <p>Foundation</p>
                        <p>Joining Date</p>
                        <p>Status</p>
                    </button>

                    {queryName && <button className={AdminCss.QuerytableBtn}>
                    <p className={AdminCss.name}>{queryName.volunteer_name}</p>
                    <p className={AdminCss.donationType}>{queryName.email}</p>
                    <p>{queryName.foundation_name}</p>
                    <p className={AdminCss.date}>{convertSqlDateToFormattedDate(queryName.registration_date)}</p>
                    <p className={AdminCss.amount}>{queryName._status}</p></button> }              
                    
                    <div id={AdminCss.tableScroll}  style={{ display: showTableScroll ? 'block' : 'none' }}>
                        <div className={AdminCss.scrollBar}>
                            {volunteerDetails.map((item) => {
                            return <AdminVolunteerTable volunteer_name={item.volunteer_name} foundation_name={item.foundation_name}
                            email={item.email} registration_date={item.registration_date} _status={item._status} />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        {/* main */}
        </div> 
    </>
  )
}

