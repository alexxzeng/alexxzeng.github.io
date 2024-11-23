import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles'
import { experience } from '../constants'
import { SectionWrapper } from '../hoc'
import { textVariant } from "../utils/motion";
import 'react-vertical-timeline-component/style.min.css';


const ExperienceCard = ({ experience, num }) => (
  <VerticalTimelineElement
    contentStyle={{ background: '#1d1836', color: '#FFF', borderRadius: '10px', padding: '20px 18px', 
                    boxShadow: '0px 5px 20px #6b21a8', border: '1px solid #6b21a8'}}
    contentArrowStyle={{ borderRight: '7px solid #6b21a8'}}
    date={experience.date}
    dateClassName="date"
    className="-mx-[14px] sm:-mx-0 "
    iconStyle={{ background: '#a0a6c3' }}
    icon={
      experience.icon &&
      <div className="flex justify-center items-center w-full h-full">
        <img src={experience.icon} alt="" className={`${num == 1 ? 'mt-1' : 'mt-0'} w-[80%] h-[80%] object-contain`}/>
      </div>
    }>

      <div>

        <div className="flex md:hidden text-secondary pro:text-sm text-xs mb-2 justify-between">
          <div>{experience.date}</div>
        </div>
        
        <div className="flex justify-between">
          <h3 className='text-white xl:text-[24px] md:text-[22px] xs:text-[20px] pro:text-[14px] 
          samsung:text-[15px] text-[13px] font-bold'>{experience.position}</h3>
          <h3 className='hidden md:flex edu:hidden text-white text-[20px] font-bold'>{experience.date}</h3>
        </div>

        <div className='text-secondary edu:text-[15px] xl:text-[16px] 2xl:text-[17px] sm:text-[17px] xs:text-[16px] 
        samsung:text-[14px] pro:text-[13px] text-[12px] xs:font-bold font-semibold flex justify-between mb-6'>
          <h5>{experience.company}</h5>
        </div>

        
        <div className="flex flex-col gap-0">
            <span className="text-white font-semibold xs:text-[16px] text-[15px]">Team:</span>
            
            <div className="flex flex-row items-center gap-1 mt-1">
                <h1 className="sm:ml-3 xs:ml-2 ml-1 xs:text-[14px] sm:text-[16px] text-[13px] mb-6 text-secondary">• {experience.team}</h1> 
            </div>
        </div>

        <div className="flex flex-col gap-0">
            <span className="text-white font-semibold xs:text-[16px] text-[15px]">Tech Stack:</span>
            
            <div className="flex flex-row items-center gap-1 mt-1">
                <h1 className="sm:ml-3 xs:ml-2 ml-1 xs:text-[14px] sm:text-[16px] text-[13px] mb-6 text-secondary">• {experience.tech}</h1> 
            </div>
        </div>

        <div className="flex flex-col gap-0">
            <span className="text-white font-semibold xs:text-[16px] text-[15px]">Roles:</span>
            
            <div className="flex flex-col items-center gap-1 mt-1">

                {experience.roles.map((role, index) => (
                    <h1 key={index} className="sm:ml-3 xs:ml-2 ml-1 xs:text-[14px] sm:text-[16px] text-[13px] mb-6 text-secondary">• {role}</h1> 
                ))}

            </div>
        </div>
        
      </div>
      
  </VerticalTimelineElement>)


const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="ml-[3vw]">
        <p className={styles.sectionSubText}>My professional work</p>
        <h2 className={styles.sectionHeadText}><span className="text-[#915eff] glow-text">$ cat</span> &nbsp;Experience</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor="#232631">
          {experience.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} num={index}/>
          ))}
        </VerticalTimeline>
      </div>

      <div className="text-center italic text-secondary mt-10 md:mt-20 sm:text-2xl text-base font-semibold">
          References Available Upon Request
      </div>
    </>
  )
}

export default SectionWrapper(Experience, 'experience')