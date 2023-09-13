import { useAtom, useAtomValue } from 'jotai'
import React, { useState } from 'react'
import { globalMessage } from '../store'

const UserResume = () => {
  const message = useAtomValue(globalMessage);

  return (
    <div className='userResume'>
        <div className='cvHeader'>
        <h2>{message.fullName}</h2>
        <div>{message.email}</div>
        <div>{message.phoneNum}</div>
        <div>{message.address}</div>
    </div>
    <div className='educationSection'>
      <h2>{message.school}</h2>
      <div>{message.degree}</div>
      <div>{message.schoolStartDate}</div>
      <div>{message.schoolEndDate}</div>
    </div>
    <div className='experienceSection'>
        <h3>{message.company}</h3>
        <div>{message.positionTitle}</div>
        <div>{message.jobStartDate}</div>
        <div>{message.jobEndDate}</div>
        <div>{message.jobDescription}</div>
    </div>
    </div>
  )
}

export default UserResume