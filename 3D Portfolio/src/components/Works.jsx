import React from 'react'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { styles } from '../styles'
import { motion } from 'framer-motion'
import { Tilt } from 'react-tilt'


const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "Spring", index * 0.5, 0.75)}>
      
      <div className='relative w-full h-[230px] bg-tertiary p-5 rounded-2xl sm:w-[360px]'>

      </div>
      
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="ml-[3vw]">
        <p className={styles.sectionSubText}>Some Awesome Things I Built</p>
        <p className={styles.sectionHeadText}><span className="text-[#915eff] glow-text">$ cd</span> &nbsp;Notable Projects</p>
      </motion.div>

      <div className='w-full flex justify-center'>
        <motion.p variants={fadeIn(", ", 0.1, 1)}
          className='mt-10 text-secondary text-[17px] sm:max-w-4xl w-[80vw] leading-[30px]'>
            Here are some of my favourite cool projects I have worked on! I am constantly
            expanding my knowledge in the field of Software Engineering, which allows 
            me to pick up new skills to progressively engineer more and more innovative
            and industry standard software. Fun fact, I used acquired experience in&nbsp;
            <b><i>React, Three.js,</i></b> and <b><i>Tailwind</i></b>, to build this new version of my portfolio website! Check
            out this&nbsp;
            <a href="https://www.youtube.com/watch?v=rfyVJeUFvXk" 
              className='font-semibold hover:underline text-white-100' target='blank'>old version</a>
            &nbsp;of my website I built using pure HTML, CSS, and JavaScript less than a year apart.
        </motion.p>
      </div>

      <div className='mt-16 flex flex-wrap gap-7 justify-center'>
        {projects.map((project, index) => {
          return (
            <ProjectCard key={`project-${index}`} index={index} {...project}/>
          )
        })}
      </div>

      <div className='flex items-center justify-center mt-16'>
        <h2 className='text-secondary font-medium text-[40px]'>Coursework Honourable Mentions</h2>
      </div>
    </>
  )
}

export default SectionWrapper(Works, 'projects')