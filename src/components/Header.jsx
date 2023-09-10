import React from 'react'
import resumeImage from '/Users/chris/repos/cv-application/src/components/resume.png'

const Header = () => {
  return (
    <div>
        <header>
            <img className="logo" src={resumeImage}></img>
            <nav>
                    <a className='text'>CV Application</a>
            </nav>
            <a className='cta' href='https://github.com/gonna-boop'><button>GitHub</button></a>
        </header>
    </div>
  )
}

export default Header