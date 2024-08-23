import React from 'react';
// import VolunteerSignUpCSS from '../CssFiles/VolunteerSignUp.module.css';


export default function FoundationsDropdown({foundationName}) {
     
  return (
    <>
        <option value={foundationName}>{foundationName}</option>
    </>
  )
}
