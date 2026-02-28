import { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const containerRef = useRef(null);
  const frameRef = useRef(0);
  const targetRef = useRef({ x: 50, y: 50 });
  const currentRef = useRef({ x: 50, y: 50 });

  useEffect(() => {
    const handlePointerMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 100;
      const y = (event.clientY / window.innerHeight) * 100;
      targetRef.current = { x, y };
    };

    const animate = () => {
      const node = containerRef.current;
      if (node) {
        currentRef.current.x += (targetRef.current.x - currentRef.current.x) * 0.08;
        currentRef.current.y += (targetRef.current.y - currentRef.current.y) * 0.08;

        node.style.setProperty('--mouse-x', `${currentRef.current.x}%`);
        node.style.setProperty('--mouse-y', `${currentRef.current.y}%`);
      }

      frameRef.current = window.requestAnimationFrame(animate);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    frameRef.current = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, #0f172a 0%, #1e3a8a 45%, #dc2626 100%), radial-gradient(35rem 35rem at var(--mouse-x,50%) var(--mouse-y,50%), rgba(96,165,250,0.2), rgba(96,165,250,0) 70%)',
        backgroundSize: '200% 200%, auto',
        animation: 'brandGradientShift 18s ease infinite',
      }}
    >
      <div
        className="absolute -left-24 -top-24 h-[30rem] w-[30rem]"
        style={{
          background: 'radial-gradient(circle, rgba(30,64,175,0.55) 0%, rgba(30,64,175,0) 72%)',
          opacity: 0.15,
          filter: 'blur(120px)',
        }}
      />
      <div
        className="absolute -bottom-24 -right-24 h-[31rem] w-[31rem]"
        style={{
          background: 'radial-gradient(circle, rgba(220,38,38,0.55) 0%, rgba(220,38,38,0) 72%)',
          opacity: 0.15,
          filter: 'blur(120px)',
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
