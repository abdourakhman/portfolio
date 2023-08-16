//icons
import {BsArrowRight} from 'react-icons/bs';
//framer 
import {motion} from 'framer-motion';
//variants
import {fadeIn} from '../../variants';

//email js
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_15s8jeq', 'template_id3q2zb', form.current, 'ihIV0dqCrEA3GKB7e')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
          window.location.reload();
      }, (error) => {
          console.log(error.text);
      });
  };

  return(
    <div className='h-full bg-primary/30'>
      <div className='container mx-auto py-32 xl:text-left text-center flex items-center
      justify-center h-full'>
        <div className='flex flex-col w-full max-w-[700px] mb-16 md:mb-12 xl:mb-0'>
          {/* text & form */}
          <motion.h2 
          variants={fadeIn('up',0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='h2 text-center xl:mt-8'>
            Let's <span className='text-accent'>discuss !</span>
          </motion.h2>
          {/* form */}
          <motion.form  
          ref={form} 
          onSubmit={sendEmail}
          variants={fadeIn('up',0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='flex-1 flex flex-col gap-6 w-full mx-auto'>
            {/* input group */}
            <div className='flex gap-x-6 w-full'>    
              <input type='text' placeholder='name' className='input'  name='user_name' required></input>
              <input type='email' placeholder='email' className='input'  name="user_email" required></input>
            </div>
              <input type='text' placeholder='subject' className='input'></input>
              <textarea placeholder='message'   name="message"className='textarea'></textarea>
              <button type='submit' className='btn rounded-full border border-white/50 max-w-[170px] px-8 
              transition all duration-300 flex items-center justyfy-center overflow-hidden hover:border-accent group'>
                <span>
                  Lets' talk
                </span>
                <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0
                group-hover:opacity-100 transition-all duration-300 aboslute text-[22px]'/>
              </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
