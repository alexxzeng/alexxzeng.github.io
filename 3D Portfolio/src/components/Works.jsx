import React from 'react'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects, coursework } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { styles } from '../styles'
import { motion } from 'framer-motion'
import { Tilt } from 'react-tilt'


const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <Tilt>
      <motion.div variants={fadeIn("up", "Spring", index * 0.5, 0.75)} className='flex justify-center items-center'>
        <div className='green-pink-gradient p-[1px] sm:w-fit rounded-2xl' >
          <div className='relative w-full max-w-[600px] h-fit bg-tertiary p-5 lg:px-5 sm:px-10 px-5 rounded-2xl shadow-xl shadow-purple-800 flex
              flex-col items-center gap-2'>
              <h1 className='font-semibold text-lg mb-1'>{name}</h1>
              <div className='aspect-w-2 aspect-h-1'>
                <img src={image} alt={name} className='sm:h-[200px] sm:w-[400px] samsung:h-[180px] samsung:w-[360px] h-[150px] w-[300px] rounded-md'/>
              </div>
              <p className='text-secondary ml-2 mt-2'>{description}</p>
              <div className='mt-4 flex flex-wrap gap-2'>
                {tags.map((tag) => {
                  return (
                    <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                      #{tag.name}
                    </p>
                  )
                })}
              </div>
          </div>
        </div>
        
      </motion.div>
    </Tilt>
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
        <motion.p variants={fadeIn(", ", 0.1, 0.8)}
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

      <div className='flex justify-center items-center'>
        <div className='mt-16 grid lg:grid-cols-2 lg:grid-rows-2 grid-col-1 gap-11 justify-center sm:px-6 max-w-5xl'>
          {projects.map((project, index) => {
            return (
              <ProjectCard key={`project-${index}`} index={index} {...project}/>
            )
          })}
        </div>
      </div>
      

      <motion.div variants={fadeIn(", ", 3, 2)} className='flex items-center justify-center mt-16'>
        <div className='max-w-6xl w-[62rem]'>
          <h2 className='text-secondary font-medium text-[40px] text-center'>Coursework Honourable Mentions</h2>
          <div className='mt-6 gap-9 flex flex-col'>
            {coursework.map(((cw, index) => 
              <div className='bg-tertiary rounded-xl border-[2px] border-[#6b21a8]'
               style={{boxShadow: '0px 5px 10px #6b21a8',}} key={index}>
                <div className='hover:border-[#6b21a8] border-[2px] border-transparent p-2 px-4 pb-4 rounded-lg'>
                   <h1 className='font-semibold text-xl mb-2'>{cw.title}</h1>
                    <ul className='flex flex-col gap-3'>
                      {cw.points.map((point, index) => 
                        <li className='text-secondary ml-4' key={index}>
                          • {point}
                        </li>
                      )}
                    </ul>
                </div>
              </div>
          ))}
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default SectionWrapper(Works, 'projects')