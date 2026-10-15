import React, { useEffect, useRef } from 'react';

// Vertical timeline line that fills as the user scrolls through it.
// Place inside a `relative` timeline container.
export default function TimelineProgress({ glow = 'shadow-[0_0_12px_rgba(254,8,59,0.8)]' }) {
  const trackRef = useRef(null);
  const fillRef = useRef(null);

  useEffect(() => {
    let frame = null;

    const update = () => {
      frame = null;
      const track = trackRef.current;
      const fill = fillRef.current;
      if (!track || !fill) return;

      // Line fills up to the point 60% down the viewport
      const rect = track.getBoundingClientRect();
      const trigger = window.innerHeight * 0.6;
      const progress = rect.height > 0
        ? Math.min(1, Math.max(0, (trigger - rect.top) / rect.height))
        : 0;
      fill.style.transform = `scaleY(${progress})`;
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
  }, []);

  return (
    <div
      ref={trackRef}
      className="hidden md:block absolute left-1/2 top-10 bottom-10 w-[2px] bg-white/10 -translate-x-1/2"
    >
      <div
        ref={fillRef}
        className={`absolute inset-0 origin-top bg-[#FE083B] ${glow}`}
        style={{ transform: 'scaleY(0)' }}
      />
    </div>
  );
}
