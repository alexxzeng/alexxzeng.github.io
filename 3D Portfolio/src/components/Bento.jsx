import React, { useState, useEffect }from 'react'
import { styles } from '../styles';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc'
import { BentoGrid } from "react-bento";
import { Tilt } from 'react-tilt';
import { uoft, toronto, vancouver, kayak, hike, bike, hat, lab } from '../assets';

const containterStyle = `!bg-tertiary rounded-lg w-full h-full flex items-center 
                        justify-center p-4 shadow-[0_8px_8px_-3px] shadow-purple-900`;

const Clock = ({ label, timeZone }) => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = new Intl.DateTimeFormat("en-CA", {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }).format(now);
      setTime(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [timeZone]);

  return (
    <div className="flex flex-col items-center gap-1">
      <h3 className="text-sm font-bold">{label}</h3>
      <p className="text-base bg-primary py-2 flex justify-center rounded-xl text-secondary font-bold w-24">{time.slice(0, -1)}</p>
    </div>
  );
};

const bentoItemsXL = [
  {
    id: 1,
    title: "Item 3",
    color: "bg-tertiary",
    element: (
        <Tilt className='w-full h-full'
            options={{max: 15, scale: 1.01, speed: 10}} >
            <motion.div 
                variants={fadeIn('right', 'spring', 0.5, 0.5)} 
                className={`${containterStyle} flex-col gap-4`}>
                <h1 className='text-base text-secondary font-medium'>Big on the Outdoors</h1>
                <div className="relative flex justify-center items-center p-4 bg-primary rounded-xl aspect-w-1 aspect-h-1">
                    <img src={hike} alt="" className="h-16 w-16 rounded-xl" />
                </div>
                <div className="relative flex justify-center items-center p-4 bg-primary rounded-xl aspect-w-1 aspect-h-1">
                    <img src={kayak} alt="" className="h-16 w-16 rounded-xl" />
                </div>
                <div className="relative flex justify-center items-center p-5 bg-primary rounded-xl aspect-w-1 aspect-h-1">
                    <img src={bike} alt="" className="h-14 w-14 rounded-xl" />
                </div>
            </motion.div>
        </Tilt>
    ),
    width: 1,
    height: 2,
  },
  {
    id: 2,
    color: "bg-tertiary",
    title: "Item 4",
    element: (
        <Tilt className='w-full h-full'
            options={{max: 15, scale: 1.01, speed: 10}} >
            <motion.div 
                variants={fadeIn('right', 'spring', 0.8, 0.5)}
                className={`${containterStyle} flex-col gap-4 -end`}>
                <img src={hat} alt="" className="h-20 w-20" />
                <h1 className='text-secondary font-medium'>Dean's List Scholar</h1>
            </motion.div>
        </Tilt>
    ),
    width: 1,
    height: 1,
  },
  {
    id: 3,
    color: "bg-tertiary",
    title: "Item 4",
    element: (
        <Tilt className='w-full h-full'
            options={{max: 15, scale: 1.01, speed: 10}} >
            <motion.div 
                variants={fadeIn('right', 'spring', 1.2, 0.5)} 
                className={`${containterStyle} flex-col gap-4 -end`}>
                <img src={lab} alt="" className="h-20 w-20" />
                <h1 className='text-secondary font-medium'>Undergrad Researcher</h1>
            </motion.div>
        </Tilt>
    ),
    width: 1,
    height: 1,
  },
  {
    id: 5,
    color: "bg-tertiary",
    title: "Item 4",
    element: (
        <Tilt className='w-full h-full'
            options={{max: 15, scale: 1.01, speed: 10}} >
            <motion.div 
                variants={fadeIn('left', 'spring', 1.9, 0.5)} 
                className={`${containterStyle}`}>
                <div className='overflow-scroll max-h-full'>
                    <p className='text-sm text-secondary p-6 leading-8'>
                        I’m currently a 4th-year student specializing in the <i><b>Software Engineering</b>
                        </i> stream of <i><b>Computer Science</b></i> and majoring in <i><b>Statistics</b></i> at the <i>
                        <b>University of Toronto</b></i>. Over the course of my internships at big tech companies such 
                        as <i><b>Amazon</b></i> and <i><b>Shopify</b></i>, I’ve had the opportunity to work
                         on a wide variety of projects that have allowed me to enhance my programming and problem-solving 
                         skills. I’ve worked with languages like <i><b>Java, Python, Ruby, </b></i> and <i><b>TypeScript</b>
                         </i> to build everything from <i><b>web apps</b></i> and <i><b>mobile apps</b></i> to <i>
                        <b>machine learning</b></i> and <i><b>data analysis</b></i> interfaces. But technology isn’t my 
                        only passion, I also love playing the <i><b>piano</b></i>, watching hockey
                         (still holding out hope for the <i><b>Vancouver Canucks</b></i> to win the Stanley Cup), and 
                        exploring new places and activities in my free time. I’m always open to connecting, so feel 
                        free to reach out through the <i><b>Contact</b></i> section of this portfolio if you want to chat!
                    </p>
                </div>
            </motion.div>
        </Tilt>
    ),
    width: 2,
    height: 3,
  },
  {
    id: 6,
    color: "bg-tertiary",
    title: "Item 4",
    element: (
        <Tilt className='w-full h-full'
            options={{max: 15, scale: 1.01, speed: 10}} >
            <motion.div 
                variants={fadeIn('right', 'spring', 1.4, 0.5)} 
                className={containterStyle}>
                <div className='flex justify-between items-center w-full gap-8 px-8'>
                    <div className="relative flex justify-center items-center p-4 bg-primary rounded-xl aspect-w-1 aspect-h-1">
                      <img src={uoft} alt="" className="h-16 w-16 rounded-xl" />
                    </div>
                    <div>
                        <h1 className='text-lg font-bold'>University of Toronto</h1>
                        <h2 className='text-secondary'>Honours Bachelor of Science</h2>
                        <h2>Computer Science | Statistics</h2>
                    </div>
                </div>
            </motion.div>
        </Tilt>
    ),
    width: 2,
    height: 1,
  },
  {
    id: 7,
    color: "bg-tertiary",
    title: "Item 4",
    element: (
        <Tilt 
            className='w-full h-full'
            options={{max: 15, scale: 1.01, speed: 10}} >
            <motion.div 
                variants={fadeIn('up', 'spring', 1.7, 0.5)} 
                className={`${containterStyle} flex flex-col !items-start !justify-start !pt-8 !pl-8`}>
                <h1 className='text-secondary font-medium'>You will catch me vibing either in</h1>
                <div className="flex gap-8 w-full justify-center my-auto">
                    <div>
                        <img src={vancouver} alt="" className='w-36' />   
                    </div>
                    <Clock label="Vancouver, BC" timeZone="America/Vancouver" />
                    or
                    <Clock label="Toronto, ON" timeZone="America/Toronto" />
                    <div>
                        <img src={toronto} alt="" className='w-36' />   
                    </div>
                </div>
            </motion.div>
        </Tilt>
    ),
    width: 3,
    height: 1,
  }
];

