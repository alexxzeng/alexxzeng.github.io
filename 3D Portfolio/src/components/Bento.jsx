import React from 'react'
import { styles } from '../styles';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc'
import { BentoGrid } from "react-bento";

const containterStyle = `!bg-tertiary rounded-lg w-full h-full flex items-center 
                        justify-center p-4 shadow-[0_8px_8px_-3px] shadow-purple-900
                        hover:!scale-[103%] transition`;

const bentoItems = [
  {
    id: 1,
    title: "Item 3",
    color: "bg-tertiary",
    element: (
        <motion.div 
            variants={fadeIn('right', 'spring', 0.5, 0.1)} 
            className={containterStyle}>
            placeholder
        </motion.div>
    ),
    width: 1,
    height: 2,
  },
  {
    id: 2,
    color: "bg-tertiary",
    title: "Item 4",
    element: (
        <motion.div 
            variants={fadeIn('right', 'spring', 0.8, 0.1)}
            className={containterStyle}>
            placeholder
        </motion.div>
    ),
    width: 1,
    height: 1,
  },
  {
    id: 3,
    color: "bg-tertiary",
    title: "Item 4",
    element: (
        <motion.div 
            variants={fadeIn('right', 'spring', 1.2, 0.1)} 
            className={containterStyle}>
            placeholder
        </motion.div>
    ),
    width: 1,
    height: 1,
  },
  {
    id: 5,
    color: "bg-tertiary",
    title: "Item 4",
    element: (
        <motion.div 
            variants={fadeIn('left', 'spring', 1.9, 0.1)} 
            className={containterStyle}>
            placeholder
        </motion.div>
    ),
    width: 2,
    height: 3,
  },
  {
    id: 6,
    color: "bg-tertiary",
    title: "Item 4",
    element: (
        <motion.div 
            variants={fadeIn('right', 'spring', 1.4, 0.1)} 
            className={containterStyle}>
            placeholder
        </motion.div>
    ),
    width: 2,
    height: 1,
  },
  {
    id: 7,
    color: "bg-tertiary",
    title: "Item 4",
    element: (
        <motion.div 
            variants={fadeIn('up', 'spring', 1.7, 0.1)} 
            className={containterStyle}>
            placeholder
        </motion.div>
    ),
    width: 3,
    height: 1,
  }
];


const Bento = () => {
  return (
    <>
        <motion.div variants={textVariant()} className="ml-[3vw]">
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>A Little About Me</h2>
        </motion.div>
        
        <div className='max-w-[1260px] 2xl:max-w-[1680px] w-full mx-auto'>
            <BentoGrid
                items={bentoItems}
                gridCols={5}
                rowHeight={200}
                classNames={{
                    container: "my-custom-container-class",
                    elementContainer: "no-bento-style",
                }}
            />
        </div>
    </>
  )
}

export default SectionWrapper(Bento, "bento")