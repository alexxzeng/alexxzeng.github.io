import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { languages, frameworks, tools } from "../constants"
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from '../styles'
import { useEffect, useState } from "react";
import { PacmanLoader } from "react-spinners";

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
        <p className={styles.sectionSubText}>Some Cool Things I Know</p>
        <h2 className={styles.sectionHeadText}><span className="text-[#915eff] glow-text">$ ls</span> Technical Skills</h2>
      </motion.div>

      <div className="flex flex-col justify-start items-center mt-16 min-h-[470px]">
        <h3 className="font-semibold text-secondary italic text-xl">"Learn continually. There’s always ‘one more thing’ to learn!" &nbsp; &nbsp;  - Steve Jobs</h3>
        <div className="grid grid-cols-3 gap-20 mt-20 text-secondary text-xl font-semibold">
            <button className={`${selector === 0 ? 'text-white font-bold' : 'hover:text-[#cdcdcd]'} flex flex-col 
            justify-center items-center group gap-[2px] w-fit`} 
              onClick={() => {setSelector(0)}}>
              Programming Languages
              <div className={`${selector === 0 ? 'w-[105%]' : 'w-0'}
                h-1 violet-gradient group-hover:w-[105%] duration-[600ms]`}/>
            </button>
            <button className={`${selector === 1 ? 'text-white font-bold' : 'hover:text-[#cdcdcd]'} flex flex-col 
            justify-center items-center group gap-[2px] w-fit`} 
              onClick={() => {setSelector(1);}}>
              Libraries/Frameworks
              <div className={`${selector === 1 ? 'w-[105%]' : 'w-0'}
                h-1 violet-gradient group-hover:w-[105%] duration-[600ms]`}/>
            </button>
            <button className={`${selector === 2 ? 'text-white font-bold' : 'hover:text-[#cdcdcd]'} flex flex-col 
            justify-center items-center group gap-[2px] w-fit`} 
              onClick={() => setSelector(2)}>
              Tools/Databases
              <div className={`${selector === 2 ? 'w-[105%]' : 'w-0'}
                h-1 violet-gradient group-hover:w-[105%] duration-[600ms]`}/>
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
                <div className="flex items-center justify-center text-secondary font-semibold text-[18px]">{selector.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "")