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
            <Tilt className='border-[1px] border-[#6b21a8] rounded-2xl bg-badge-pattern bg-cover bg-no-repeat bg-center w-[500px] h-[300px] box'>
                <div className='flex flex-col p-4'>
                    <div className='flex justify-between text-secondary'>
                        <div className='flex gap-2 items-center'>
                            <img src={certificate.image} alt={certificate.title} className='w-8 h-8 rounded-full bg-white p-[1px] border-secondary border-2'/>
                            <p>{certificate.company}</p>
                        </div>
                        <div className='mr-1'>{certificate.date}</div>
                    </div>
                    <div className='flex justify-between'>
                        <h1 className='font-semibold text-lg mt-2 ml-2'>{certificate.name}</h1>
                        <a href={certificate.link} 
                        className='h-7 w-7 rounded-full bg-secondary items-center justify-center flex hover:bg-[#dad6f3] transition'>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='text-[#151228]'/>
                        </a>
                    </div>
                    <p className='text-secondary mt-8 ml-2 w-[80%]'>{certificate.description}</p>
                </div>
            </Tilt>
        </motion.div>
    )
}

const Certificates = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center">
      <h2 className='text-secondary font-semibold lg:text-[40px] md:text-[36px] sm:text-[30px] xs:text-[26px]  
            text-[20px] -mx-2 text-center'>Professional Certificates</h2>
      </motion.div>

      <div className='flex justify-center items-center'>
        <div className='mt-16 grid lg:grid-cols-2 lg:grid-rows-2 grid-col-1 gap-11 justify-center sm:px-6 max-w-5xl'>
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