import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface FadeContentProps {
  children: React.ReactNode;
  blur?: boolean;
  duration?: number;
  delay?: number;
  yOffset?: number;
  threshold?: number;
}

const FadeContent: React.FC<FadeContentProps> = ({
  children,
  blur = false,
  duration = 0.6,
  delay = 0,
  yOffset = 30,
  threshold = 0.1
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: threshold });

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0, 
        y: yOffset,
        filter: blur ? 'blur(10px)' : 'blur(0px)'
      }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0,
        filter: 'blur(0px)'
      } : { 
        opacity: 0, 
        y: yOffset,
        filter: blur ? 'blur(10px)' : 'blur(0px)'
      }}
      transition={{ 
        duration, 
        delay,
        ease: [0.25, 0.1, 0.25, 1]
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeContent;
