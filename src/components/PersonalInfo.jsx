import React from 'react'
// import { FaUserAlt } from "react-icons/fa";


const PersonalInfo = () => {
  return (
    <div className='genInfoFull'>
            <div className='genInfo'>
                {/* <img className='genInfoLogo' src={FaUserAlt}></img> */}
                <h2>Personal Information</h2>
            </div>
            <form id='form'>  
                <label htmlFor="fullName">Full name</label>
                <input type="text" id="fullname" name="fullName" /><br />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" /><br />
                <label htmlFor="phoneNum">Phone Number</label>
                <input type="tel" id="phoneNum" name="phoneNum" /><br />
                <label htmlFor="address">Address</label>
                <input type="text" id="address" name="address" />
            </form>
      </div>
  )
}

export default PersonalInfo;