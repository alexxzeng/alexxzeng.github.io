import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles'
import { educations } from '../constants'
import { SectionWrapper } from '../hoc'
import { textVariant } from "../utils/motion";

const EducationCard = ({ education }) => (
  <VerticalTimelineElement
    contentStyle={{ background: '#1d1836', color: '#FFF'}}
    contentArrowStyle={{ borderRight: '7px solid #232631'}}
    date={education.date}
    dateClassName={date}
    iconStyle={{ background: education.iconBg}}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img src={education.icon} alt="" className="w-[80%] h-[80%] object-contain"/>
      </div>
    }>

      <div>
        <h3 className='text-white text-[24px] font-bold'>{education.school}</h3>
        <div className='text-secondary text-[18px] font-bold flex justify-between min'>
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
      <motion.div variants={textVariant()} >
        <p className={styles.sectionSubText}>My learning journey</p>
        <h2 className={styles.sectionHeadText}>Education</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {educations.map((education, index) => (
            <EducationCard key={index} education={education} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Education, 'education')