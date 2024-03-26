import React, { useEffect, useState} from 'react';
import { Link} from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { menu, close } from '../assets';
import myImage from '../assets/portrait.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full items-end py-4 
    fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center mx-auto'>
        <Link to='/New-Portfolio' className='flex items-center gap-2' 
        onClick={() => {
          setActive('');
          window.scrollTo(0, 0)
        }}>
          <img src={myImage} alt="logo" className='w-[72px] h-[72px] object-contain rounded-[25px] mr-3'/>
          <p className='text-white text-[22px] font-bold cursor-pointer'>
            <span className='text-[#915eff]'>&lt;</span>Alex<span className='text-[#915eff]'>&gt;&lt;</span>
            <span className='text-[16px] text-[#915eff]'>/</span>
            Zeng<span className='text-[#915eff]'>&gt;</span>
            </p>
        </Link>
        <ul className='list-none hidden md:flex flex-row gap-10 items-center'>
          {navLinks.map((link) => (
            <li key={link.id} className={`${active === link.title ? 'text-white' : 'text-secondary'}
            hover:text-white text-[18px] font-medium cursor-pointer group flex flex-col items-center`}
            onClick={() => setActive(link.title)}>
              <a href={`#${link.id}`}>{link.title}</a>
              <div className={`${active === link.title ? 'w-[110%]' : 'w-0'}
                h-1 violet-gradient group-hover:w-[110%] duration-[600ms]`}/>
            </li>
          ))}
          <li className='flex gap-4'>
              <a href='https://github.com/Alex-Zeng-UofT' className='text-secondary text-[30px] hover:text-white' target='_blank'>
                <FontAwesomeIcon icon={faSquareGithub} />
              </a>
              <a href='https://www.linkedin.com/in/alex-zeng-uoft/' className='text-secondary text-[30px] hover:text-white' target='_blank'>
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              
          </li>
          <li>
            <a href='https://docs.google.com/document/d/1-GsOIfhcDDiW1-UsRlMcH7_EOGlJwW5SukLMsRB25rM/edit?usp=sharing'
              className='bg-secondary text-primary text-[19px] font-semibold p-2.5 rounded-lg pl-4 pr-4 
              hover:bg-tertiary hover:text-secondary'
              target='_blank'>
              Resumé
            </a>
          </li>
        </ul>

        <div className='md:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt='menu' className='w=[28px] h-[28px] object-contain cursor-pointer'
          onClick={() => setToggle(!toggle)}/>
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 
          my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((link) => (
                <li key={link.id} className={`${active === link.title ? 'text-white' : 'text-secondary'}
                font-poppins font-medium cursor-pointer text-[16px]`}
                onClick={() => {
                  setToggle(!toggle)
                  setActive(link.title)
                }}>
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
              <li className='mt-4' onClick={() => {
                  setToggle(!toggle)
                }}>
                <a href='https://docs.google.com/document/d/1-GsOIfhcDDiW1-UsRlMcH7_EOGlJwW5SukLMsRB25rM/edit?usp=sharing'
                  className='bg-secondary text-primary text-[17px] font-semibold p-2 rounded-lg pl-2 pr-2 
                  hover:bg-primary hover:text-secondary '
                  target='_blank'>
                  Resumé
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar