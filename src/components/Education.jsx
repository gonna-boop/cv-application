import React, {useState} from 'react'
import * as aiicons from 'react-icons/ai'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { useAtom } from 'jotai';
import { globalMessage } from '../store';

const Education = () => {
  const[isOpen, setIsOpen] = useState(false);

  const [message, setMessage] = useAtom(globalMessage);

  const handleSchoolChange = (event) => {
    setMessage({...message, school: event.target.value});
  }

  const handleDegreeChange = (event) => {
    setMessage({...message, degree: event.target.value});
  }

  const handleStartDateChange = (event) => {
    setMessage({...message, schoolStartDate: event.target.value});
  }

  const handleEndDateChange = (event) => {
    setMessage({...message, schoolEndDate: event.target.value});
  }

  return (
    <div className='Education'>
            <div className='Education-start'>
            <FontAwesomeIcon icon={faGraduationCap} />
                <h2>Education</h2>
            <button className='collapsible' onClick={() => setIsOpen(!isOpen)}><FontAwesomeIcon icon={faChevronDown} /></button>
            </div>
            <div className='Education-input'>
                {isOpen &&  <div>
                  <form id='form'>  
                    <label htmlFor="school">School</label>
                    <input onChange={handleSchoolChange} type="text" id="schoolName" name="schoolName" /><br />
                    <label htmlFor="degree">Degree</label>
                    <input onChange={handleDegreeChange} type="text" id="degree" name="degree" /><br />
                    <label htmlFor="schoolStartDate">Start Date</label>
                    <input onChange={handleStartDateChange} type="date" id="schoolStartDate" name="schoolStartDate" /><br />
                    <label htmlFor="schoolEndDate">End Date</label>
                    <input onChange={handleEndDateChange} type="date" id="schoolEndDate" name="schoolEndDate" /><br />
                </form>
                </div>}
            </div>
      </div>
  )
}

export default Education