import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'
import Typewriter from 'typewriter-effect';
import myImage from '../assets/me.png'
import { Tilt } from 'react-tilt';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'

const Hero = () => {

  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[92px] max-w-7xl
      mx-auto flex flex-row items-start gap-5 mt-4`}>
        <div className='flex flex-col justif-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915eff] glow-text'>Alex!</span>
          </h1>
          <Typewriter
            options={{
              strings: ['A Software Engineering Student'],
              autoStart: true,
              loop: true,
              wrapperClassName: 'typer',
              cursorClassName: 'typercur',
              delay: 35,
              pauseFor: 4500,
              deleteSpeed: 1
            }}
          />
        </div>

        <div className='hero:flex gap-10 z-10 edu:ml-[9vw] hidden ml-[2vw]'>
          <div className='flex flex-col py-5 justify-around text-secondary font-bold'>
              <a href='https://github.com/Alex-Zeng-UofT' className='hover:text-white glow-text-thin' target='_blank'>
                <FontAwesomeIcon icon={faSquareGithub} /> &nbsp;GitHub
              </a>
              <a href='https://www.linkedin.com/in/alex-zeng-uoft/' className='hover:text-white glow-text-thin' target='_blank'>
                <FontAwesomeIcon icon={faLinkedin} /> &nbsp;LinkedIn
              </a>
              
              <a href="https://docs.google.com/document/d/1SxR9lrCR-16yJE5j8v7vo2sNfX_L7hafrIV7JwDiWow/edit?usp=sharing" 
              className='hover:text-white glow-text-thin' target='_blank'>
                <FontAwesomeIcon icon={faFile} /> &nbsp;Resume
              </a>
              
          </div>
          <Tilt className='z-10 green-pink-gradient rounded-full p-[3px] w-[206px] h-[206] shadow-2xl shadow-purple-800'>
            <img src={myImage} alt="logo" className='w-[200] h-[200] object-contain rounded-full mr-3'/>
          </Tilt>
        </div>
        
      </div>
      
      <div className='absolute top-[350px] text-center w-full text-xl font-bold warning glow-text'>For Better Experiences, Please Allow Fullscreen</div>

     
      <ComputersCanvas />
      
      

      <div className='absolute xs:bottom-6 bottom-20 w-full justify-center items-center hidden toggle'>
        <a href="#about" className='z-10 items-center flex flex-col'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex
          justify-center items-start p-2'>
            <motion.div animate={{y: [0, 24, 0]}} 
            transition={{duration: 1.5, repeat: Infinity, repeatType: 'loop'}}
            className='w-3 h-3 rounded-full bg-secondary mb-1'/>
          </div>
          <p className='mt-2 text-secondary'>click to scroll down</p>
        </a>

      </div>
    </section>
  )
}

export default Hero