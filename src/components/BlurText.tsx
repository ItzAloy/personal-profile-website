import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const BlurText: React.FC<BlurTextProps> = ({
  text,
  className = '',
  delay = 100
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  
  const words = text.split(' ');

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ display: 'flex', flexWrap: 'wrap' }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ 
            opacity: 0,
            filter: 'blur(5px)'
          }}
          animate={isInView ? { 
            opacity: 1,
            filter: 'blur(0px)'
          } : { 
            opacity: 0,
            filter: 'blur(5px)'
          }}
          transition={{ 
            duration: 0.5,
            delay: index * (delay / 1000),
            ease: [0.25, 0.1, 0.25, 1]
          }}
          style={{ marginRight: '0.25em', display: 'inline-block' }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default BlurText;
