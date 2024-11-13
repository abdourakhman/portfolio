//next image
import Image from 'next/image';

const Avatar = () => {
  return( 
  <div className='hidden xl:flex xl:max-w-none'>
    <Image 
    src={'/Avt.PNG'} width={737} height={678} alt=''
    className='translate z-10 translate xl:mt-[16px] rounded  w-full h-full
    md:translate-x-10'
    />  
  </div>
  );
};

export default Avatar;
