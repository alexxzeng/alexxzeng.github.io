import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { languages, frameworks, tools } from "../constants"
import { motion } from "framer-motion";
<<<<<<< HEAD
import { styles } from '../styles'
import { useEffect, useState } from "react";
import { PacmanLoader } from "react-spinners";
import { work } from "../constants";
import { fadeIn, textVariant } from '../utils/motion';
=======
import { textVariant } from "../utils/motion";
import { styles } from '../styles'
import { useEffect, useState } from "react";
import { PacmanLoader } from "react-spinners";
>>>>>>> origin/main

const Tech = () => {

  const categories = [ languages, frameworks, tools, [] ]

  const [selector, setSelector] = useState(0)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1200)
  }, [selector])

  return (
    <>
      <motion.div variants={textVariant()} className="ml-[3vw]">
<<<<<<< HEAD
        <p className={styles.sectionSubText}>My professional journey</p>
        <h2 className={styles.sectionHeadText}>Experience</h2>
      </motion.div>


      <div className="flex w-full 2xl:px-32 items-center xl:justify-around xl:items-end xl:flex-row gap-10 sm:gap-24 xl:gap-4 flex-col-reverse xl:-mt-8 mt-6">

        <div className="flex flex-col justify-start items-start min-h-[600px] w-fit">
          <div className="flex text-base xs:text-lg sm:text-sm gap-4 sm:gap-6 lg:gap-8 mt-16 text-secondary md:text-sm font-semibold items-center justify-center w-full">
              <button className={`${selector === 0 ? 'text-[#cdcdcd] bg-tertiary border-[#6a45ba] shadow-[0_2px_8px_2px] shadow-purple-900' : 'bg-tertiary border-tertiary'} flex flex-col 
              justify-center items-center group gap-[2px] w-fit rounded-xl p-1 px-2 sm:p-2 sm:px-4 border-[1px]  hover:text-[#cdcdcd] hover:scale-[102%] trasition`} 
                onClick={() => {setSelector(0)}}>
                <h1 className="hidden lg:block">Programming Languages</h1>
                <h1 className="block lg:hidden">Languages</h1>
        
              </button>
              <button className={`${selector === 1 ? 'text-[#cdcdcd] bg-tertiary border-[#6a45ba] shadow-[0_2px_8px_2px] shadow-purple-900' : 'bg-tertiary border-tertiary'} flex flex-col 
              justify-center items-center group gap-[2px] w-fit rounded-xl p-1 px-2 sm:p-2 sm:px-4 border-[1px]  hover:text-[#cdcdcd] hover:scale-[102%]  trasition`} 
                onClick={() => {setSelector(1);}}>
                <h1 className="hidden sm:block">Libraries/Frameworks</h1>
                <h1 className="block sm:hidden">Frameworks</h1>
          
              </button>
              <button className={`${selector === 2 ? 'text-[#cdcdcd] bg-tertiary border-[#6a45ba] shadow-[0_2px_8px_2px] shadow-purple-900' : 'bg-tertiary border-tertiary'} flex flex-col 
              justify-center items-center group gap-[2px] w-fit rounded-xl p-1 px-2 sm:p-2 sm:px-4 border-[1px]  hover:text-[#cdcdcd] hover:scale-[102%] trasition`} 
                onClick={() => setSelector(2)}>
                <h1 className="hidden sm:block">Tools/Databases</h1>
                <h1 className="block sm:hidden">Tools</h1>
              </button>
          </div>
          <div className="flex justify-center mt-14 md:w-[40rem] w-[360px]">
            <div className="flex flex-row flex-wrap justify-center md:justify-start gap-12 items-center w-[360px] md:w-[530px]">
              {loading ? 
              <div className="text-2xl text-secondary font-semibold mt-8 w-full flex flex-col items-center justify-center">
                <h1 className="mb-8 mx-auto">Loading...</h1>
                <PacmanLoader color="#6a45ba" size={40} loading={loading} speedMultiplier={1.2} className="mx-auto"/>
              </div> 
              : categories[selector].map((selector) => (
                <div className="w-24 h-24" key={selector.name}>
                  <BallCanvas icon={selector.icon}></BallCanvas>
                  <div className="flex items-center justify-center text-center text-secondary font-semibold text-[18px]">{selector.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-tertiary rounded-xl sm:w-[560px] w-[350px] p-4 sm:p-10 flex flex-col gap-12 h-fit relative  mt-4 sm:mt-0 shadow-[0_8px_8px_-3px] shadow-purple-900">
            {work.map((work, index) => (
              <motion.div variants={fadeIn('top', 'spring', 1 + 0.5 * index, 0.75)} key={index}>
                {/* Vertical Line */}
                {/* {index !== 3 && (
                  <div className="absolute left-[38px] top-[80px] w-[2px] h-[40px] mt-1 bg-secondary"></div>
                )} */}
                <div className="flex gap-4 relative hover:scale-105 transition duration-200">
                  <div className="flex w-full items-center gap-4"> 
                    {/* Icon container with vertical line */}
                    <div className="relative flex justify-center items-center p-4 bg-primary rounded-xl aspect-w-1 aspect-h-1">
                      <img src={work.icon} alt="" className="sm:h-12 sm:w-12 h-8 w-8 rounded-xl" />
                    </div>

                    <div className="grow">
                      <div className="flex justify-between items-center">
                        <h1 className="text-white sm:text-lg text-sm font-semibold">{work.company}</h1>
                        <h1 className="text-white sm:text-sm text-xs font-semibold">{work.location}</h1>   
                      </div>

                      <div className="flex justify-between sm:flex-row flex-col-reverse items-start gap-1">
                        <h1 className="text-secondary sm:text-sm text-xs font-semibold">{work.position}</h1>
                        <h1 className="text-secondary sm:text-sm text-xs font-semibold">{work.date}</h1>   
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
          ))}
=======
        <p className={styles.sectionSubText}>Some Cool Things I Know</p>
        <h2 className={styles.sectionHeadText}><span className="text-[#915eff] glow-text">$ ls</span> Technical Skills</h2>
      </motion.div>

      <div className="flex flex-col justify-start items-center mt-16 min-h-[470px]">
        <h3 className="font-semibold text-secondary italic text-xl">"Learn continually. There’s always ‘one more thing’ to learn!" &nbsp; &nbsp;  - Steve Jobs</h3>
        <div className="flex text-base xs:text-lg sm:text-base gap-8 sm:gap-10 lg:gap-20 mt-16 text-secondary md:text-xl font-semibold items-center w-full justify-center">
            <button className={`${selector === 0 ? 'text-[#cdcdcd] bg-[#1d1836] border-[#915eff] shadow-md shadow-purple-800' : 'bg-tertiary border-tertiary'} flex flex-col 
            justify-center items-center group gap-[2px] w-fit rounded-xl p-1 px-2 sm:p-2 sm:px-4 border-[1px]  hover:text-[#cdcdcd] hover:scale-105 trasition`} 
              onClick={() => {setSelector(0)}}>
              <h1 className="hidden lg:block">Programming Languages</h1>
              <h1 className="block lg:hidden">Languages</h1>
      
            </button>
            <button className={`${selector === 1 ? 'text-[#cdcdcd] bg-[#1d1836] border-[#915eff] shadow-md shadow-purple-800' : 'bg-tertiary border-tertiary'} flex flex-col 
            justify-center items-center group gap-[2px] w-fit rounded-xl p-1 px-2 sm:p-2 sm:px-4 border-[1px]  hover:text-[#cdcdcd] hover:scale-105 trasition`} 
              onClick={() => {setSelector(1);}}>
              <h1 className="hidden sm:block">Libraries/Frameworks</h1>
              <h1 className="block sm:hidden">Frameworks</h1>
        
            </button>
            <button className={`${selector === 2 ? 'text-[#cdcdcd] bg-[#1d1836] border-[#915eff] shadow-md shadow-purple-800' : 'bg-tertiary border-tertiary'} flex flex-col 
            justify-center items-center group gap-[2px] w-fit rounded-xl p-1 px-2 sm:p-2 sm:px-4 border-[1px]  hover:text-[#cdcdcd] hover:scale-105 trasition`} 
              onClick={() => setSelector(2)}>
              <h1 className="hidden sm:block">Tools/Databases</h1>
              <h1 className="block sm:hidden">Tools</h1>
            </button>
        </div>
        <div className="flex justify-center mt-14">
          <div className="flex flex-row flex-wrap justify-center gap-12 max-w-[66rem] items-center">
            {loading ? 
            <div className="text-2xl text-secondary font-semibold mt-8">
              <h1 className="mb-8">Loading...</h1>
              <PacmanLoader color="#915eff" size={40} loading={loading} speedMultiplier={1.2}/>
            </div> 
            : categories[selector].map((selector) => (
              <div className="w-28 h-28" key={selector.name}>
                <BallCanvas icon={selector.icon}></BallCanvas>
                <div className="flex items-center justify-center text-center text-secondary font-semibold text-[18px]">{selector.name}</div>
              </div>
            ))}
          </div>
>>>>>>> origin/main
        </div>
      </div>
    </>
  )
}

<<<<<<< HEAD
export default SectionWrapper(Tech, "experience")
=======
export default SectionWrapper(Tech, "")
>>>>>>> origin/main
