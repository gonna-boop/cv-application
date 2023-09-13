import React from 'react'
import Education from './Education'
import Experience from './Experience'
import PersonalInfo from './PersonalInfo'
import UserResume from './UserResume'

const MainContent = () => {
  return (
      <>
      <div className='content'>
          <div className='left-side-content'>
            <PersonalInfo />
            <br></br>
            <Education />
            <br></br>
            <Experience />
        </div>
        <div className='right-side-content'>
            <UserResume />
        </div>
      </div> 
      </>
  )
}

export default MainContent