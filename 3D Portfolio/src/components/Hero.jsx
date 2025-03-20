import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'
import Typewriter from 'typewriter-effect';
import myImage from '../assets/me.jpg'
import { Tilt } from 'react-tilt';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faCode, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import {wave, arrow} from '../assets/'
import me from '/me.webm'
import { useRef, useEffect } from 'react';


const Hero = () => {

    const videoRef = useRef(null);
  
    useEffect(() => {
      if (videoRef.current) {
        videoRef.current.play().catch((err) => console.error("Video play error:", err));
      }
    }, []);

  return (
    <section className='relative w-full h-screen mx-auto md:pt-40 pt-32'>

      <div className='xl:ml-48 xl:mr-32 lg:ml-20 ml-0 flex z-[10]'>
        <div className='xs:w-[360px] w-[320px] xs:h-[180px] h-[140px] rounded-xl bg-tertiary flex flex-col justify-center items-center text-3xl gap-2 font-bold z-10 mx-auto lg:mx-0 2xl:scale-125'>
          <div className='flex justify-center items-center gap-2'>
             <img src={wave} alt="hand" className='h-16 w-16 -mt-2'/>
             Hey, I'm Alex!
          </div>
         

          <div className='text-base text-secondary z-[10]'>
          <Typewriter
              options={{
                strings: ['A Software Engineering Student'],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>

        {/* <div className='font-bold text-3xl text-white w-[500px] z-[10] hidden xl:block'>
          <Typewriter
              options={{
                strings: ['A Software Engineering Student'],
                autoStart: true,
                loop: true,
              }}
            />
          </div> */}
      </div>
      

      <div className='absolute bottom-0 w-full'>
        <video ref={videoRef} autoPlay muted loop playsInline id="myVideo" preload="auto" className='mx-auto z-0 h-[75vh]'>
          <source src={me} type="video/webm"/>
        </video>
        {/* <img src={me} alt="me" className='h-[75vh] mx-auto'/> */}
      </div>

      

      <div className='absolute xs:bottom-6 bottom-20 w-full justify-center items-center hidden toggle '>
        <a href="#about" className='z-10 items-center flex flex-col group xs:hidden'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-white flex
          justify-center items-start p-2 group-hover:border-white transition duration-200'>
            <motion.div animate={{y: [0, 24, 0]}} 
            transition={{duration: 1.5, repeat: Infinity, repeatType: 'loop'}}
            className='w-3 h-3 rounded-full bg-white mb-1 group-hover:bg-white'/>
          </div>
          <p className='mt-2 text-white group-hover:text-white transition duration-200'>click to scroll down</p>
        </a>

      </div>

      <div className='absolute bottom-0 right-0 mr-16 mb-8 hidden md:flex flex-col gap-4 z-10 scale-75 xl:scale-100'>
        <a href='https://github.com/alexxzeng' target='_blank'
          className='group h-28 w-28 rounded-full bg-tertiary flex justify-center items-center text-3xl gap-2 font-bold z-10 mx-auto xl:mx-0'>
          <FontAwesomeIcon icon={faSquareGithub} className='text-6xl text-secondary opacity-80 transition group-hover:opacity-100 group-hover:cursor-pointer'/>
        </a>
        <a href='https://linkedin.com/in/alexxzeng' target='_blank'
           className='group h-28 w-28 rounded-full bg-tertiary flex justify-center items-center text-3xl gap-2 font-bold z-10 mx-auto xl:mx-0'>
          <FontAwesomeIcon icon={faLinkedin} className='text-6xl text-secondary opacity-80 transition group-hover:opacity-100 group-hover:cursor-pointer'/>
        </a>
        <img src={arrow} alt="arrow" className="h-60 min-w-56 absolute -top-20 right-32" />
        <a href="#about" className='group h-28 w-28 rounded-full bg-tertiary flex justify-center items-center text-3xl gap-2 font-bold z-10 mx-auto xl:mx-0'>
            <FontAwesomeIcon icon={faArrowDown} className='text-6xl text-secondary opacity-80 transition group-hover:opacity-100 group-hover:cursor-pointer'/>
        </a>
      </div>
      
    </section>
  )
}

export default Hero