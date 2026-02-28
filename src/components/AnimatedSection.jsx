import { motion } from 'framer-motion';

const AnimatedSection = ({ children, className = '', ...rest }) => {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
      {...rest}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
