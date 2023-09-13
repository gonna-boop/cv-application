import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useAtom } from 'jotai';
import { globalMessage } from '../store';

const Experience = () => {
  const[isOpen, setIsOpen] = useState(false);

  const [message, setMessage] = useAtom(globalMessage);

  const handleCompanyChange = (event) => {
    setMessage({...message, company: event.target.value});
  }

  const handlePositionTitleChange = (event) => {
    setMessage({...message, positionTitle: event.target.value});
  }
  const handleJobDescriptionChange = (event) => {
    setMessage({...message, jobDescription: event.target.value});
  }

  const handleStartDateChange = (event) => {
    setMessage({...message, jobStartDate: event.target.value});
  }

  const handleEndDateChange = (event) => {
    setMessage({...message, jobEndDate: event.target.value});
  }
    
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
                    <input onChange={handleCompanyChange} type="text" id="companyName" name="companyName" /><br />
                    <label htmlFor="positionTitle">Position Title</label>
                    <input onChange={handlePositionTitleChange} type="text" id="positionTitle" name="positionTitle" /><br />
                    <label htmlFor="jobStartDate">Start Date</label>
                    <input onChange={handleStartDateChange} type="date" id="jobStartDate" name="jobStartDate" /><br />
                    <label htmlFor="jobEndDate">End Date</label>
                    <input onChange={handleEndDateChange} type="date" id="jobEndDate" name="jobEndDate" /><br />
                    <label htmlFor="jobDescription">Job Description</label>
                    <input onChange={handleJobDescriptionChange} type="text" id="jobDescription" name="jobDescription" /><br />
                </form>
                </div>}
            </div>
      </div>
  )
}

export default Experience