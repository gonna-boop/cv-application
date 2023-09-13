import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTie } from '@fortawesome/free-solid-svg-icons'
import { useAtom } from 'jotai';
import { globalMessage } from '../store';

const PersonalInfo = () => {
  const [message, setMessage] = useAtom(globalMessage);

  const handleFullNameChange = (event) => {
    setMessage({...message, fullName: event.target.value});
  }

  const handleEmailChange = (event) => {
    setMessage({...message, email: event.target.value});
  }

  return (
    <div className='genInfoFull'>
            <div className='genInfo'>
                <FontAwesomeIcon icon={faUserTie} />
                <h2>Personal Information</h2>
            </div>
            <form id='form'>  
                <label htmlFor="fullName">Full name</label>
                <input type="text" id="fullname" name="fullName" onChange={handleFullNameChange}/><br />
                <label htmlFor="email">Email</label>
                <input onChange={handleEmailChange} type="email" id="email" name="email" /><br />
                <label htmlFor="phoneNum">Phone Number</label>
                <input type="tel" id="phoneNum" name="phoneNum" /><br />
                <label htmlFor="address">Address</label>
                <input type="text" id="address" name="address" />
            </form>
            <h2>Message: {message.fullName}</h2>
      </div>
  )
}

export default PersonalInfo;
