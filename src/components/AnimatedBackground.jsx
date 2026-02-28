import { useEffect, useRef } from 'react';

const TAU = Math.PI * 2;

const AnimatedBackground = () => {
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(0);
  const lightsRef = useRef([]);
  const pointerTargetRef = useRef({ x: 0, y: 0 });
  const pointerCurrentRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const context = canvas.getContext('2d');
    if (!context) return undefined;

    let width = 0;
    let height = 0;
    let pixelRatio = 1;

    const createLights = () => {
      const baseRadius = Math.max(width, height) * 0.22;

      return [
        {
          color: '220, 38, 38',
          alpha: 0.42,
          radius: baseRadius * 1.12,
          orbitX: width * 0.12,
          orbitY: height * 0.1,
          speedX: 0.0011,
          speedY: 0.0015,
          phase: 0,
        },
        {
          color: '59, 130, 246',
          alpha: 0.38,
          radius: baseRadius,
          orbitX: width * 0.15,
          orbitY: height * 0.12,
          speedX: 0.0015,
          speedY: 0.001,
          phase: 1.8,
        },
        {
          color: '14, 165, 233',
          alpha: 0.28,
          radius: baseRadius * 0.8,
          orbitX: width * 0.11,
          orbitY: height * 0.08,
          speedX: 0.0019,
          speedY: 0.0016,
          phase: 3.6,
        },
        {
          color: '244, 63, 94',
          alpha: 0.24,
          radius: baseRadius * 0.72,
          orbitX: width * 0.08,
          orbitY: height * 0.07,
          speedX: 0.0023,
          speedY: 0.0018,
          phase: 5,
        },
      ];
    };

    const resize = () => {
      pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = Math.floor(width * pixelRatio);
      canvas.height = Math.floor(height * pixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      lightsRef.current = createLights();

      pointerTargetRef.current = { x: width * 0.5, y: height * 0.5 };
      pointerCurrentRef.current = { x: width * 0.5, y: height * 0.5 };
    };

    const onPointerMove = (event) => {
      pointerTargetRef.current = { x: event.clientX, y: event.clientY };
    };

    const render = (time) => {
      pointerCurrentRef.current.x += (pointerTargetRef.current.x - pointerCurrentRef.current.x) * 0.06;
      pointerCurrentRef.current.y += (pointerTargetRef.current.y - pointerCurrentRef.current.y) * 0.06;

      context.clearRect(0, 0, width, height);

      const gradient = context.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, '#0f172a');
      gradient.addColorStop(0.52, '#1e3a8a');
      gradient.addColorStop(1, '#7f1d1d');
      context.fillStyle = gradient;
      context.fillRect(0, 0, width, height);

      context.globalCompositeOperation = 'screen';

      const lights = lightsRef.current;
      for (let index = 0; index < lights.length; index += 1) {
        const light = lights[index];
        const pulse = 0.88 + Math.sin(time * 0.001 + light.phase) * 0.12;

        const lightX =
          pointerCurrentRef.current.x +
          Math.cos(time * light.speedX + light.phase) * light.orbitX +
          (index % 2 === 0 ? -width * 0.12 : width * 0.08);

        const lightY =
          pointerCurrentRef.current.y +
          Math.sin(time * light.speedY + light.phase) * light.orbitY +
          (index % 2 === 0 ? -height * 0.1 : height * 0.06);

        const radius = light.radius * pulse;

        const radial = context.createRadialGradient(lightX, lightY, 0, lightX, lightY, radius);
        radial.addColorStop(0, `rgba(${light.color}, ${light.alpha})`);
        radial.addColorStop(0.5, `rgba(${light.color}, ${light.alpha * 0.55})`);
        radial.addColorStop(1, `rgba(${light.color}, 0)`);

        context.fillStyle = radial;
        context.beginPath();
        context.arc(lightX, lightY, radius, 0, TAU);
        context.fill();
      }

      context.globalCompositeOperation = 'source-over';
      animationFrameRef.current = window.requestAnimationFrame(render);
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    animationFrameRef.current = window.requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onPointerMove);
      window.cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 h-full w-full"
      style={{ zIndex: -1 }}
    />
  );
};

export default AnimatedBackground;
