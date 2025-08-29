import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';
import { styles } from './styles';

const Tech = () => {
    return (
    //     <motion.div variants={textVariant(0) as any}>
    //     <p className={`${styles.sectionSubText} text-center`}>
    //       What I have done so far
    //     </p>
    //     <h2 className={`${styles.sectionHeadText} text-center`}>
    //       Work Experience.
    //     </h2>
    //   </motion.div>
        <motion.div variants={textVariant(0) as any}>
            <p className={`${styles.sectionSubText} text-center`}>
                I am passionate about web and mobile development with diverse
            </p>
            <h2 className={`${styles.sectionHeadText} text-center`}>TECHNOLOGIES.</h2>
            <div className='mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8'>
                {technologies.map((tech) => (
                    <BallCanvas key={tech.name} icon={tech.icon} />
                ))}
            </div>
        </motion.div>
    );
}

export default SectionWrapper(Tech, "");