const bentoItems = [
  {
    id: 1,
    title: "Item 3",
    color: "bg-tertiary",
    element: (
        <Tilt className='w-full h-full'
            options={{max: 15, scale: 1.01, speed: 10}} >
            <motion.div 
                variants={fadeIn('right', 'spring', 0.5, 0.5)} 
                className={containterStyle}>
                placeholder
            </motion.div>
        </Tilt>
    ),
    width: 1,
    height: 2,
  },
  {
    id: 2,
    color: "bg-tertiary",
    title: "Item 4",
    element: (
        <Tilt className='w-full h-full'
            options={{max: 15, scale: 1.01, speed: 10}} >
            <motion.div 
                variants={fadeIn('right', 'spring', 0.8, 0.5)}
                className={containterStyle}>
                placeholder
            </motion.div>
        </Tilt>
    ),
    width: 1,
    height: 1,
  },
  {
    id: 3,
    color: "bg-tertiary",
    title: "Item 4",
    element: (
        <Tilt className='w-full h-full'
            options={{max: 15, scale: 1.01, speed: 10}} >
            <motion.div 
                variants={fadeIn('right', 'spring', 1.2, 0.5)} 
                className={containterStyle}>
                placeholder
            </motion.div>
        </Tilt>
    ),
    width: 1,
    height: 1,
  },
  {
    id: 6,
    color: "bg-tertiary",
    title: "Item 4",
    element: (
        <Tilt className='w-full h-full'
            options={{max: 15, scale: 1.01, speed: 10}} >
            <motion.div 
                variants={fadeIn('right', 'spring', 1.4, 0.5)} 
                className={containterStyle}>
                <div className='flex justify-between items-center w-full gap-8 px-8'>
                    <div className="relative flex justify-center items-center p-4 bg-primary rounded-xl aspect-w-1 aspect-h-1">
                      <img src={uoft} alt="" className="h-16 w-16 rounded-xl" />
                    </div>
                    <div>
                        <h1 className='text-lg font-bold'>University of Toronto</h1>
                        <h2 className='text-secondary'>Honours Bachelor of Science</h2>
                        <h2>Computer Science | Statistics</h2>
                    </div>
                </div>
            </motion.div>
        </Tilt>
    ),
    width: 2,
    height: 1,
  },
  {
    id: 7,
    color: "bg-tertiary",
    title: "Item 4",
    element: (
        <Tilt 
            className='w-full h-full'
            options={{max: 15, scale: 1.01, speed: 10}} >
            <motion.div 
                variants={fadeIn('up', 'spring', 1.7, 0.5)} 
                className={`${containterStyle} flex flex-col !items-start !justify-start !pt-8 !pl-8`}>
                <h1 className='text-secondary font-medium'>You will catch me vibing either in</h1>
                <div className="flex gap-8 w-full justify-center my-auto">
                    <div>
                        <img src={vancouver} alt="" className='w-36' />   
                    </div>
                    <Clock label="Vancouver, BC" timeZone="America/Vancouver" />
                    or
                    <Clock label="Toronto, ON" timeZone="America/Toronto" />
                    <div>
                        <img src={toronto} alt="" className='w-36' />   
                    </div>
                </div>
            </motion.div>
        </Tilt>
    ),
    width: 3,
    height: 1,
  }
];

