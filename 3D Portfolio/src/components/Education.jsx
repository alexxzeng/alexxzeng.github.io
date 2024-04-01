import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles'
import { educations } from '../constants'
import { SectionWrapper } from '../hoc'
import { textVariant } from "../utils/motion";

const EducationCard = ({ education, num }) => (
  <VerticalTimelineElement
    contentStyle={{ background: '#1d1836', color: '#FFF', }}
    contentArrowStyle={{ borderRight: '7px solid #232631'}}
    date={education.date}
    dateClassName="date"
    iconStyle={{ background: education.iconBg}}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img src={education.icon} alt="" className={`${num == 1 ? 'mt-1' : 'mt-0'} w-[80%] h-[80%] object-contain`}/>
      </div>
    }>

      <div>
        <div className="flex md:hidden text-secondary pro:text-sm text-xs mb-2 justify-between">
          <div>{education.date}</div>
          <div>GPA: {education.gpa}</div>
        </div>
        <div className="flex justify-between">
          <h3 className='text-white xl:text-[24px] md:text-[22px] xs:text-[20px] pro:text-[14px] 
          samsung:text-[15px] text-[13px] font-bold'>{education.school}</h3>
          <h3 className='hidden md:flex edu:hidden text-white text-[20px] font-bold'>{education.date}</h3>
        </div>
        <div className='text-secondary edu:text-[15px] xl:text-[16px] 2xl:text-[17px] sm:text-[17px] xs:text-[16px] 
        samsung:text-[14px] pro:text-[13px] text-[12px] xs:font-bold font-semibold flex justify-between mb-6'>
          <h5>{education.title}</h5>
          <h5 className="hidden md:flex">{education.gpa} GPA</h5>
        </div>

        {education.specialist ? 
        <div className="font-semibold">{education.specialist} Specialist &nbsp; | &nbsp; {education.minor} Minor</div> 
        : <></>}
        {education.focus ? 
        <div className="ml-6 mb-6 text-secondary">• {education.focus} Stream</div> 
        : <></>}
        {(education.awards) ?
          <div className="flex flex-col gap-0">
            <span className="text-white font-semibold">Awards:</span>
            {education.awards.map((award, index) => (
            <div key={index} className='ml-6'>
              <span className="text-secondary text-[15px] m-0">• {award}</span> 
            </div>))}
          </div>
          : <></>}

        <div className="flex flex-col gap-0 mt-4">
          <span className="text-white font-semibold">Extracurriculars:</span>
          {education.extracurriculars.map((club, index) => {
            return (
            <div key={index} className='ml-6'>
              <span className="text-secondary text-[15px] m-0">• {club}</span> 
            </div>)
          })}
        </div>
      </div>
      
  </VerticalTimelineElement>)


const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="ml-[3vw]">
        <p className={styles.sectionSubText}>My learning journey</p>
        <h2 className={styles.sectionHeadText}><span className="text-[#915eff] glow-text">$ cat</span> &nbsp;Education</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {educations.map((education, index) => (
            <EducationCard key={index} education={education} num={index}/>
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Education, 'education')