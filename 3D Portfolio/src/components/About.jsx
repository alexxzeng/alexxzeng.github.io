import React, { useState } from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import ReactCardFlip from 'react-card-flip';
import me from '../assets/digital-me.png';

const ServiceCard = ({ index, title, icon, info }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div className='flex xl:w-fit md:w-[40%] w-full items-center justify-center md:p-5 xl:p-0 p-0'>
      <Tilt className='2xl:w-[250px] xs:w-[230px] sm:w-[300px] w-[90%] lg:w-[300px] xl:w-[230px]' >
        <motion.div variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}>
          <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
            <div className='w-full border-2 border-[#3e346e] p-[1px] rounded-[23px] cursor-pointer'
              options={{max: 45, scale: 1, speed: 450}} onClick={() => setIsFlipped(!isFlipped)}
              >
              <div className='bg-tertiary rounded-[20px] py-5 px-12 2xl:min-h-[260px] min-h-[240px] flex 
                justify-evenly items-center flex-col'>
                  <img src={icon} alt={title} className='w-16 h-16 object-contain' />
                  <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
              </div>
            </div>

            <div className='w-full border-2 border-[#3e346e] p-[1px] rounded-[23px] cursor-pointer'
              options={{max: 45, scale: 1, speed: 450}} onClick={() => setIsFlipped(!isFlipped)}
              >
              <div className='bg-tertiary rounded-[20px] py-5 px-8 2xl:min-h-[260px] min-h-[240px] flex 
                justify-evenly items-center flex-col'>
                <h3 className='text-secondary text-[16px] font-normal text-center leading-7'>{info}</h3>
              </div>
            </div>
          </ReactCardFlip> 
        </motion.div>
      </Tilt>
    </div>
  )
}

const About = () => {
  return (
    <>
      <div className='flex items-start justify-around'>
        {/* <img src={me} alt="me" className='h-[680px] hidden mac:block big:mr-0 mac:mr-8 hover:scale-105 transition'/> */}
        <div>
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>A Little About Me</h2>
          </motion.div>
          <motion.p variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-secondary sm:text-[17px] text-[14px] 2xl:max-w-7xl max-w-6xl sm:leading-[30px] leading-[26px]'>
            I'm currently a 3rd year student specializing in the <i><b>Software Engineering</b></i> stream 
            of <i><b>Computer Science</b></i> and minoring in <i><b>Statistics</b></i> at the <i><b>University of Toronto</b></i>.
            I am fortunate to have had many opportunities to develop and enhance the analytical and logical
            thinking skills of a programmer through object-oriented languages such as <i><b>Java, Python, C++,</b></i> 
            and <i><b>JavaScript</b></i>. Using these languages and industrial development methodologies, I have built many interesting projects that range
            from <i><b>Django & MERN</b> Web Apps</i> to <i><b>Android</b> Mobile Apps</i> to <i><b>Machine Learning & Data
            Analyzing</b> Interfaces</i>. Advances in technology isn't the only thing I'm passionate about, but also
            playing the piano, watching hockey (PS... still waiting for the <i>Vancouver Canucks</i> to win the Stanley Cup), and exploring
            new places and things to do in my free time. Hope I don't seem too boring to you already yet, feel free to connect
            with me through the <i><b>Contact</b></i> section of this portfolio!
          </motion.p>

          <div className='2xl:mt-16 sm:mt-14 mt-12 flex flex-wrap gap-10 lg:gap-0 justify-around'> 
            {services.map((service, index) => (
              <ServiceCard key={service.title} index={index} {...service}/>
            ))}
          </div>
        </div>
      </div>
      
    </>
  )
}

export default SectionWrapper(About, 'about')