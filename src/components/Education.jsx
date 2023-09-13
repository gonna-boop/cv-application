import React, {useState} from 'react'
import * as aiicons from 'react-icons/ai'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faGraduationCap } from '@fortawesome/free-solid-svg-icons'


const Education = () => {
  const[isOpen, setIsOpen] = useState(false);

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
                    <input type="text" id="schoolName" name="schoolName" /><br />
                    <label htmlFor="degree">Degree</label>
                    <input type="text" id="degree" name="degree" /><br />
                    <label htmlFor="startDate">Start Date</label>
                    <input type="date" id="startDate" name="startDate" /><br />
                    <label htmlFor="endDate">End Date</label>
                    <input type="date" id="endDate" name="endDate" /><br />
                </form>
                </div>}
            </div>
      </div>
  )
}

export default Education