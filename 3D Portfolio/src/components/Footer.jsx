import React from 'react'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faSquareGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <div className="h-[80px] bg-black-100 z-10 mt-32 flex justify-center items-center">
        
        <div className='flex gap-8 text-secondary items-center'>
            <div><FontAwesomeIcon icon={faPhone}/> &nbsp;(604) 368-9308</div>
            <div><FontAwesomeIcon icon={faEnvelope}/> &nbsp;a.zeng@mail.utoronto.ca</div>
            <div className='flex gap-3 text-[30px]'>
                <a href='https://github.com/Alex-Zeng-UofT' className='hover:text-white' target='_blank'>
                    <FontAwesomeIcon icon={faSquareGithub} /> 
                </a>
                <a href='https://www.linkedin.com/in/alex-zeng-uoft/' className='hover:text-white' target='_blank'>
                    <FontAwesomeIcon icon={faLinkedin}/> 
                </a>
                <a href='https://instagram.com/alex.zengg_' className='hover:text-white' target='_blank'>
                    <FontAwesomeIcon icon={faInstagram}/> 
                </a>
            </div>
        </div>
    
    </div>
  )
}

export default Footer