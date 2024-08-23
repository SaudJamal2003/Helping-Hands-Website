import React, {useEffect,useState} from 'react';
import VolunteerSignUpCSS from '../CssFiles/VolunteerSignUp.module.css';
import GoogleLogo from '../SignUpImages/GoogleLogo.png';
import FoundationsDropdown from './FoundationsDropdown';
import picture from '../VolunteerSignUpImages/CoverPic.png';
import volunteerLogo from '../VolunteerSignUpImages/volunteerLogo.jpeg';

export default function VolunteerSignUp(){

    const [formData, setFormData] = useState({
        volunteer_name: '',
        email: '' ,
        vol_password: '',
        foundation_name: '',// Initialize with the properties you want to collect
        foundation_id: ''
      });

      
    const handleInputChangeName = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value});
    };

    const handleDropdownChange = (e) => {
      const { value } = e.target;
      setFormData({ ...formData, foundation_name: value });
    };

    const handleSubmit = (e) => {
      // e.preventDefault();  // -> this is to prevent the page from refreshing
        // Use the formData to make a fetch API request
        fetch('http://localhost:3002/api/volunteer', {
          method: 'POST', // or 'GET', 'PUT', etc., depending on your API
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })
          .then((response) => response.json())
          .then((data) => {
            // Handle the API response here
            console.log(data);
          })
          .catch((error) => {
            // Handle errors here
            console.error('Error:', error);
          });
      };

      const [foundationName, setFoundationName] = useState([]);

      useEffect(() => {
        // Fetch data when the component mounts
        fetchData();
      }, []); // Empty dependency array means this effect runs once after the initial render  
  
      const fetchData = () => {
          fetch('http://localhost:3002/api/viewFoundations')
            .then((response) => response.json())
            .then((data) => {
              // Update the state with the received data
              setFoundationName(data);
            })
            .catch((error) => {
              // Handle errors here
              console.error('Error:', error);
  
              setFoundationName({ error: true });
  
            });
        };

   
    return(
        <>
            <div className={VolunteerSignUpCSS.main}>

              <div className={VolunteerSignUpCSS.coverPic}>

                <div className={VolunteerSignUpCSS.picture}>
                  <img src={picture} alt='picture' />
                </div>

                <div className={VolunteerSignUpCSS.text}>
                  <h1>"Volunteers do not necessarily have the time they just have the heart"</h1>
                  <p>~Winston Churchil</p>
                </div>

              </div>

              <div className={VolunteerSignUpCSS.formDiv}>
                <h1>Welcome Volunteers</h1>
                <p style={{color: 'gray', fontSize:'18px'}} className={VolunteerSignUpCSS.para}>Volunteers! Please Fill out the details</p>
                <img src={volunteerLogo} alt='volLogo' className={VolunteerSignUpCSS.volunteerLogo}/>
                <form className={VolunteerSignUpCSS.formFields} onSubmit={handleSubmit}>
                  <button className= {VolunteerSignUpCSS.SignUpGoogle}><img src={GoogleLogo}  className= {VolunteerSignUpCSS.GoogleLogo} alt= 'GoogleLogo'/>Sign up with Google</button>
                         <div>
                            <p className= {VolunteerSignUpCSS.fnameTag}> Username</p>
                            <input id= {VolunteerSignUpCSS.fnameInput}  placeholder="Enter username" type= 'text'  required pattern="(^[a-zA-Z]{1,25}$)"
                            name='volunteer_name' onChange={handleInputChangeName} value = {formData.volunteer_name || ''}  />
                         </div>   

                         <div>
                            <p className= {VolunteerSignUpCSS.emailTag}>Email address</p>
                            <input className= {VolunteerSignUpCSS.EmailInput} placeholder="Enter your email" type= 'email' required 
                            name='email' onChange={handleInputChangeName} value = {formData.email || ''} />
                         </div>   

                         <div>
                            <p className= {VolunteerSignUpCSS.passTag}>Password</p>
                            <input id= {VolunteerSignUpCSS.passInput} type= 'password' pattern=".{1,10}" 
                            name='vol_password' onChange={handleInputChangeName} value = {formData.vol_password || ''} />
                         </div>   

                            <div>
                              <select  className={VolunteerSignUpCSS.foundationSelector} onChange={handleDropdownChange} name='foundation_name'
                              value={formData.foundation_name}>
                                  {foundationName.map((item) => {
                                  return<FoundationsDropdown foundationName={item.foundation_name}/>
                                  })}
                              </select>
                            </div> 

                          <div className={VolunteerSignUpCSS.buttonDiv}>
                            <button className= {VolunteerSignUpCSS.createBtn} type='submit'>Create Account</button>
                            <div className={VolunteerSignUpCSS.linksDiv}>
                              <p className= {VolunteerSignUpCSS.lastLiner}>Already have an account?</p>
                              <a className= {VolunteerSignUpCSS.loginLink} href= "#">Log in</a> 
                            </div>
                          </div> 
                </form>

              </div>














            </div>
        </>
    );
}