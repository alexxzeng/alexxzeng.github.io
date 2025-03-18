import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'
import Typewriter from 'typewriter-effect';
import myImage from '../assets/me.jpg'
import { Tilt } from 'react-tilt';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faCode, faFile } from '@fortawesome/free-solid-svg-icons'
import {me} from '../assets/'

const Hero = () => {

  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className='absolute bottom-0 w-full'>
        <video autoPlay muted loop id="myVideo" className='mx-auto'>
          <source src={me} type="video/mp4"/>
        </video>
      </div>
      
    </section>
  )
}

export default Hero