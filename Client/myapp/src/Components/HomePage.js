// import React, { useEffect, useState } from 'react'
// import HomePageCss from '../CssFiles/HomePage.module.css'
// import Logo from '../HomePageImages/Logo.png';
// import FirstBgPic from '../HomePageImages/FirstBgPic.png';
// import cloth from '../HomePageImages/cloth.png';
// import cash from '../HomePageImages/Cash.png';
// import food from '../HomePageImages/Food.png';
// import ThirdBgpic from '../HomePageImages/ThirdBgPic.png';
// import profileIcon from '../HomePageImages/profileIcon.png';
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom'

// export default function HomePage(){
//   const navigate = useNavigate();

//     const handleLogout = async () => {
//       await fetch('http://localhost:3002/api/user/logout',{
//         credentials: 'include'
//       })
//       navigate(0)
//     }

//     useEffect(() => {
//       fetchData();
//     }, []);

//     const[userName, setUserName] = useState(null);

//     const fetchData = () => {
//       fetch('http://localhost:3002/api/user/userName', {
//         credentials: 'include',
//         method: 'GET',
//         headers :{
//             'Content-Type': 'application/json'
//         },
//       })
//       .then((response) => response.json())
//       .then((data => {
//         setUserName(data[0]);
//         console.log('Succesfully retreived Username')
//         console.log(data)
//       }));
//     };

//     const handleDashRoute = async () => {
//       if(userName.first_name === 'admin'){
//         navigate('/adminPage');
//       }      
//       else{
//         navigate('/userDashboard');
//       }
//     }

//     return(
//     <>
//       <nav className= {HomePageCss.Nav}>
//         <div className={HomePageCss.listDiv}>
//           <ul className={HomePageCss.NavList}>
//               <img src={Logo} alt = 'logo' className={HomePageCss.logo}/>
//               <li>Home</li> 
//               <Link to='aboutus'>
//                 <li>About us</li>
//               </Link>
//               {/* <Link to='userDashboard'> */}
//                 <li onClick={handleDashRoute}>Dashboard</li>
//               {/* </Link> */}
//           </ul>
//         </div>  

//         <button className={HomePageCss.LogoutBtn} onClick={handleLogout}>Logout</button>
//         <Link to='userprofile'>
//           <img src={profileIcon} alt='profielIcon' className={HomePageCss.profilePic}/>    
//         </Link>  
//       </nav>

//       <div>
//         <div className={HomePageCss.text}>
//           <h1 className={HomePageCss.header}>Welcome to <span className={HomePageCss.coloredtext}>Hunger Relief:<br/></span>
//           Empowering Communities, 
//           Nourishing Lives</h1>
//         </div>
//         <div className={HomePageCss.paratext}>
//           <p1>At Hunger Relief, we believe that no one should go to bed hungry. Our mission is to eradicate hunger and malnutrition by empowering communities and nourishing lives. Through our innovative approach, we connect individuals, organizations, and communities to make a significant impact on hunger relief efforts worldwide.
//           </p1>
//         </div>
//         <div className={HomePageCss.GetStartedBtn}>
//            <button className={HomePageCss.Startbtn}>Get Started</button>
//         </div>
//         <div className= {HomePageCss.bgp1}>
//         <img src={FirstBgPic} alt= 'bg1' className={HomePageCss.FirstBgPic}/>
//         </div>
//       </div>

//       <div id={HomePageCss.connectDiv}>
//         <div className={HomePageCss.DonationTypeTextBlock}>
//           <h1 className={HomePageCss.secondHeader}>Connects nonprofits,
//           honors, & companies
//           every country</h1>
//           <p className={HomePageCss.text2}>We help local nonprofits access the funding, tools,
//           training and support they need to become more </p>
//           <Link to='/donatenow'>
//           <button className={HomePageCss.Donatebtn}>Donate Now</button>
//           </Link>
//         </div>
      

//       <div className={HomePageCss.DonationTypes}>
//         <div>
//           <button className={HomePageCss.clothBtn}>
//             <img src={cloth} alt='cloth' className={HomePageCss.clothImage}/>
//             <div>
//               <h1 className={HomePageCss.clothTitle}>Cloth</h1>
//               <p>Empower the less fortunate by extending a helping hand—donate cash to uplift them from challenging circumstances and foster a path towards a brighter, more hopeful future</p>
//             </div>
//             </button>
//         </div>
        
//         <div>
//           <button className={HomePageCss.cashBtn}>
//             <img src={cash} alt='cash' className={HomePageCss.cashImage}/>
//             <div>
//               <h1 className={HomePageCss.cashTitle}>Cash</h1>
//               <p>Empower the less fortunate by extending a helping hand—donate cash to uplift them from challenging circumstances and foster a path towards a brighter, more hopeful future</p>
//             </div>
//           </button>
//         </div>

