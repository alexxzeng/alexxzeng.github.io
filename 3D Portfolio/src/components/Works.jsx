import React, {useState, useEffect} from 'react'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant, staggerContainer } from '../utils/motion'
import { styles } from '../styles'
import { motion } from 'framer-motion'
import { Tilt } from 'react-tilt'
import { webDev, mobileApps, machineLearning, gameDev } from '../constants'

const categories = [ webDev, mobileApps, machineLearning, gameDev ]

const ProjectCard = ({ index, name, description, tags, image, source_code_link, supervision }) => {
  return (
    <Tilt>
      <motion.div variants={fadeIn("up", "Spring", index * 0.5, 0.75)} className='flex justify-center items-center'>
<<<<<<< HEAD
        <div className=' p-[1px] sm:w-fit rounded-2xl' >
          <div className=' border-[#3e346e] relative w-full max-w-[600px] h-fit bg-tertiary p-5 lg:px-5 sm:px-10 px-5 rounded-2xl shadow-[0_8px_8px_-3px] shadow-purple-900 flex
=======
        <div className='green-pink-gradient p-[1px] sm:w-fit rounded-2xl' >
          <div className='relative w-full max-w-[600px] h-fit bg-tertiary p-5 lg:px-5 sm:px-10 px-5 rounded-2xl shadow-xl shadow-purple-800 flex
>>>>>>> origin/main
              flex-col items-center gap-2'>
              <div className='font-semibold text-base phone:text-lg mb-1 flex gap-2'>
                {name}
                <h2 className='text-secondary phone:text-sm text-xs mt-1'>{supervision && <p>Supervised by {supervision}</p>}</h2>
              </div>
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

  const [selector, setSelector] = useState(0)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, [selector])

  return (
    <>

      <motion.div variants={textVariant()} className="ml-[3vw]">
        <p className={styles.sectionSubText}>Some Awesome Things I Built</p>
<<<<<<< HEAD
        <p className={styles.sectionHeadText}>Notable Projects</p>
=======
        <p className={styles.sectionHeadText}><span className="text-[#915eff] glow-text">$ cd</span> &nbsp;Notable Projects</p>
>>>>>>> origin/main
      </motion.div>

      <div className='w-full flex justify-center'>
        <motion.p variants={fadeIn(", ", 0, 0, 0.5)}
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

<<<<<<< HEAD
      <div className="flex flex-col sm:flex-row text-base xs:text-lg sm:text-base gap-4 sm:gap-10 lg:gap-20 mt-16 text-secondary md:text-sm font-semibold items-center w-full justify-center">
            <button className={`${selector === 0 ? 'text-[#cdcdcd] bg-tertiary border-[#6a45ba] shadow-[0_2px_8px_2px] shadow-purple-900' : 'bg-tertiary border-tertiary'} flex flex-col 
            justify-center items-center group gap-[2px] w-fit rounded-xl p-1 px-2 sm:p-2 sm:px-4 border-[1px]  hover:text-[#cdcdcd] hover:scale-[102%]  trasition`} 
=======
      <div className="flex flex-col sm:flex-row text-base xs:text-lg sm:text-base gap-4 sm:gap-10 lg:gap-20 mt-16 text-secondary md:text-xl font-semibold items-center w-full justify-center">
            <button className={`${selector === 0 ? 'text-[#cdcdcd] bg-[#1d1836] border-[#915eff] shadow-md shadow-purple-800' : 'bg-tertiary border-tertiary'} flex flex-col 
            justify-center items-center group gap-[2px] w-fit rounded-xl p-1 px-2 sm:p-2 sm:px-4 border-[1px]  hover:text-[#cdcdcd] hover:scale-105 trasition`} 
>>>>>>> origin/main
              onClick={() => {setSelector(0)}}>
              <h1 className="hidden lg:block">Web Development</h1>
              <h1 className="block lg:hidden">Web Development</h1>
      
            </button>
<<<<<<< HEAD
            <button className={`${selector === 1 ? 'text-[#cdcdcd] bg-tertiary border-[#6a45ba] shadow-[0_2px_8px_2px] shadow-purple-900' : 'bg-tertiary border-tertiary'} flex flex-col 
            justify-center items-center group gap-[2px] w-fit rounded-xl p-1 px-2 sm:p-2 sm:px-4 border-[1px]  hover:text-[#cdcdcd] hover:scale-[102%]  trasition`} 
=======
            <button className={`${selector === 1 ? 'text-[#cdcdcd] bg-[#1d1836] border-[#915eff] shadow-md shadow-purple-800' : 'bg-tertiary border-tertiary'} flex flex-col 
            justify-center items-center group gap-[2px] w-fit rounded-xl p-1 px-2 sm:p-2 sm:px-4 border-[1px]  hover:text-[#cdcdcd] hover:scale-105 trasition`} 
>>>>>>> origin/main
              onClick={() => {setSelector(1);}}>
              <h1 className="hidden sm:block">Mobile Apps</h1>
              <h1 className="block sm:hidden">Mobile Apps</h1>
        
            </button>
<<<<<<< HEAD
            <button className={`${selector === 2 ? 'text-[#cdcdcd] bg-tertiary border-[#6a45ba] shadow-[0_2px_8px_2px] shadow-purple-900' : 'bg-tertiary border-tertiary'} flex flex-col 
            justify-center items-center group gap-[2px] w-fit rounded-xl p-1 px-2 sm:p-2 sm:px-4 border-[1px]  hover:text-[#cdcdcd] hover:scale-[102%]  trasition`} 
=======
            <button className={`${selector === 2 ? 'text-[#cdcdcd] bg-[#1d1836] border-[#915eff] shadow-md shadow-purple-800' : 'bg-tertiary border-tertiary'} flex flex-col 
            justify-center items-center group gap-[2px] w-fit rounded-xl p-1 px-2 sm:p-2 sm:px-4 border-[1px]  hover:text-[#cdcdcd] hover:scale-105 trasition`} 
>>>>>>> origin/main
              onClick={() => setSelector(2)}>
              <h1 className="hidden sm:block">Machine/Deep Learning</h1>
              <h1 className="block sm:hidden">Machine Learning</h1>
            </button>
<<<<<<< HEAD
            <button className={`${selector === 3 ? 'text-[#cdcdcd] bg-tertiary border-[#6a45ba] shadow-[0_2px_8px_2px] shadow-purple-900' : 'bg-tertiary border-tertiary'} flex flex-col 
            justify-center items-center group gap-[2px] w-fit rounded-xl p-1 px-2 sm:p-2 sm:px-4 border-[1px]  hover:text-[#cdcdcd] hover:scale-[102%]  trasition`} 
=======
            <button className={`${selector === 3 ? 'text-[#cdcdcd] bg-[#1d1836] border-[#915eff] shadow-md shadow-purple-800' : 'bg-tertiary border-tertiary'} flex flex-col 
            justify-center items-center group gap-[2px] w-fit rounded-xl p-1 px-2 sm:p-2 sm:px-4 border-[1px]  hover:text-[#cdcdcd] hover:scale-105 trasition`} 
>>>>>>> origin/main
              onClick={() => setSelector(3)}>
              <h1 className="hidden sm:block">Game Development</h1>
              <h1 className="block sm:hidden">Game Development</h1>
            </button>
        </div>

      <div className='flex justify-center items-center'>
        <motion.div className='mt-16 grid lg:grid-cols-2 grid-col-1 gap-11 justify-center sm:px-6 max-w-5xl'
          variants={staggerContainer()}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: true, amount: 0}}
          key={selector}>
          {categories[selector].map((project, index) => {
            if ((selector !== 0 && selector !== 1) && index > 1) return <></>
            return (
              <ProjectCard key={`project-${index}`} index={index} {...project}/>
            )
          })}
        </motion.div>
      </div>
    
    </>
  )
}

export default SectionWrapper(Works, "projects")