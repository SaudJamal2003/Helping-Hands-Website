import React, {useEffect, useState} from 'react';
import FoundationPanelCss from '../CssFiles/foundationPanelCss.module.css'
import logo from '../DashBoardImages/Logo.png';
import people from '../DashBoardImages/people.png';
import percentage from '../DashBoardImages/percentageDrop.png';
import graph from '../DashBoardImages/graph.png';
import pic from '../DashBoardImages/dude.png'
import rectangle from '../DashBoardImages/rectangle.png'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {convertSqlDateToFormattedDate} from '../lib';


export default function FoundationPanel() {

    const[receivedDonations, setreceivedDonations] = useState(0);
    const[volCount, setVolCount] = useState(0);

    const[queryName, setQueryName] = useState(null);
    const [userName, setUserName] = useState(null);

    const[showDetails, setShowDetails] = useState(true);

    useEffect(() =>{
        fetchData();
        fetchData2();
    }, []);

    const fetchData = () => {
        fetch('http://localhost:3002/api/foundationPanel/volunteerCount',{
            credentials: 'include',
            method: 'GET',
            headers :{
                'Content-Type': 'application/json'
            },
        })
        .then((response) => response.json())
        .then((data => {
            setVolCount(data)
        }))
        .catch((error) => {
            console.log('Error', error)
            setVolCount({error: true})
        })
    };

    const fetchData2 = () => {
        fetch('http://localhost:3002/api/foundationPanel/donationsReceived',{
            credentials: 'include',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then((response) => response.json())
        .then((data => {
            setreceivedDonations(data);
        }))
        .catch((error) => {
            console.log('Error ', error);
            setreceivedDonations({error: true});
        })
    };

    const handleInputChange = (e) => {
        setUserName(e.target.value);
        // console.log(userName);
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:3002/api/foundationPanel/queryRecord?queryName=${userName}`,{ 
            // this way of writing URL allows us to send parameter to controller
            credentials: 'include',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then((response) => response.json())
        .then((data => {
            setQueryName(data[0]);
            console.log(data[0])
            console.log('Success');
            setShowDetails(false);
        }))
        .catch((error) =>{
            console.log('Error', error);
            setQueryName({error: true});
        })
    };

    const [task, setTask]= useState({
        volName:'',
        foundationName: '',
        _email: '',
        pickUp: '',
        dropOff: '',
        description: ''
      });

    const handleLocationChange = (e) => {
        const { name, value } = e.target;
        setTask({ ...task, [name]: value, volName: queryName.volunteer_name , _email: queryName.email, foundationName: queryName.foundation_name});
    };

      const handleSubmitMail = async (e) => { 
        e.preventDefault() 
        try {
          // Make API call to approve volunteer request using fetch
          const response = await fetch('http://localhost:3002/api/foundationPanel/sendTaskMail', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            // You can pass any necessary data here in the body
            // For example: JSON.stringify({ volunteerId: 'volunteerIdHere' })
            body: JSON.stringify(task) //volEmail instead of this ?
          });
    
          if (!response.ok) {
            throw new Error('Failed to send mail');
          }
    
          alert('Task email sent successfully.');
        } 
        catch (error) {
          console.error('Error in sending mail:', error);
          alert('Error in sending mail to volunteer. Please try again later.');
        } 
      };

    const navigate = useNavigate();

    const handleLogout = async () => {
        await fetch('http://localhost:3002/api/user/logout',{
          credentials: 'include'
        })
        navigate(0)
      }

    const handleDashRoute = async () => {
        navigate('/userDashboard');
    }

    const handleTeamsRoute = async () => {
        navigate('/aboutus');
    }

  return (
    <>
       <div className={FoundationPanelCss.main}>
            <nav className={FoundationPanelCss.navbar}>
                <Link to='/'>
                    <img src={logo} alt='logo' className={FoundationPanelCss.logo}/>
                </Link>                    
                <div className={FoundationPanelCss.mainMenu}>
                        <h4>Main Menu</h4>
                        {/* <Link to='/dashboard'> */}
                            <button className={FoundationPanelCss.DashBtn} onClick={handleDashRoute}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" style= {{fill: 'rgba(0, 0, 0, 1)'}}><path d="M4 13h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1zm-1 7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v4zm10 0a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v7zm1-10h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1z"></path></svg>
                                <p>Dashboard</p></button>
                        {/* </Link> */}
                        <button className={FoundationPanelCss.adminBtn}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" style={{fill: "rgba(0, 0, 0, 1)"}}><path d="M4 21h9.62a3.995 3.995 0 0 0 3.037-1.397l5.102-5.952a1 1 0 0 0-.442-1.6l-1.968-.656a3.043 3.043 0 0 0-2.823.503l-3.185 2.547-.617-1.235A3.98 3.98 0 0 0 9.146 11H4c-1.103 0-2 .897-2 2v6c0 1.103.897 2 2 2zm0-8h5.146c.763 0 1.448.423 1.789 1.105l.447.895H7v2h6.014a.996.996 0 0 0 .442-.11l.003-.001.004-.002h.003l.002-.001h.004l.001-.001c.009.003.003-.001.003-.001.01 0 .002-.001.002-.001h.001l.002-.001.003-.001.002-.001.002-.001.003-.001.002-.001c.003 0 .001-.001.002-.001l.003-.002.002-.001.002-.001.003-.001.002-.001h.001l.002-.001h.001l.002-.001.002-.001c.009-.001.003-.001.003-.001l.002-.001a.915.915 0 0 0 .11-.078l4.146-3.317c.262-.208.623-.273.94-.167l.557.186-4.133 4.823a2.029 2.029 0 0 1-1.52.688H4v-6zM16 2h-.017c-.163.002-1.006.039-1.983.705-.951-.648-1.774-.7-1.968-.704L12.002 2h-.004c-.801 0-1.555.313-2.119.878C9.313 3.445 9 4.198 9 5s.313 1.555.861 2.104l3.414 3.586a1.006 1.006 0 0 0 1.45-.001l3.396-3.568C18.688 6.555 19 5.802 19 5s-.313-1.555-.878-2.121A2.978 2.978 0 0 0 16.002 2H16zm1 3c0 .267-.104.518-.311.725L14 8.55l-2.707-2.843C11.104 5.518 11 5.267 11 5s.104-.518.294-.708A.977.977 0 0 1 11.979 4c.025.001.502.032 1.067.485.081.065.163.139.247.222l.707.707.707-.707c.084-.083.166-.157.247-.222.529-.425.976-.478 1.052-.484a.987.987 0 0 1 .701.292c.189.189.293.44.293.707z"></path></svg>                        
                        <p className={FoundationPanelCss.foundationLabel}>Foundation Panel</p></button>
                        <button className={FoundationPanelCss.accountsBtn}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" style= {{fill: 'rgba(0, 0, 0, 1)'}}><path d="M4.5 8.552c0 1.995 1.505 3.5 3.5 3.5s3.5-1.505 3.5-3.5-1.505-3.5-3.5-3.5-3.5 1.505-3.5 3.5zM19 8h-2v3h-3v2h3v3h2v-3h3v-2h-3zM4 19h10v-1c0-2.757-2.243-5-5-5H7c-2.757 0-5 2.243-5 5v1h2z"></path></svg>
                            <p>Accounts</p></button>
                        <button className={FoundationPanelCss.statsBtn}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" style= {{fill: 'rgba(0, 0, 0, 1)'}}><path d="M6 21H3a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1zm7 0h-3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1zm7 0h-3a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1z"></path>
                            </svg>
                            <p>Statistics</p></button>
                    </div>
                    <div className={FoundationPanelCss.teams} onClick={handleTeamsRoute}>
                        <h5>Teams</h5>
                        <ul>
                            <li>Design</li>
                            <li>Development</li>
                        </ul>
                    </div>
                    <div className={FoundationPanelCss.utility}>
                        <div className={FoundationPanelCss.setting}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" style= {{fill: 'rgba(0, 0, 0, 1)'}}><path d="m2.344 15.271 2 3.46a1 1 0 0 0 1.366.365l1.396-.806c.58.457 1.221.832 1.895 1.112V21a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1.598a8.094 8.094 0 0 0 1.895-1.112l1.396.806c.477.275 1.091.11 1.366-.365l2-3.46a1.004 1.004 0 0 0-.365-1.366l-1.372-.793a7.683 7.683 0 0 0-.002-2.224l1.372-.793c.476-.275.641-.89.365-1.366l-2-3.46a1 1 0 0 0-1.366-.365l-1.396.806A8.034 8.034 0 0 0 15 4.598V3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1.598A8.094 8.094 0 0 0 7.105 5.71L5.71 4.904a.999.999 0 0 0-1.366.365l-2 3.46a1.004 1.004 0 0 0 .365 1.366l1.372.793a7.683 7.683 0 0 0 0 2.224l-1.372.793c-.476.275-.641.89-.365 1.366zM12 8c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4z"></path></svg>
                            <p>Settings</p></div>
                        <div className={FoundationPanelCss.logout} onClick={handleLogout}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"  style= {{fill: 'rgba(0, 0, 0, 1)'}}><path d="M19.002 3h-14c-1.103 0-2 .897-2 2v4h2V5h14v14h-14v-4h-2v4c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.898-2-2-2z"></path><path d="m11 16 5-4-5-4v3.001H3v2h8z"></path></svg>
                        <p>Log Out</p></div>
                    </div>
            </nav>

            <div className={FoundationPanelCss.pageContent}>

                <div className={FoundationPanelCss.detailsDiv}>

                    <div className={FoundationPanelCss.volunteerRequest}>
                        <div className={FoundationPanelCss.header}>
                            <h2>Foundation Panel</h2>
                        </div>
                        <div className={FoundationPanelCss.foundationSearch}>
                            <form onSubmit={handleSubmit}>
                                <input type='text' placeholder='   Search Volunteers by name'
                                onChange={handleInputChange} name='userName' value ={userName || ''} required/>
                                <button type='submit' onClick={handleSubmit} className={FoundationPanelCss.foundationSearchBtn}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" style={{fill: 'rgba(0, 0, 0, 1)'}}><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path></svg></button>
                            </form>
                        </div>

                        <div className={FoundationPanelCss.newVolunteers}>
                            <h4>Volunteer Details</h4>
                            <div className={FoundationPanelCss.tempDiv} style={{ display: showDetails ? 'block' : 'none' }}>
                                <img src={rectangle} alt='rectangle' className={FoundationPanelCss.firstImg}/>  
                                <div className={FoundationPanelCss.groupImages}>
                                    <img src={rectangle} alt='rectangle' className={FoundationPanelCss.SecondImg}/>               
                                    <img src={rectangle} alt='rectangle' className={FoundationPanelCss.thirdImg}/>               
                                    <img src={rectangle} alt='rectangle' className={FoundationPanelCss.fourthImg}/>               
                                    <img src={rectangle} alt='rectangle' className={FoundationPanelCss.fifthImg}/>               
                                </div>             
                            </div>

                            {queryName &&<div className={FoundationPanelCss.SearchedVolunteer}>
                                {/* <img src={rectangle} alt='rectangle' style={{ backgroundColor: 'rgba(234, 229, 232, 0.11)', width: '55px', height: '55x', borderRadius: '0.3rem'}}/> */}               
                                <div className={FoundationPanelCss.colOne}>
                                    <div className={FoundationPanelCss.headerColOne}>
                                        <img src={pic} alt='pic' className={FoundationPanelCss.pic}/>
                                         <div className={FoundationPanelCss.foundation_name}>
                                            <h3>{queryName && queryName.volunteer_name}</h3>
                                            <p>{queryName && queryName.foundation_name}</p>
                                        </div>   
                                    </div>

                                    <div className={FoundationPanelCss.details}>
                                        <h4>Full Name</h4>
                                        <p>{queryName && queryName.volunteer_name}</p>
                                        <h4>Email</h4>
                                        <p>{queryName && queryName.email}</p>
                                        <h4>Joining Date</h4>
                                        <p>{queryName && convertSqlDateToFormattedDate(queryName.registration_date)}</p>
                                    </div>
                                </div>

                                <div className={FoundationPanelCss.colTwo}>
                                    <div className={FoundationPanelCss.colTwoDate}>
                                        <p>{queryName && convertSqlDateToFormattedDate(queryName.registration_date)}</p>
                                    </div>

                                    <div className={FoundationPanelCss.detailsColTwo}>
                                        <h4>Volunteer ID</h4>
                                        <p>{queryName && queryName.volunteer_id}</p> 
                                        <h4>Status</h4>
                                        <p style={{color: '#35C418'}}>{queryName && queryName._status}</p>
                                    </div>
                                </div>                                
                            </div>  }

                        </div>
                    </div>


                    <div className={FoundationPanelCss.countDiv}>
                        <div className={FoundationPanelCss.volunteerCount}>
                            <h4>Volunteer Count</h4>
                            <h2 style={{color: '#FF7070'}}>
                                {volCount && volCount.count}+
                            </h2>
                            <img src={percentage} alt='percent' className={FoundationPanelCss.percent}/>
                            <img src={people} alt='people' className={FoundationPanelCss.people}/>
                        </div>
                        <div className={FoundationPanelCss.totalDonation}>
                            <h4>Total Donations</h4>
                            <h2 style={{color: '#FF7070'}}>$ {receivedDonations && receivedDonations.sum}
                            {/* {totalDonations && totalDonations.sum} */}
                            </h2>
                            <img src={percentage} alt='percent' className={FoundationPanelCss.percent}/>
                            <img src={graph} alt='graph' className={FoundationPanelCss.graph}/>
                        </div>

                    </div>

                </div>

                <div className={FoundationPanelCss.taskAssign}>
                    <div className={FoundationPanelCss.schedule}>
                        <h2>Assign Tasks to Volunteers</h2>
                        <div className={FoundationPanelCss.inputLocation}>
                            <form>
                                <h4>Pick Up</h4>
                                <input type='text' placeholder='    location...' 
                                 onChange={handleLocationChange} name='pickUp'  value ={task.pickUp || ''} required/>
                                <h4>Drop Off</h4>
                                <input type='text' placeholder='    location...' 
                                 onChange={handleLocationChange} name='dropOff'  value ={task.dropOff || ''}required/>
                                <button type='submit' className={FoundationPanelCss.sendBtn} onClick={handleSubmitMail}>Send</button>
                            </form>
                        </div>
                    </div>

                    <div className={FoundationPanelCss.taskDescription}>
                        <div className={FoundationPanelCss.scrollBar}>
                            <textarea rows="20" cols="54" placeholder='Write Task here...' 
                             onChange={handleLocationChange} name='description'  value ={task.description || ''}required></textarea>
                        </div>
                    </div>
                </div>


            {/* detailsdiv */}
            </div>




            {/* main */}
        </div>
    </>
  )
}