//         <div>
//           <button className={HomePageCss.foodBtn}>
//             <img src={food} alt='food' className={HomePageCss.foodImage}/>
//             <div>
//               <h1 className={HomePageCss.foodTitle}>Food</h1>
//               <p>Empower the less fortunate by extending a helping hand—donate cash to uplift them from challenging circumstances and foster a path towards a brighter, more hopeful future</p>
//             </div>
//           </button>
//         </div>
//       </div>

//       </div>

//       <div className={HomePageCss.foundationBlock}>
//           <h1>Donate in Our Foundations</h1>
//           <p>At Hunger Relief, we believe that no one should go to bed hungry. Our mission is to eradicate hunger and malnutrition by empowering communities and nourishing lives. Through our innovative approach, we connect individuals, organizations.</p>
//           <Link to='viewFoundations'>
//             <button className={HomePageCss.viewFoundationbtn}>View Foundations</button>
//           </Link>
//       </div>

//       <img src = {ThirdBgpic} alt='bg3' className={HomePageCss.bg3}/>
      
//       <div className={HomePageCss.volunteerBlock}>
//           <h1 className={HomePageCss.header}>Support our vision for 
//           what future can be</h1>
//           <p>Join our community to become volunteer and
//           you can devote for your life to helping others</p>
//           <Link to='/signUpVolunteer'> 
//             <button className={HomePageCss.volunteerBtn}>Become a Volunteer</button>
//           </Link>
//       </div>

//     </>
//     );
// }


import React ,{ useEffect, useState } from 'react'
import HomePageCss from '../CssFiles/HomePage.module.css'
import Logo from '../HomePageImages2/Logo.png';
import DonationBox from '../HomePageImages2/DonationBox.png';
import cashline from '../HomePageImages2/cashline.png';
import foodline from '../HomePageImages2/foodline.png';
import clothline from '../HomePageImages2/clothline.png';
import FirstBgPic from '../HomePageImages2/FirstBgPic.png';
import footer from '../HomePageImages2/footer.png';
// import cash from '../HomePageImages2/Cash.png';
// import food from '../HomePageImages2/Food.png';
// import cash from '../DonationPageImages/cash.png'
// import cloth1 from '../DonationPageImages/cloth1.png'
// import food from '../DonationPageImages/food.png'
import ThirdBgpic from '../HomePageImages2/ThirdBgPic.png';
import profileIcon from '../HomePageImages2/profileIcon.png';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'

