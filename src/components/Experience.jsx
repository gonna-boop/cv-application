import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faChevronDown } from '@fortawesome/free-solid-svg-icons'

const Experience = () => {
  const[isOpen, setIsOpen] = useState(false);
    
  return (
    <div className='experience'>
            <div className='experience-start'>
            <FontAwesomeIcon icon={faBriefcase} />
                <h2>Experience</h2>
            <button className='collapsible' onClick={() => setIsOpen(!isOpen)}><FontAwesomeIcon icon={faChevronDown} /></button>
            </div>
            <div className='experience-input'>
                {isOpen &&  <div>
                  <form id='form'>  
                    <label htmlFor="company">Company Name</label>
                    <input type="text" id="companyName" name="companyName" /><br />
                    <label htmlFor="positionTitle">Position Title</label>
                    <input type="text" id="positionTitle" name="positionTitle" /><br />
                    <label htmlFor="startDate">Start Date</label>
                    <input type="date" id="startDate" name="startDate" /><br />
                    <label htmlFor="endDate">End Date</label>
                    <input type="date" id="endDate" name="endDate" /><br />
                    <label htmlFor="jobDescription">Job Description</label>
                    <input type="text" id="jobDescription" name="jobDescription" /><br />
                </form>
                </div>}
            </div>
      </div>
  )
}

export default Experience