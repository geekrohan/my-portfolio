import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';
import animate from 'lottie-web';
import { motion } from 'framer-motion';

const Main = ({ titleDelay, subtitleDelay, animationDelay }) => {
  const container = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('./developer.json'),
    });
    animate.setSpeed(0.5);
  }, []);

  return (
    <section className='my-16 px-5 md:my-32 flex flex-col flex-wrap space-y-16 md:space-y-0 patterns'>
      <motion.div
        initial={{
          scale: 0,
        }}
        animate={{
          scale: 1,
        }}
        transition={{
          delay: animationDelay,
          duration: 0.45,
        }}
      >
        <div className='m-auto w-72 md:w-96 lg:w-2/5 md:mr-0'>
          <div className='container' ref={container}></div>
        </div>
      </motion.div>
      <div className='pt-20 max-w-md mb-auto space-y-5'>
        <motion.div
          initial={{
            scale: 0,
          }}
          animate={{
            scale: 1,
          }}
          transition={{
            delay: titleDelay,
            duration: 0.45,
          }}
        >
          <h1 className='text-5xl font-bold md:text-7xl'>Hello. I’m Rohan</h1>
        </motion.div>
        <motion.div
          initial={{
            scale: 0,
          }}
          animate={{
            scale: 1,
          }}
          transition={{
            delay: subtitleDelay,
            duration: 0.45,
          }}
        >
          <p className='tracking-wide leading-relaxed'>
            I am a Full Stack developer and I love to make user-friendly and resposive websites. My objective is to utilize my potential in designing new software and technology with the latest requirement and advancements in the field of technology, thereby adding up to the reputation of the organization.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Main;
