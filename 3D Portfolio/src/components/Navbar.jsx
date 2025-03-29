import React, { useEffect, useState} from 'react';
import { Link} from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { menu, close } from '../assets';
import myImage from '../assets/portrait.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full items-end py-4 
    fixed top-0 z-20 bg-primary max-w-[1920px]`}>
      <div className='w-full flex justify-between items-center mx-auto'>
        <Link to='/' className='flex items-center gap-2' 
        onClick={() => {
          setActive('');
          window.scrollTo(0, 0)
        }}>
          <img src={myImage} alt="logo" className='w-[72px] h-[72px] object-contain rounded-[25px] mr-3'/>
          <p className='text-white text-[22px] font-bold cursor-pointer glow-text'>
            <span className='text-[#44387d]'>&lt;</span>Alex<span className='text-[#44387d]'>&gt;&lt;</span>
            <span className='text-[16px] text-[#44387d]'>/</span>
            Zeng<span className='text-[#44387d]'>&gt;</span>
            </p>
        </Link>
        <ul className='list-none hidden hero:flex flex-row gap-10 items-center'>
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
              <a href='https://github.com/alexxzeng' className='text-secondary text-[30px] hover:text-white hover:scale-105' target='_blank'>
                <FontAwesomeIcon icon={faSquareGithub} />
              </a>
              <a href='https://www.linkedin.com/in/alexxzeng/' className='text-secondary text-[30px] hover:text-white hover:scale-105' target='_blank'>
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href='https://leetcode.com/u/alex_zeng/' className='text-secondary text-[30px] hover:text-white hover:scale-105' target='_blank'>
                <FontAwesomeIcon icon={faCode} width={33}/>
              </a>
          </li>
          <li>
            <a href='https://drive.google.com/file/d/1gmBIEwNfSDV45ONZUSfdmj-zky0/view?usp=sharing'
              className='bg-secondary text-primary text-[19px] font-semibold p-2.5 rounded-lg pl-4 pr-4 
              hover:bg-tertiary hover:text-secondary transition duration-[200ms]'
              target='_blank'>
              Resumé
            </a>
          </li>
        </ul>

        <div className='hero:hidden flex flex-1 justify-end items-center'>
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
              <li className='mt-4 flex gap-2 justify-between' onClick={() => {
                  setToggle(!toggle)
                }}>
                <a href='https://github.com/Alex-Zeng-UofT' className='text-secondary text-[30px] hover:text-white hover:scale-105' target='_blank'>
                <FontAwesomeIcon icon={faSquareGithub} />
              </a>
              <a href='https://www.linkedin.com/in/alexxzeng/' className='text-secondary text-[30px] hover:text-white hover:scale-105' target='_blank'>
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href='https://leetcode.com/u/alex_zeng/' className='text-secondary text-[30px] hover:text-white hover:scale-105' target='_blank'>
                <FontAwesomeIcon icon={faCode} height={26} width={30}/>
              </a>
              </li>
              <li className='flex justify-center w-full' onClick={() => {
                  setToggle(!toggle)
                }}>
                <a href='https://drive.google.com/file/d/1gmBIEwNXNQw7fSDV45Ofdmj-zky0/view?usp=sharing'
                  className='bg-secondary text-primary text-[17px] font-semibold p-2 rounded-lg px-4 
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