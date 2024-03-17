import React from 'react'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { styles } from '../styles'
import { motion } from 'framer-motion'

const ProjectCard = (props) => {

}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Some Awesome Things I Built</p>
        <p className={styles.sectionHeadText}>Notable Projects</p>
      </motion.div>

      <div className='w-full flex'>
        <motion.p variants={fadeIn(", ", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
            description
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => {
          return (
            <ProjectCard key={`project-${index}`} {...project}/>
          )
        })}
      </div>
    </>
  )
}

export default SectionWrapper(Works, 'projects')