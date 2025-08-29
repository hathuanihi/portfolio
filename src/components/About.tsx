import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "./styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

interface ServiceCardProps {
  index: number;
  title: string;
  icon: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ index, title, icon }) => (
  <Tilt 
    className='xs:w-[200px] w-full'
    tiltMaxAngleX={15}
    tiltMaxAngleY={15}
    scale={1.02}
    transitionSpeed={450}
  >
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75) as any}
      className='w-full bg-gradient-to-br from-[#915EFF] via-[#7c3aed] to-[#ec4899] p-[2px] rounded-[24px] shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 group'
    >
      <div
        className='bg-tertiary rounded-[22px] py-8 px-8 min-h-[320px] flex justify-evenly items-center flex-col backdrop-blur-sm bg-opacity-95 hover:bg-opacity-100 transition-all duration-300'
      >
        <div className='w-20 h-20 mb-4 p-3 bg-gradient-to-br from-[#915EFF]/20 to-[#ec4899]/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
          <img
            src={icon}
            alt={title}
            className='w-12 h-12 object-contain group-hover:brightness-110 transition-all duration-300'
          />
        </div>

        <h3 className='text-white text-[22px] font-bold text-center leading-tight group-hover:text-[#915EFF] transition-colors duration-300'>
          {title}
        </h3>
        
        <div className='w-12 h-[2px] bg-gradient-to-r from-[#915EFF] to-[#ec4899] rounded-full mt-2 group-hover:w-16 transition-all duration-300'></div>
      </div>
    </motion.div>
  </Tilt>
);

const About: React.FC = () => {
  return (
    <>
      <motion.div variants={textVariant() as any}>
        <p className={`${styles.sectionSubText} text-white-100`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText} text-[#915EFF]`}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1) as any}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-white-100'
      >
        I'm a skilled Fullstack Developer with experience in TypeScript, JavaScript, and Java. I specialize in modern frameworks and tools such as React, React Native, Spring Boot, and Vite to build efficient, scalable, and user-friendly web and mobile applications. I’m a quick learner who enjoys solving real-world problems and collaborating closely with clients to turn ideas into impactful digital solutions.
      </motion.p>

      <div className='mt-20 grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
        {services.map((service, index) => (
          <ServiceCard 
            key={service.title} 
            index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");