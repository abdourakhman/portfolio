import React, { useState } from 'react';
import { FaHtml5, FaCss3, FaJs, FaReact, FaAngular, FaJava, FaPhp, FaLaravel, FaLinux, FaWindows, FaPython } from 'react-icons/fa';
import { RiFlutterLine } from 'react-icons/ri';
import Typewriter from 'typewriter-effect';
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import CountUp from 'react-countup';

// Définissez les icônes en tant que composants
const DevelopmentIcon = <FaHtml5 />;
const CssIcon = <FaCss3 />;
const JsIcon = <FaJs />;
const JavaIcon = <FaJava />;
const PhpIcon = <FaPhp />;
const PythonIcon = <FaPython />;
const ReactIcon = <FaReact />;
const FlutterIcon = <RiFlutterLine />;
const AngularIcon = <FaAngular />;
const LaravelIcon = <FaLaravel />;
const LinuxIcon = <FaLinux />;
const WindowsIcon = <FaWindows />;

const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Development',
        icons: [DevelopmentIcon, CssIcon, JsIcon, JavaIcon, PhpIcon, PythonIcon, ReactIcon, FlutterIcon, AngularIcon, LaravelIcon],
      },
      {
        title: 'administration system',
        icons: [LinuxIcon, WindowsIcon],
      },
    ],
  },
  {
    title: 'experiences',
    info: [
      {
        title: 'Work-study engineer - GEMADEC Morocco',
        stage: '2022 - 2023',
      },
      {
        title: 'IT Technician - HPD Senegal',
        stage: '2021 - 2022',
      },
      {
        title: 'Junior Developer - ATOS Senegal',
        stage: '2020 - 2021',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Development & System administration diploma',
        stage: '2022',
      },
      {
        title: 'Master software engineering',
        stage: 'In progress',
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
      <Circles/>
      <motion.div  
      variants={fadeIn('right', 0.2)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className='hidden xl:flex absolute bottom-0 -left-[270px] '>
      </motion.div>
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
       {/* text */}
        <div className='flex-1 flex flex-col  justify-center'>
            <motion.h2
            variants={fadeIn('right', 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='h2 text-[1.5em] md:text-[3em]'>
              <span>
                <Typewriter
                  options={{
                    strings:[
                      'I\'m a <span class="text-accent">web developer</span>',
                      '<span class="text-accent">mobile developer</span>',
                      '<span class="text-accent">system adminstrator</span>',
                    ],
                    autoStart: true,
                    loop: true,
                    speed:10,
                    delay:60,                    
                  }}
                />
              </span>
            </motion.h2>
            <motion.p
            variants={fadeIn('right', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 text-sm md:text-[1em]'>
              During these past 4 years, I had the opportunity to work on various
              projects where I put my technical skills and my creativity into practice.
              Whether designing interactive applications, solving complex problems or
              exploring new technologies, I have always been driven by the desire to
              create efficient and elegant solutions.
            </motion.p>
            {/* counters */}
            <motion.div
              variants={fadeIn('right', 1.)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'>
              <div className=' flex flex-1 xl:gap-x-6 '>
                {/* experience */}
                <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10
                 after:absolute after:top-0 after:right-0'>
                  <div className='text-2xl xl:text-4xl font-extrabold text-accent'>
                    <CountUp  start={100} end={4} duration={2} delay={1}/> +
                  </div>
                  <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                    Years of experience
                  </div>
                </div>
                {/* clients */}
                <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10
                 after:absolute after:top-0 after:right-0'>
                  <div className='text-2xl xl:text-4xl font-extrabold text-accent'>
                    <CountUp  start={100} end={10} duration={2} delay={1} /> +
                  </div>
                  <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                    clients statisfied
                  </div>
                </div>
                {/* projects */}
                <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10
                 after:absolute after:top-0 after:right-0'>
                  <div className='text-2xl xl:text-4xl font-extrabold text-accent'>
                    <CountUp  start={100} end={17} duration={2} delay={1} /> +
                  </div>
                  <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                    Finished projects
                  </div>
                </div>
              </div>
            </ motion.div>
            <motion.div
              variants={fadeIn('right', 1.)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className='flex w-full justify-center'>
                <div className='flex w-[25%] xl:w-[55%] justify-center border  border-red-700 rounded-xl hover:bg-red-700'>
                  <a 
                  href='\CV.pdf'
                  rel='noopener noreferrer'
                  target='_blank'
                  className='text-sm md:text-md xl:text-xl py-1 px-2 xl:py-3 xl:px-5'>
                    Mon CV
                  </a>
                </div>
             </motion.div>
        </ div>
        {/* info */}
        <motion.div
        variants={fadeIn('left', 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className='flex flex-col w-full xl:max-w-[48%] h-[480px]'>
        <div className='flex gap-x-4 cl:gap-x-8 mx-auto xl:mx-0 mb-4'>
          {aboutData.map((item,itemIndex)=>{
            return(
              <div key={itemIndex} className={`${index === itemIndex && 'text-accent  after:w-[100%] after:bg-accent after:transition-all after:duration-300'}
                                    cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] pt-5
                                    after:bg-white after:absolute after:left-0 after:bottom-1`}
                                    onClick={() =>setIndex(itemIndex) }
                                    >
                {item.title}
              </div>
              );
          })}
        </div>
        <div className='py-2 flex flex-col gap-y-4
        items-center xl:items-start'>
          {aboutData[index].info.map((item,itemIndex)=> {
            return (
              <div key={itemIndex} className='flex-1 flex flex-col md:flex-row
              max-w-max gap-x-2 items-center text-white/60 '>
                {/* title */}
                <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                <div>{item.stage}</div>
                <div className='flex gap-x-4' >
                  {/* icons */}
                  {item.icons?.map((icon, itemIndex)=>{
                    return <div className='text-2xl text-white' key={itemIndex}> {icon} </div>;
                  })}
                </div>
               
              </div>
            );
          })}
        </div>
        {/* avatar img */}
        <div className="max-w-[82%]">
           <Avatar/>
        </div>
        </motion.div>
      </div>
    </div>
    );
};
export default About;
