import React from 'react'
import { motion } from 'framer-motion'
import { certificates } from '../constants'
import { textVariant, fadeIn } from '../utils/motion'
import SectionWrapper from '../hoc/SectionWrapper'
import { Tilt } from 'react-tilt'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CertificateCard = ({certificate, index}) => {
    return (
        <motion.div variants={fadeIn("up", "Spring", index * 0.5, 0.75)} className='flex justify-center items-center'>
            <Tilt className='border-[1px] border-[#6b21a8] rounded-2xl bg-badge-pattern bg-cover bg-no-repeat bg-center sm:w-[500px] sm:h-[300px] w-[320px] h-[200px] box'>
                <div className='flex flex-col p-4'>
                    <div className='flex justify-between text-secondary text-[12px] sm:text-base items-center'>
                        <div className='flex gap-2 items-center'>
                            <img src={certificate.image} alt={certificate.title} className='sm:w-8 sm:h-8 w-6 h-6 rounded-full bg-white p-[1px] border-secondary border-2'/>
                            <p>{certificate.company}</p>
                        </div>
                        <div className='s,:mr-1'>{certificate.date}</div>
                    </div>
                    <div className='flex justify-between items-center'>
                        <h1 className='font-semibold sm:text-lg mt-2 sm:ml-2 text-sm'>{certificate.name}</h1>
                        <a href={certificate.link} target='blank'
                        className='sm:h-7 sm:w-7 w-5 h-5 rounded-full bg-secondary items-center justify-center flex hover:bg-[#dad6f3] transition'>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='text-[#151228] text-sm sm:text-base'/>
                        </a>
                    </div>
                    <p className='text-secondary sm:mt-8 sm:ml-2 mt-4 w-[78%] text-[11px] sm:text-base'>{certificate.description}</p>
                </div>
            </Tilt>
        </motion.div>
    )
}

const Certificates = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center -mt-16">
      <h2 className='text-secondary font-semibold lg:text-[40px] md:text-[36px] sm:text-[30px] xs:text-[26px]  
            text-[20px] -mx-2 text-center'>Professional Certificates</h2>
      </motion.div>

      <div className='flex justify-center items-center'>
        <div className='sm:mt-16 mt-8 grid edu:grid-cols-2 edu:grid-rows-2 grid-col-1 gap-11 justify-center sm:px-6 max-w-5xl'>
          {certificates.map((certificate, index) => {
            return (
              <CertificateCard key={index} certificate={certificate} index={index}/>
            )
          })}
        </div>
      </div>
    
    </>
  )
}

export default SectionWrapper(Certificates, 'certificates')