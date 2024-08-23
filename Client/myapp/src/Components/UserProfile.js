import React, {useState, useEffect} from 'react';
import UserProfileCss from '../CssFiles/UserProfile.module.css';
import {Link} from 'react-router-dom';
import Logo from '../DashBoardImages/Logo.png';
import profilePic from '../DashBoardImages/ProfilePic.png';
import bigProfilePic from '../UserProfileImages/bigProfilePic.png';
import {convertSqlDateToFormattedDate} from '../lib';


export default function UserProfile() {

    const [information, setInformation] = useState(null);

    useEffect(() => {
        // Fetch data when the component mounts
        fetchData();
      }, []);

    const fetchData = () => {
        fetch('http://localhost:3002/api/userinformation', {
          credentials: 'include'
        })
          .then((response) => response.json())
          .then((data) => {
            // Update the state with the received data
            setInformation(data);
          })
          .catch((error) => {
            // Handle errors here
            console.error('Error:', error);
    
            setInformation({ error: true });
    
          });
      };
      let Date
      if(information && information[0].registration_date){
        Date = convertSqlDateToFormattedDate(information[0].registration_date)
      };



  return (
    <>
        {/* <nav className={UserProfileCss.navbar}>
            <div className="container-fluid" id={UserProfileCss.logoDiv}>
            <Link to='/'>
                <img src ={Logo} alt="..." className={UserProfileCss.logo}/>
            </Link>
            </div>
            <div className= {UserProfileCss.navBtns}>
                <img src={profilePic} alt='...' className={UserProfileCss.profilePic}/>
            </div>
        </nav>
    
        <div className={UserProfileCss.DashBoard}>
            <h2 className={UserProfileCss.menuTitle}>Main Menu</h2>
            <button className={UserProfileCss.dashBtn}>Dashboard</button>
            <button className={UserProfileCss.FoundationsBtn}>Foundations</button>
            <Link to='/userDashboard'>
                <button className={UserProfileCss.UserProfileBtn}>User's Profile</button>
            </Link>
            <Link to='/'>
                <button className={UserProfileCss.HomeBtn}>Home</button>
            </Link>
        </div>
        <div className={UserProfileCss.DashTeams}>
            <h3 className={UserProfileCss.teams}>Teams</h3>
            <p className={UserProfileCss.Design}>Design</p>
            <p className={UserProfileCss.Devlopment}>Development</p>      
        </div>

        <div className={UserProfileCss.UserProfileHeader}>
            <h1 className={UserProfileCss.title}>User Profile</h1>
                    <img src={bigProfilePic} alt='profImage' className={UserProfileCss.bigProfilePic}/>
                    <p className={UserProfileCss.name}>{information && information[0].first_name}</p>
                    <p className={UserProfileCss.email}>{ information && information[0].email}</p>
                    <p className={UserProfileCss.registration}>{Date}</p>
        </div> */}
        <nav className={UserProfileCss.navbar}>
            <div className="container-fluid" id={UserProfileCss.logoDiv}>
            <Link to='/'>
                <img src ={Logo} alt="..." className={UserProfileCss.logo}/>
            </Link>
            </div>
            <div className= {UserProfileCss.navBtns}>
                <img src={profilePic} alt='...' className={UserProfileCss.profilePic}/>
            </div>
        </nav>
    
        
        <div className={UserProfileCss.DashBoard}>
            <h2 className={UserProfileCss.menuTitle}>Main Menu</h2>
            <Link to='/userDashboard'>
              <button className={UserProfileCss.dashBtn}>Dashboard</button>
            </Link>

            <Link to='/UserProfile'>
              <button className={UserProfileCss.UserProfileBtn}>User Profile</button>
            </Link>
            
            <Link to='/viewFoundations'>
              <button className={UserProfileCss.FoundationsBtn}>View Foundations</button>
            </Link>
            <Link to='/'>
              <button className={UserProfileCss.HomeBtn}>Home</button>
            </Link>
        </div>
        <div className={UserProfileCss.DashTeams}>
            <h3 className={UserProfileCss.teams}>Teams</h3>
            <p className={UserProfileCss.Design}>Design</p>
            <p className={UserProfileCss.Devlopment}>Development</p>      
        </div>
       
        <div className={UserProfileCss.UserProfileHeader}>
            <h1 className={UserProfileCss.title}>User Profile</h1>
                    <img src={bigProfilePic} alt='profImage' className={UserProfileCss.bigProfilePic}/>
                    <p className={UserProfileCss.name}>{information && information[0].first_name}</p>
                    <p className={UserProfileCss.email}>{ information && information[0].email}</p>
                    <p className={UserProfileCss.registration}>{Date}</p>
        </div>

    </>
  );
}
