import React, { useEffect, useState} from 'react';
import { Link} from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';


const Navbar = () => {
  const [active, setActive] = useState('')
  return (
    <nav className={`${styles.paddingX} w-full items-end py-5 
    fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center 
      max-w-7xl mx-auto'>
        <Link to='/' className='flex items-center gap-2' 
        onClick={() => {
          setActive('');
          window.scrollTo(0, 0)
        }}>
          <img src='../src/image.png' alt="logo" className='w-20 h-20 object-contain rounded-3xl'/>
          <p className='text-white text-[18px] font-bold cursor-pointer'>Alex Zeng</p>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar