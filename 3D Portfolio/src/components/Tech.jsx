import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { languages, frameworks, tools } from "../constants"
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from '../styles'
import { useEffect, useState } from "react";
import { PacmanLoader } from "react-spinners";
import { work } from "../constants";

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
        <p className={styles.sectionSubText}>My professional journey</p>
        <h2 className={styles.sectionHeadText}>Experience</h2>
      </motion.div>


      <div className="flex w-full justify-around">

        <div className="flex flex-col justify-start items-start min-h-[470px] w-fit">
          <div className="flex text-base xs:text-lg sm:text-sm gap-4 sm:gap-6 lg:gap-8 mt-16 text-secondary md:text-sm font-semibold items-center justify-center">
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
          <div className="flex justify-start mt-14">
            <div className="flex flex-row flex-wrap justify-start gap-12 w-[40rem] items-center">
              {loading ? 
              <div className="text-2xl text-secondary font-semibold mt-8 w-full flex flex-col items-center justify-center">
                <h1 className="mb-8 mx-auto">Loading...</h1>
                <PacmanLoader color="#915eff" size={40} loading={loading} speedMultiplier={1.2} className="mx-auto"/>
              </div> 
              : categories[selector].map((selector) => (
                <div className="w-28 h-28" key={selector.name}>
                  <BallCanvas icon={selector.icon}></BallCanvas>
                  <div className="flex items-center justify-center text-center text-secondary font-semibold text-[18px]">{selector.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-tertiary rounded-xl w-[560px] p-10 flex flex-col gap-10 h-fit">

              {work.map((work, index) => (
                <div key={index} className="flex gap-4">

                  <div className="flex w-full items-center gap-4"> 

                    <div className="flex justify-between items-center p-4 bg-primary rounded-xl aspect-w-1 aspect-h-1">
                      <img src={work.icon} alt="" className="h-12 w-12 rounded-xl"/>
                    </div>
                    
                    <div className="grow">
                      <h1 className="text-white text-lg font-semibold">{work.company}</h1>
                      
                      <div className="flex justify-between">
                        <h1 className="text-secondary text-sm font-semibold">{work.position}</h1>
                        <h1 className="text-secondary text-sm font-semibold">{work.date}</h1>   
                      </div>
                    </div>

                  </div>
                 
                </div>
              ))}
        </div>
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "")