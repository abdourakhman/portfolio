//icons
import {} from 'react-icons/rx';
//components
import WorkSlider from '../../components/WorkSlider';
import Bulb from  '../../components/Bulb';
import Circles from  '../../components/Circles';

//Framer motion
import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';

const Work = () => {
  return (
  <div className='h-full bg-primary/30 py-36 flex items-center md:mt-16'>
    <Circles />
    <div className='container mx-auto'>
      <div className='flex flex-col xl:flex-row gap-x-8'>
        {/* text */}
        <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
          <motion.h2 
          variants ={fadeIn('up', 0.3)} 
          initial='hidden' animate='show'
          exit='hidden'
          className='h2 xl:mt-12'> 
          My work <span className='text-accent'>.</span>
          </motion.h2>
          <motion.p 
          variants ={fadeIn('up', 0.4)} 
          initial='hidden' animate='show'
          exit='hidden'
          className='mb-4 max-w-[300px] mx-auto lg:mx-0'>
              Here are some thumbnails of the projects I had to do that I can share with you.
          </motion.p>
        </div>
        <motion.div 
        variants ={fadeIn('down', 0.6)} 
        initial='hidden' animate='show'
        exit='hidden'
        className='w-full xl:max-w-[65%] xl:mr-12 md:max-w-[65%] md:mb-5'>
          {/* slider */}
          <WorkSlider />
        </motion.div>
      </div>
    </div>
    <Bulb />
  </div>
  );
};

export default Work;
