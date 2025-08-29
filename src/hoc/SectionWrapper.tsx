import { motion } from 'framer-motion';
import { styles } from "../components/styles";
import { staggerContainer } from '../utils/motion';

const SectionWrapper = (Component: React.ComponentType, idName: string) => {
  return function HOC() {
    return (
      <motion.section
        variants={staggerContainer(0.1, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} w-full relative z-0`}
        id={idName}
      >
        <Component />
      </motion.section>
    );
  };
}

export default SectionWrapper;