const bentoItemsSM = [
  {
    id: 1,
    title: "Item 3",
    color: "bg-tertiary",
    element: (
        <Tilt className='w-full h-full'
            options={{max: 15, scale: 1.01, speed: 10}} >
            <motion.div 
                variants={fadeIn('right', 'spring', 0.5, 0.5)} 
                className={containterStyle}>
                placeholder
            </motion.div>
        </Tilt>
    ),
    width: 1,
    height: 2,
  },
  {
    id: 2,
    color: "bg-tertiary",
    title: "Item 4",
    element: (
        <Tilt className='w-full h-full'
            options={{max: 15, scale: 1.01, speed: 10}} >
            <motion.div 
                variants={fadeIn('right', 'spring', 0.8, 0.5)}
                className={containterStyle}>
                placeholder
            </motion.div>
        </Tilt>
    ),
    width: 1,
    height: 1,
  },
  {
    id: 3,
    color: "bg-tertiary",
    title: "Item 4",
    element: (
        <Tilt className='w-full h-full'
            options={{max: 15, scale: 1.01, speed: 10}} >
            <motion.div 
                variants={fadeIn('right', 'spring', 1.2, 0.5)} 
                className={containterStyle}>
                placeholder
            </motion.div>
        </Tilt>
    ),
    width: 1,
    height: 1,
  },
  {
    id: 6,
    color: "bg-tertiary",
    title: "Item 4",
    element: (
        <Tilt className='w-full h-full'
            options={{max: 15, scale: 1.01, speed: 10}} >
            <motion.div 
                variants={fadeIn('right', 'spring', 1.4, 0.5)} 
                className={containterStyle}>
                <div className='flex justify-between items-center w-full gap-5'>
                    <div className="relative flex justify-center items-center p-4 bg-primary rounded-xl aspect-w-1 aspect-h-1">
                      <img src={uoft} alt="" className="xs:h-16 xs:w-16 h-10 w-10 rounded-xl" />
                    </div>
                    <div>
                        <h1 className='xs:text-lg font-bold phone:text-base text-sm'>University of Toronto</h1>
                        <h2 className='text-secondary phone:text-sm sm:text-base text-xs'>Honours Bachelor of Science</h2>
                        <h2 className='phone:text-sm sm:text-base text-xs'>Computer Science | Statistics</h2>
                    </div>
                </div>
            </motion.div>
        </Tilt>
    ),
    width: 2,
    height: 1,
  },
  {
    id: 7,
    color: "bg-tertiary",
    title: "Item 4",
    element: (
        <Tilt 
            className='w-full h-full'
            options={{max: 15, scale: 1.01, speed: 10}} >
            <motion.div 
                variants={fadeIn('up', 'spring', 1.7, 0.5)} 
                className={`${containterStyle} flex flex-col !items-start !justify-start !pt-4 gap-2`}>
                <h1 className='text-secondary font-medium'>You will catch me vibing either in</h1>
                <div className="flex gap-6 w-full justify-center my-auto">
                    <Clock label="Vancouver, BC" timeZone="America/Vancouver" />
                    or
                    <Clock label="Toronto, ON" timeZone="America/Toronto" />
                </div>
            </motion.div>
        </Tilt>
    ),
    width: 2,
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
        
        <div className='hidden xl:block max-w-[1260px] w-full mx-auto'>
            <BentoGrid
                items={bentoItemsXL}
                gridCols={5}
                rowHeight={200}
                classNames={{
                    container: "my-custom-container-class",
                    elementContainer: "no-bento-style",
                }}
            />
        </div>
        <div className='hidden xs:hidden md:block xl:hidden max-w-[800px] w-full mx-auto'>
            <BentoGrid
                items={bentoItems}
                gridCols={3}
                rowHeight={200}
                classNames={{
                    container: "my-custom-container-class",
                    elementContainer: "no-bento-style",
                }}
            />
        </div>
        <div className='md:hidden block w-full'>
            <BentoGrid
                items={bentoItemsSM}
                gridCols={2}
                rowHeight={150}
                classNames={{
                    container: "my-custom-container-class",
                    elementContainer: "no-bento-style",
                }}
            />
        </div>
    </>
  )
}

export default SectionWrapper(Bento, "about")