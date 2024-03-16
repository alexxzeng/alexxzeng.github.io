import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from '../styles'

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="ml-[3vw]">
        <p className={styles.sectionSubText}>Some Cool Things I Know</p>
        <h2 className={styles.sectionHeadText}>Technical Skills</h2>
      </motion.div>

      <div className="flex flex-col justify-center items-center mt-16">
        <h3 className="font-semibold text-secondary italic text-xl">"Learn continually. There’s always ‘one more thing’ to learn!" &nbsp; &nbsp;  - Steve Jobs</h3>
        <div className="flex justify-center mt-14">
          <div className="flex flex-row flex-wrap justify-center gap-12 max-w-7xl items-center">
            {technologies.map((technology) => (
              <div className="w-28 h-28" key={technology.name}>
                <BallCanvas icon={technology.icon}></BallCanvas>
                <div className="flex items-center justify-center text-secondary font-semibold text-[18px]">{technology.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "")