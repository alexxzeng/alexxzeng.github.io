import React, { useState, useEffect }from 'react'
import { styles } from '../styles';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc'
import { BentoGrid } from "react-bento";
import { Tilt } from 'react-tilt';
import { uoft, toronto, vancouver } from '../assets';

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
                    <p className='text-sm text-secondary p-6 leading-7'>
                        I'm currently a 4th year student specializing in the <i><b>Software Engineering</b></i> stream 
                        of <i><b>Computer Science</b></i> and majoring in <i><b>Statistics</b></i> at the <i><b>University of Toronto</b></i>.
                        I am fortunate to have had many opportunities to develop and enhance the analytical and logical
                        thinking skills of a programmer through object-oriented languages such as <i><b>Java, Python, C++,</b></i> 
                        and <i><b>JavaScript</b></i>. Using these languages and industrial development methodologies, I have built many interesting projects that range
                        from <i><b>Django & MERN</b> Web Apps</i> to <i><b>Android</b> Mobile Apps</i> to <i><b>Machine Learning & Data
                        Analyzing</b> Interfaces</i>. Advances in technology isn't the only thing I'm passionate about, but also
                        playing the piano, watching hockey (PS... still waiting for the <i>Vancouver Canucks</i> to win the Stanley Cup), and exploring
                        new places and things to do in my free time. Hope I don't seem too boring to you already yet, feel free to connect
                        with me through the <i><b>Contact</b></i> section of this portfolio!
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
        <div className='md:hidden block w-full mx-auto'>
            <BentoGrid
                items={bentoItemsSM}
                gridCols={2}
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

export default SectionWrapper(Bento, "about")