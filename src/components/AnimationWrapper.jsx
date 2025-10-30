import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Animation wrapper component for fade-in animations
export const FadeIn = ({ children, delay = 0, duration = 0.5, className = "", direction = null }) => {
  const getDirectionProps = () => {
    switch(direction) {
      case 'up':
        return { initial: { y: 20, opacity: 0 }, animate: { y: 0, opacity: 1 } };
      case 'down':
        return { initial: { y: -20, opacity: 0 }, animate: { y: 0, opacity: 1 } };
      case 'left':
        return { initial: { x: 20, opacity: 0 }, animate: { x: 0, opacity: 1 } };
      case 'right':
        return { initial: { x: -20, opacity: 0 }, animate: { x: 0, opacity: 1 } };
      default:
        return { initial: { opacity: 0 }, animate: { opacity: 1 } };
    }
  };

  const directionProps = getDirectionProps();

  return (
    <motion.div
      initial={directionProps.initial}
      animate={directionProps.animate}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Animation wrapper for scroll-triggered animations
export const ScrollReveal = ({ children, className = "", threshold = 0.1, direction = null }) => {
  const getDirectionProps = () => {
    switch(direction) {
      case 'up':
        return { initial: { y: 50, opacity: 0 }, whileInView: { y: 0, opacity: 1 } };
      case 'down':
        return { initial: { y: -50, opacity: 0 }, whileInView: { y: 0, opacity: 1 } };
      case 'left':
        return { initial: { x: -50, opacity: 0 }, whileInView: { x: 0, opacity: 1 } };
      case 'right':
        return { initial: { x: 50, opacity: 0 }, whileInView: { x: 0, opacity: 1 } };
      default:
        return { initial: { opacity: 0 }, whileInView: { opacity: 1 } };
    }
  };

  const directionProps = getDirectionProps();

  return (
    <motion.div
      initial={directionProps.initial}
      whileInView={directionProps.whileInView}
      viewport={{ once: true, threshold }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Staggered children animation
export const StaggerContainer = ({ children, className = "", staggerDelay = 0.1 }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, threshold: 0.1 }}
      className={className}
    >
      {Array.isArray(children) ? 
        children.map((child, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5, delay: index * staggerDelay }}
          >
            {child}
          </motion.div>
        )) : 
        children
      }
    </motion.div>
  );
};

// Hover animation for product cards
export const HoverCard = ({ children, className = "" }) => {
  return (
    <motion.div
      className={className}
      whileHover={{ 
        y: -5,
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
        transition: { duration: 0.2 }
      }}
    >
      {children}
    </motion.div>
  );
};

// Animated counter (for numbers that count up)
export const AnimatedCounter = ({ value, duration = 2, className = "" }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const end = parseInt(value);
    
    if (start === end) return;
    
    const incrementTime = (duration / end) * 1000;
    
    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);
    
    return () => {
      clearInterval(timer);
    };
  }, [value, duration]);
  
  return <span className={className}>{count}</span>;
};

// Button hover animation
export const AnimatedButton = ({ children, className = "", onClick }) => {
  return (
    <motion.button
      className={className}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.button>
  );
};