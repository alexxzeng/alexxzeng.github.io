import React from 'react'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects, coursework } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { styles } from '../styles'
import { motion } from 'framer-motion'

const Coursework = () => {
  return (
    <>
        <motion.div variants={fadeIn(", ", 0, 0, 1)} className='flex items-center justify-center -mt-10'>
            <div className='max-w-[62rem]'>
            <h2 className='text-secondary font-semibold lg:text-[40px] md:text-[36px] sm:text-[30px] xs:text-[26px]  
            text-[20px] -mx-2 text-center'>Coursework Honourable Mentions</h2>
            <div className='mt-6 gap-9 flex flex-col'>
                {coursework.map(((cw, index) => 
                <div className='bg-tertiary rounded-xl border-[2px] border-[#6b21a8]'
                style={{boxShadow: '0px 5px 10px #6b21a8',}} key={index}>
                    <div className='hover:border-[#6b21a8] border-[2px] border-transparent p-2 px-4 pb-4 rounded-lg'>
                    <h1 className='font-semibold xs:text-xl mb-2 text-[16px]'>{cw.title}</h1>
                        <ul className='flex flex-col gap-3 lg:gap-1'>
                        {cw.points.map((point, index) => 
                            <li className='text-secondary ml-4 text-[14px] xs:text-[16px]' key={index}>
                            • {point}
                            </li>
                        )}
                        </ul>
                    </div>
                </div>
            ))}
            </div>
            </div>
        </motion.div>
      </>
  )
}

export default SectionWrapper(Coursework, 'coursework')