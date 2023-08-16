//links
import Link from "next/link";

//icons
import {RiYoutubeLine, RiFacebookBoxLine, RiLinkedinLine, RiGithubLine} 
from 'react-icons/ri';

const Socials = () => {
  return (
    <div className=" flex items-center gap-x-5 text-lg">
      <Link href={'https://www.linkedin.com/in/abdourahmane-ndiaye-76b31b211/'} className=' hover:text-accent transition-all duration-300'>
        <RiLinkedinLine />
      </Link>
      <Link href={'https://github.com/abdourakhman?tab=repositories'} className=' hover:text-accent transition-all duration-300'>
        <RiGithubLine />
      </Link>
    </div>
  );
};

export default Socials;
