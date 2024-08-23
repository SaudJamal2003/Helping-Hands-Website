import './App.css';
import DashBoard from './Components/DashBoard';
import ViewFoundations from './Components/ViewFoundations';
import VolunteerSignUp from './Components/VolunteerSignUp';
import FoodDonationDetails from './Components/FoodDonationDetails';
import PaymentDetails from './Components/PaymentDetails';
import ClothDonationDetails from './Components/ClothDonationDetails';
import DonationPage from './Components/DonationPage';
import HomePage from './Components/HomePage';
import AboutUs from './Components/AboutUs';
import DonationSuccessful from './Components/DonationSuccessful';
// import SignUpPage from './Components/SignUpPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './Components/SignUp';
import LoginPage from './Components/LoginPage';
import UserProfile from './Components/UserProfile';
// import { useEffect, useState } from 'react';
import { AuthenticatedRoutes } from './Components/AuthenticatedRoutes';
import AdminPage from './Components/AdminPage';
import FoundationPanel from './Components/FoundationPanel';
import AdminFoundationPanel from './Components/AdminFoundationPanel';
// import { UnAuthenticatedRoutes } from './Components/UnAuthenticatedRoutes';
import FoundationLogin from './Components/FoundationLogin';
import ForgotPassword from './Components/ForgotPassword';
import ResetPassword from './Components/ResetPassword';
import FoundationRegistration from './Components/FoundationRegistration';
import ForgotFoundationPassword from './Components/ForgotFoundationPassword';
import ResetFoundationPassword from './Components/ResetFoundationPass';


function App() {
  // const [auth, setAuth] = useState(false);

  // useEffect(() => {
  //   fetch('http://localhost:3002/', {
  //     credentials: 'include'
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data)
  //       if (data.status === "Success") {
  //         console.log('first')
  //         setAuth(true);
  //       }
  //     })
  // }, [])
  return (
    <div>
       <BrowserRouter>
        <Routes>
          <Route element={<AuthenticatedRoutes />}>
            <Route exact path="/adminPage" element={<AdminPage />}>
            </Route>
            
            <Route exact path="/adminFoundationPage" element={<AdminFoundationPanel />}>
            </Route>

            <Route exact path="/foundationPanel" element={<FoundationPanel/>}>
            </Route>

            <Route exact path="/donatenow" element={<DonationPage />}>
            </Route>

            <Route exact path="/viewFoundations" element={<ViewFoundations />}>
            </Route>

            <Route exact path="/signUpVolunteer" element={<VolunteerSignUp />}>
            </Route>

            <Route exact path="/cashDonationDetails" element={<PaymentDetails />}>
            </Route>

            <Route exact path="/clothDonationDetails" element={<ClothDonationDetails />}>
            </Route>

            <Route exact path="/foodDonationDetails" element={<FoodDonationDetails />}>
            </Route>

            <Route exact path="/userDashboard" element={<DashBoard />}>
            </Route>

            <Route exact path="/userprofile" element={<UserProfile />}></Route>

            <Route exact path="/aboutus" element={<AboutUs />}></Route>

            <Route exact path="/donationsuccessful" element={<DonationSuccessful />}></Route>

            <Route exact path="/" element={<HomePage />}></Route>

          </Route>

            <Route exact path="/signup" element={<SignUp />}></Route>
            <Route exact path="/login" element={<LoginPage />}></Route> 
            <Route exact path="/foundationLogin" element={<FoundationLogin />}></Route>
            <Route exact path="/forgetPassword" element={<ForgotPassword />}></Route>
            <Route exact path="/reset-password/:id/:token" element={<ResetPassword />}></Route>
            <Route exact path="/register-foundation" element={<FoundationRegistration />}></Route>
            <Route exact path="/forgot-foundation-password" element={<ForgotFoundationPassword />}></Route>
            <Route exact path="/reset-foundation-password/:id/:token" element={<ResetFoundationPassword />}></Route>
        </Routes>

      </BrowserRouter>



    </div>

  );
}

export default App;
