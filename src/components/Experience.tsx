import { motion } from 'framer-motion';
import { styles } from './styles';
import { experiences } from '../constants';
import { textVariant, fadeIn } from '../utils/motion';
import SectionWrapper from '../hoc/SectionWrapper';

const ExperienceCard = ({ experience, index }: { experience: any; index: number }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.3, 0.75) as any}
      className="relative group"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Timeline connector */}
      <div className="absolute left-8 top-20 w-0.5 h-full bg-gradient-to-b from-tertiary to-transparent group-hover:bg-gradient-to-b group-hover:from-purple-400 group-hover:to-transparent transition-all duration-300"></div>
      
      {/* Experience Card */}
      <div className="flex items-start gap-6 mb-16">
        {/* Icon */}
        <div className="relative">
          <motion.div 
            className="w-16 h-16 rounded-full flex items-center justify-center z-10 relative"
            style={{ backgroundColor: experience.iconBg }}
            whileHover={{ 
              scale: 1.1, 
              rotate: 5,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={experience.icon}
              alt={experience.company_name}
              className="w-12 h-12 object-contain"
            />
          </motion.div>
          
          {/* Timeline dot */}
          <motion.div 
            className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-tertiary rounded-full shadow-lg"
            whileHover={{ 
              scale: 1.5, 
              boxShadow: "0 0 20px rgba(151, 71, 255, 0.6)",
              transition: { duration: 0.3 }
            }}
          ></motion.div>
        </div>

        {/* Content */}
        <motion.div 
          className="flex-1 bg-tertiary/10 p-6 rounded-lg border border-tertiary/20 backdrop-blur-sm cursor-pointer"
          whileHover={{
            scale: 1.02,
            backgroundColor: "rgba(151, 71, 255, 0.2)",
            borderColor: "rgba(151, 71, 255, 0.4)",
            transition: { duration: 0.3, ease: "easeOut" }
          }}
          whileTap={{ scale: 0.98 }}
          initial={{ backgroundColor: "rgba(151, 71, 255, 0.1)" }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
            <motion.div
              whileHover={{ y: -2, transition: { duration: 0.2 } }}
            >
              <motion.h3 
                className="text-white text-xl font-bold"
                whileHover={{ 
                  color: "rgb(151, 71, 255)",
                  transition: { duration: 0.2 }
                }}
              >
                {experience.title}
              </motion.h3>
              <motion.p 
                className="text-secondary text-lg font-medium"
                whileHover={{ 
                  color: "rgb(151, 71, 255)",
                  transition: { duration: 0.2 }
                }}
              >
                {experience.company_name}
              </motion.p>
            </motion.div>
            <div className="flex items-center gap-3 mt-2 sm:mt-0">
              <motion.div 
                className="bg-black/30 px-4 py-2 rounded-full"
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: "rgba(151, 71, 255, 0.3)",
                  transition: { duration: 0.2 }
                }}
              >
                <p className="text-white text-sm font-medium">
                  {experience.date}
                </p>
              </motion.div>
              {experience.github_link && (
                <motion.a
                  href={experience.github_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black/30 p-2 rounded-full hover:bg-tertiary/30 transition-colors"
                  whileHover={{ 
                    scale: 1.1,
                    backgroundColor: "rgba(151, 71, 255, 0.3)",
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </motion.a>
              )}
            </div>
          </div>

          {/* Tech Stack Tags */}
          {experience.tags && experience.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {experience.tags.map((tag: any, tagIndex: number) => (
                <motion.span
                  key={tagIndex}
                  className={`px-3 py-1 text-xs font-medium rounded-full bg-black/20 text-white border border-white/10`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: (index * 0.1) + (tagIndex * 0.1) + 0.3 }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(151, 71, 255, 0.2)",
                    borderColor: "rgba(151, 71, 255, 0.4)",
                    transition: { duration: 0.2 }
                  }}
                >
                  #{tag.name}
                </motion.span>
              ))}
            </div>
          )}

          <ul className="space-y-3">
            {experience.points.map((point: string, pointIndex: number) => (
              <motion.li 
                key={pointIndex} 
                className="flex items-start gap-3"
                whileHover={{ 
                  x: 10, 
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (index * 0.1) + (pointIndex * 0.1) + 0.5 }}
              >
                <motion.div 
                  className="w-1.5 h-1.5 bg-tertiary rounded-full mt-2 flex-shrink-0"
                  whileHover={{ 
                    scale: 2, 
                    backgroundColor: "rgb(151, 71, 255)",
                    transition: { duration: 0.2 }
                  }}
                ></motion.div>
                <p className="text-white/80 text-sm leading-relaxed">
                  {point}
                </p>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant(0) as any}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-20 relative">
        {/* Main timeline line */}
        <motion.div 
          className="absolute left-8 top-0 w-0.5 h-full bg-gradient-to-b from-tertiary via-tertiary/50 to-transparent"
          whileHover={{
            boxShadow: "0 0 20px rgba(151, 71, 255, 0.5)",
            width: "2px",
            transition: { duration: 0.3 }
          }}
        ></motion.div>
        
        <div className="space-y-0">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              index={index}
            />
          ))}
        </div>

        {/* Bottom decoration */}
        <motion.div 
          className="flex justify-center mt-16"
          variants={fadeIn("up", "tween", 1, 1) as any}
        >
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-tertiary to-transparent"></div>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");
