import React from 'react';
import { motion } from 'framer-motion';
import { styles } from './styles';
import { education } from '../constants';
import { textVariant, fadeIn } from '../utils/motion';
import SectionWrapper from '../hoc/SectionWrapper';

interface EducationCardProps {
  item: {
    id: number;
    year: string;
    phase: string;
    title: string;
    isPhaseStart: boolean;
  };
  index: number;
}

const EducationCard: React.FC<EducationCardProps> = ({ item, index }) => {
  // Lọc bỏ item có cả title và phase đều rỗng
  if (!item.title && !item.phase) return null;
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.15,
        type: "spring",
        stiffness: 100 
      }}
      viewport={{ once: true, amount: 0.3 }}
      className="relative mb-6 flex items-center group"
    >
      {/* Timeline dot - left side - chỉ hiện khi có year */}
      {item.year && (
        <motion.div 
          className="w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full border-2 border-white shadow-lg flex-shrink-0 z-10"
          whileHover={{ 
            scale: 1.3,
            boxShadow: "0 0 20px rgba(147, 51, 234, 0.6)",
          }}
          transition={{ duration: 0.3 }}
        />
      )}
      
      {/* Spacing khi không có year */}
      {!item.year && (
        <div className="w-4 h-4 flex-shrink-0" />
      )}
      
      {/* Year với animation - chỉ hiện khi có year */}
      {item.year && (
        <motion.div 
          className="w-24 flex-shrink-0 ml-4"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-bold text-base">
            {item.year}
          </div>
        </motion.div>
      )}
      
      {/* Spacing khi không có year */}
      {!item.year && (
        <div className="w-24 flex-shrink-0 ml-4" />
      )}
      
      {/* Animated connecting line - chỉ hiện khi có year */}
      {item.year && (
        <motion.div 
          className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 mx-4 relative overflow-hidden"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
          style={{ transformOrigin: "left" }}
        >
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{
              x: ['-100%', '100%']
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      )}
      
      {/* Spacing khi không có year */}
      {!item.year && (
        <div className="w-12 mx-4" />
      )}
      
      {/* Content với enhanced animation */}
      <motion.div 
        className="flex-1"
        whileHover={{ 
          scale: 1.02,
          y: -2
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="bg-gradient-to-r from-slate-800/60 to-slate-900/60 p-4 rounded-xl border border-purple-500/20 hover:border-purple-400/50 transition-all duration-500 backdrop-blur-sm group-hover:shadow-lg group-hover:shadow-purple-500/10">
          {item.isPhaseStart && item.phase && (
            <motion.div 
              className="text-purple-400 font-semibold mb-2 text-base"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 + 0.4 }}
            >
              {item.phase}
            </motion.div>
          )}
          {item.title && (
            <motion.div 
              className="text-gray-300 text-sm leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 + 0.5 }}
            >
              {item.title}
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

const Education: React.FC = () => {
  return (
    <>
      <motion.div variants={textVariant(0) as any}>
        <p className={`${styles.sectionSubText} text-center !text-white-100`}>
          My Academic Journey
        </p>
        <h2 className={`${styles.sectionHeadText} text-center !text-[#915EFF]`}>
          Education & Achievements.
        </h2>
      </motion.div>

      <div className="mt-20">
        {/* Enhanced Timeline Layout */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical connecting line between years */}
          <motion.div 
            className="absolute left-2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-purple-600 opacity-30"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
          />
          
          {/* Animated background glow */}
          <motion.div
            className="absolute left-2 top-0 w-0.5 h-full bg-gradient-to-b from-purple-400/0 via-purple-400/20 to-purple-400/0"
            animate={{
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {education
            .filter(item => item.title || item.phase) // Lọc items có nội dung
            .map((item, index) => (
              <EducationCard
                key={item.id}
                item={item}
                index={index}
              />
            ))
          }
        </div>
      </div>

      {/* Enhanced bottom decoration */}
      <motion.div 
        className="flex justify-center mt-16"
        variants={fadeIn("up", "tween", 1, 1) as any}
      >
        <motion.div 
          className="w-32 h-0.5 bg-gradient-to-r from-transparent via-[#915EFF] to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </motion.div>
    </>
  );
};

export default SectionWrapper(Education, "education");
