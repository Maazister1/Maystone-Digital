import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

// Thin red bar at the top of the screen that fills as the page is scrolled
export default function ScrollProgressBar() {
  const barRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    let frame = null;

    const update = () => {
      frame = null;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      if (barRef.current) barRef.current.style.transform = `scaleX(${progress})`;
    };

    const onScroll = () => {
      if (frame === null) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, [pathname]);

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[9999] pointer-events-none">
      <div
        ref={barRef}
        className="h-full origin-left bg-gradient-to-r from-[#FA0E33] to-[#FE5211] shadow-[0_0_10px_rgba(254,8,59,0.8)]"
        style={{ transform: 'scaleX(0)' }}
      />
    </div>
  );
}
