import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles'
import { educations } from '../constants'
import { SectionWrapper } from '../hoc'
import { textVariant } from "../utils/motion";
import 'react-vertical-timeline-component/style.min.css';


const EducationCard = ({ education, num }) => (
  <VerticalTimelineElement
    contentStyle={{ background: '#1d1836', color: '#FFF', borderRadius: '10px', padding: '20px 14px', 
                    boxShadow: '0px 5px 20px #6b21a8', border: '1px solid #6b21a8'}}
    contentArrowStyle={{ borderRight: '7px solid #6b21a8'}}
    date={education.date}
    dateClassName="date"
    className="-mx-[14px] sm:-mx-0 "
    iconStyle={{ background: education.iconBg }}
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
        <div className="font-semibold xs:text-[16px] text-[15px]">{education.specialist} Specialist &nbsp; | &nbsp; {education.minor} Minor</div> 
        : <></>}
        {education.focus ? 
        <div className="sm:ml-6 xs:ml-2 ml-1 xs:text-[15px] sm:text-[16px] text-[13px] mb-6 text-secondary">• {education.focus} Stream</div> 
        : <></>}
        {(education.awards) ?
          <div className="flex flex-col gap-0">
            <span className="text-white font-semibold xs:text-[16px] text-[15px]">Awards:</span>
            {education.awards.map((award, index) => (
            <div key={index}>
              <span className="sm:ml-6 xs:ml-2 ml-1 xs:text-[14px] sm:text-[16px] text-[13px] mb-6 text-secondary">• {award}</span> 
            </div>))}
          </div>
          : <></>}

        <div className="flex flex-col gap-0 mt-4">
          <span className="text-white font-semibold xs:text-[16px] text-[15px]">Extracurriculars:</span>
          {education.extracurriculars.map((club, index) => {
            return (
            <div key={index}>
              <span className="sm:ml-6 xs:ml-2 ml-1 xs:text-[14px] sm:text-[16px] text-[13px] mb-6 text-secondary">• {club}</span> 
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
        <h2 className={styles.sectionHeadText}><span className="text-[#915eff] glow-text">$ echo</span> &nbsp;Education</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor="#232631">
          {educations.map((education, index) => (
            <EducationCard key={index} education={education} num={index}/>
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Education, 'education')