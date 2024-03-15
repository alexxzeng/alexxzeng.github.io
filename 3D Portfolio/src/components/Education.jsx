import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles'
import { educations } from '../constants'
import { SectionWrapper } from '../hoc'
import { textVariant } from "../utils/motion";

const EducationCard = ({ education, num }) => (
  <VerticalTimelineElement
    contentStyle={{ background: '#1d1836', color: '#FFF'}}
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
        <div className="flex justify-between">
          <h3 className='text-white xl:text-[24px] lg:text-[22px] text-[24px] font-bold'>{education.school}</h3>
          <h3 className='date2 text-white text-[20px] font-bold'>{education.date}</h3>
        </div>
        <div className='text-secondary 2xl:text-[18px] lg:text-[16px] text-[18px] font-bold flex justify-between min'>
          <h5>{education.title}</h5>
          <h5>{education.gpa} GPA</h5>
        </div>
        {education.points.map((point, index) => (
          <div key={index}>
            <p>-{point}</p>
          </div>
        ))}
      </div>
      
  </VerticalTimelineElement>)


const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="ml-[3vw]">
        <p className={styles.sectionSubText}>My learning journey</p>
        <h2 className={styles.sectionHeadText}>Education</h2>
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