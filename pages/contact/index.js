//icons
import {BsArrowRight} from 'react-icons/bs';
import {FaCheck} from 'react-icons/fa';
//framer 
import {motion} from 'framer-motion';
//variants
import {fadeIn} from '../../variants';

//email js
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {

  const form = useRef();
  const [isNotificationVisible, setNotificationVisible] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_15s8jeq', 'template_id3q2zb', form.current, 'ihIV0dqCrEA3GKB7e')
    .then((result) => {
      console.log("message sent");
      if (form.current.checkValidity()) {
        form.current.reset();
        setNotificationVisible(true); // Affiche la notification
        setTimeout(() => {
          setNotificationVisible(false); // Cache la notification après 5 secondes
        }, 5000);
      }
    })
    .catch((error) => {
      console.log(error.text);
    });
  
  };


  return(
    <div className='h-full bg-primary/30 overflow-hidden'>
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
          className='flex-1 flex flex-col gap-6 w-full mx-auto relative'>
            {/* input group */}
            <div className='flex gap-x-6 w-full'>    
              <input type='text' placeholder='name' className='input'  name='user_name' required></input>
              <input type='email' placeholder='email' className='input'  name="user_email" required ></input>
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
              {isNotificationVisible &&(
              <div id='notification'>
                <motion.div
                variants={fadeIn('up',0.4)}
                initial='hidden'
                animate='show'
                exit='hidden' 
                className='bg-white shadow-xl pt-1 pr-7 pb-1 pl-6 absolute bottom-4 right-0 rounded-xl 
                border-solid border-l-8 border-green-500 overflow-hidden transparent
                ' 
                id='toast'>
                  <div className='flex items-center'>
                    <FaCheck className='flex items-center justify-center text-lg p-1 rounded-full text-white 
                    h-[25px] w-[25px] bg-green-500'/>
                    <div className='flex flex-col my-0 mx-5'>
                      <span className='text-green-500 font-bold'>Success</span>
                      <span className='text-slate-500 text-sm font-semibold'>Your message has been sent !</span>
                    </div>
                  </div>
                </motion.div>
              </div>
              )}
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
