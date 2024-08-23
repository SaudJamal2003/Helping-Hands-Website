import React, {useState} from 'react';
import {Link} from 'react-router-dom'; 
import SignUpCss from '../CssFiles/SignUpCss.module.css'
import GoogleLogo from '../SignUpImages/GoogleLogo.png';
import HandsPic from '../SignUpImages/Hands.png';
import personPic1 from '../SignUpImages/person1.png';
import personPic2 from '../SignUpImages/person2.png';
import personPic3 from '../SignUpImages/person3.png';
import personPic4 from '../SignUpImages/person4.png';
import Arrow from '../SignUpImages/Arrow.png';
import { useNavigate } from 'react-router-dom';
// import { useRouter } from 'react-router-dom';

export default function SignUp() {
    const [formData, setFormData] = useState({
                first_name: '',
                email: '' ,
                user_password: ''// Initialize with the properties you want to collect
              });
        
            const handleInputChangeName = (e) => {
                const { name, value } = e.target;
                setFormData({ ...formData, [name]: value});
            };

            const navigate = useNavigate()
        
            const handleSubmit = (e) => {
                e.preventDefault();  // this is to prevent the page from refreshing
                // Use the formData to make a fetch API request
                fetch('http://localhost:3002/api/user/', {
                  method: 'POST', // or 'GET', 'PUT', etc., depending on your API
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(formData),
                })
                  .then((response) => response.json())
                  .then(res => {
                    // console.log(res, res.json())
                    if(res.status === "Success"){
                      // console.log("Login pe jao")
                      navigate('/login')
                    }
                    else{
                      alert("Error");
                    }
                  })
                  // .then((data) => {
                  //   // Handle the API response here
                  //   console.log(data);
                  // })
                  .catch((error) => {
                    // Handle errors here
                    console.error('Error:', error);
                  });
              };

            //   function Alert(){
            //             var fnameInput = document.getElementById('fnameInput');
            //             var passwordInput = document.getElementById('passInput');
                
            //             if (fnameInput.checkValidity() && passwordInput.checkValidity()) {
            //             // All input fields are valid
            //                  alert('Account Created!');
            //             // You can add more JavaScript code here to perform other actions
            //             } 
            //             else if(fnameInput.value.length > 25 ){
            //                 alert('Length of First should be below 25');
            //             }
            //             else if(passwordInput.value.length > 10 ){
            //                 alert('Password must be under 10 characters');
            //             }
            //             else{
            //             // If any input field is invalid, display an error message
            //                  alert('Please fill out the form correctly.');
            //             }
            //         }
  return (
    <>
    <nav className={SignUpCss.navbar}>
            <ul>
                <li><a href="https://www.youtube.com/watch?v=0i86B4mU-vw">Insights</a></li>
                <li><a href="https://www.youtube.com/watch?v=0i86B4mU-vw">Login</a></li>
            </ul>
        </nav>
    <div className={SignUpCss.main}>
        
        <div className={SignUpCss.formDiv}>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <button className= {SignUpCss.SignUpGoogle}>
                    <img src={GoogleLogo}  className= {SignUpCss.GoogleLogo} alt= 'GoogleLogo'/>
                     Sign up with Google
                </button>
                <hr className={SignUpCss.hrLine1}/>
                    <p className={SignUpCss.or}>or</p>
                <hr className={SignUpCss.hrLine2}/>

                 <p className= {SignUpCss.fnameTag}> First Name</p>
                <input id= {SignUpCss.fnameInput} type= 'text'  required pattern="(^[a-zA-Z]{1,25}$)"
                name='first_name' onChange={handleInputChangeName} value={formData.first_name || ''}/>
                
                <p className= {SignUpCss.emailTag}>Email address</p>
                <input className= {SignUpCss.EmailInput} type= 'email' required 
                name='email' onChange={handleInputChangeName} value={formData.email || ''} />

                <p className= {SignUpCss.passTag}>Password</p>
                <input id= {SignUpCss.passInput} type= 'password' pattern=".{1,10}" 
                name='user_password' onChange={handleInputChangeName} value={formData.user_password || ''} required/>

                <button className= {SignUpCss.createBtn} type='submit' >Create Account</button>
                <p className= {SignUpCss.text}>Already have an account?
                <Link className= {SignUpCss.loginLink} to="/login">Log in</Link></p>
            </form>
        </div>

        <div className={SignUpCss.coverPic}>
            <img src={HandsPic} alt='Hands' className={SignUpCss.pic}/>
        </div>
    </div> 
    
        <div className={SignUpCss.Text}>
            <h1>Become a Volunteer, Make a Difference</h1>
            <p>Discover the joy of giving back by joining us as a volunteer. 
            We believe in the power of community and the positive impact individuals
            can make. Whether you have a passion for helping others, want to develop 
            new skills, or simply enjoy being part of a vibrant team, there's a place
            for you here. Together, we can create meaningful experiences and contribute 
            to a better world. Join us on this rewarding journey and be a force for good!</p>
            <div className={SignUpCss.peoplePics}>
                <img src={personPic1} alt='person1' className={SignUpCss.person1}/>
                <img src={personPic2} alt='person2' className={SignUpCss.person2}/>
                <img src={personPic3} alt='person3' className={SignUpCss.person3}/>
                <img src={personPic4} alt='person4' className={SignUpCss.person4}/>
            </div>
            <img src={Arrow} alt='arrow' className={SignUpCss.ArrowPic}/>
        </div>
    </>

  );
}