export default function HomePage(){
  const navigate = useNavigate();

    const handleLogout = async () => {
      await fetch('http://localhost:3002/api/user/logout',{
        credentials: 'include'
      })
      navigate(0)
    };

    useEffect(() => {
            fetchData();
          }, []);
      
          const[userName, setUserName] = useState(null);
      
          const fetchData = () => {
            fetch('http://localhost:3002/api/user/userName', {
              credentials: 'include',
              method: 'GET',
              headers :{
                  'Content-Type': 'application/json'
              },
            })
            .then((response) => response.json())
            .then((data => {
              setUserName(data[0]);
              console.log('Succesfully retreived Username')
              console.log(data)
            }));
          };
      
          const handleDashRoute = async () => {
            if(userName.first_name === 'admin'){
              navigate('/adminPage');
            }      
            else{
              navigate('/userDashboard');
            }
          }

          const handleAboutRoute = async () => {
              navigate('/aboutus');      
          }
      

    return(
    <>
    {/* <div className= {HomePageCss.mainFrame}>
      <nav className= {HomePageCss.Nav}>
        <div className={HomePageCss.listDiv}>
          <ul className={HomePageCss.NavList}>
              <img src={Logo} alt = 'logo' className={HomePageCss.logo}/>
              <li>Home</li> 
              <li onClick={handleAboutRoute}>About us</li>
              <li onClick={handleDashRoute}>Dashboard</li>
          </ul>
        </div>  

        <button className={HomePageCss.LogoutBtn} onClick={handleLogout}>Logout</button>
        <Link to='userprofile'>
          <img src={profileIcon} alt='profielIcon' className={HomePageCss.profilePic}/>    
        </Link>  
      </nav>

      <div>
        <div className={HomePageCss.text}>
          <h1 className={HomePageCss.header}>Welcome to <span className={HomePageCss.coloredtext}>Hunger Relief:<br/></span>
          Empowering Communities, 
          Nourishing Lives</h1>
        </div>
       
        <div className={HomePageCss.GetStartedBtn}>
        <Link to='/donatenow'>
          <button className={HomePageCss.Startbtn}>Donate Now</button>
          </Link>
        </div>
        <div className= {HomePageCss.bgp1}>
        <img src={FirstBgPic} alt= 'bg1' className={HomePageCss.FirstBgPic}/>
        </div>
      </div>

      <div id={HomePageCss.connectDiv}>
        <div className={HomePageCss.DonationTypeTextBlock}>
          <h1 className={HomePageCss.secondHeader}>Connects nonprofits,<br></br>
          honors, & companies
          every country</h1>
          <p className={HomePageCss.text2}>We help local nonprofits access the funding, tools,
          training and support they need to become more </p> 
          
          <Link to='/donatenow'>
          <button className={HomePageCss.Donatebtn}>Donate Now</button>
          </Link>

          

        </div>
  
        <img src={DonationBox} alt='DonationBox' className={HomePageCss.DonationBox}/>

        <img src={cashline} alt='cashline' className={HomePageCss.cashline}/>
        
        <img src={foodline} alt='foodline' className={HomePageCss.foodline}/>
        
        <img src={clothline} alt='clothline' className={HomePageCss.clothline}/>
       </div>



      <div className={HomePageCss.foundationBlock}>
          <h1>Donate in Our Foundations</h1>
          <p>At Hunger Relief, we believe that no one should go to bed hungry. Our mission is to eradicate hunger and malnutrition by empowering communities and nourishing lives. Through our innovative approach, we connect individuals, organizations.</p>
          <Link to='viewFoundations'>
            <button className={HomePageCss.viewFoundationbtn}>View Foundations</button>
          </Link>
      </div>

      <img src = {ThirdBgpic} alt='bg3' className={HomePageCss.bg3}/>
      
      <div className={HomePageCss.volunteerBlock}>
          <h1 className={HomePageCss.header}>Support our vision for 
          what future can be</h1>
          <p>Join our community to become volunteer and
          you can devote for your life to helping others</p>
          <Link to='/signUpVolunteer'> 
            <button className={HomePageCss.volunteerBtn}>Become a Volunteer</button>
          </Link>
      </div>

      <img src = {footer} alt='bg3' className={HomePageCss.footer}/>
        </div> */}

        <div className={HomePageCss.main}>

          <div className={HomePageCss.coverDiv}>
            <nav className={HomePageCss.Nav}>
              <img src={Logo} alt='logo'/>
              <div className={HomePageCss.lists}>
                <ul className={HomePageCss.listOne}>
                  <li>Home</li>
                  <li className={HomePageCss.about}  onClick={handleAboutRoute}>About us</li>
                  <li  onClick={handleDashRoute}>Dashboard</li>
                </ul>
                <ul className={HomePageCss.secondOne}>
                  <li onClick={handleLogout}>Logout</li>
                  <li><img src={profileIcon} alt='profileIcon'/></li>
                </ul>
              </div>
            </nav>

            <h1 className={HomePageCss.hiddenText}>Hunger Relief</h1>
            <h1 className={HomePageCss.header}><div>
            Welcome to <span className={HomePageCss.coloredtext}>Hunger Relief:<br/></span>
            Empowering Communities, 
            Nourishing Lives
            </div>
            <Link to='/donatenow'>
               <button className={HomePageCss.Donatebtn}>Donate Now</button>
            </Link>
            </h1>
          </div>

          <div className={HomePageCss.DonateDiv}>
            <h1 className={HomePageCss.secondHeader}>Connects nonprofits,<br></br>
            honors, & companies
            every country</h1>
            <p className={HomePageCss.text2}>We help local nonprofits access the funding, tools,
            training and support they need to become more </p> 
            
            <Link to='/donatenow'>
            <button className={HomePageCss.Donatebtn}>Donate Now</button>
            </Link>

            <div className={HomePageCss.BoxPic}>
              <img src={DonationBox} alt='DonationBox' className={HomePageCss.DonationBox}/>
              <img src={cashline} alt='cashline' className={HomePageCss.cashline}/>
              <img src={foodline} alt='foodline' className={HomePageCss.foodline}/>
              <img src={clothline} alt='clothline' className={HomePageCss.clothline}/>
            </div>

          </div>

          <div className={HomePageCss.foundationBlock}>
            <h1>Donate in Our Foundations</h1>
            <p>At Hunger Relief, we believe that no one should go to bed hungry. Our mission is to eradicate hunger and malnutrition by empowering communities and nourishing lives. Through our innovative approach, we connect individuals, organizations.</p>
            <Link to='viewFoundations'>
              <button className={HomePageCss.viewFoundationbtn}>View Foundations</button>
            </Link>
          </div>

          <div className={HomePageCss.volunteerBlock}>
            <h1>Support our vision for 
            what future can be</h1>
            <p>Join our community to become volunteer and
            you can devote for your life to helping others</p>
            <Link to='/signUpVolunteer'> 
              <button className={HomePageCss.volunteerBtn}>Become a Volunteer</button>
            </Link>
          </div>

          <img src = {footer} alt='bg3' className={HomePageCss.footer}/>



        </div>
    </>
    );
}