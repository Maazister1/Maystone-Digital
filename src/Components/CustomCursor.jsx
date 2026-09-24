import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const ringX = useSpring(cursorX, { damping: 35, stiffness: 600, mass: 0.4 });
  const ringY = useSpring(cursorY, { damping: 35, stiffness: 600, mass: 0.4 });

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY]);

  return (
    <div className="hidden sm:block">
      {/* Center dot - snaps instantly to the pointer */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] rounded-full pointer-events-none"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          width: 6,
          height: 6,
          backgroundColor: '#FFFFFF',
        }}
      />

      {/* Outer ring - trails behind with spring physics */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] rounded-full pointer-events-none"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          width: 34,
          height: 34,
          border: '1.5px solid #FFFFFF',
        }}
      />
    </div>
  );
};

export default CustomCursor;
