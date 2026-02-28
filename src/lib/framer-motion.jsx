import { forwardRef, useEffect, useRef, useState } from 'react';

const toTransform = (yValue) => `translate3d(0, ${typeof yValue === 'number' ? `${yValue}px` : yValue}, 0)`;

const createMotionComponent = (Tag) => {
  const MotionComponent = forwardRef(
    ({
      children,
      className,
      style,
      initial = { opacity: 0, y: 40 },
      whileInView = { opacity: 1, y: 0 },
      transition = { duration: 0.8 },
      viewport = { once: true, amount: 0.2 },
      ...rest
    }, forwardedRef) => {
      const innerRef = useRef(null);
      const [isVisible, setIsVisible] = useState(false);

      useEffect(() => {
        const node = innerRef.current;
        if (!node) return undefined;

        if (typeof window === 'undefined' || typeof window.IntersectionObserver === 'undefined') {
          setIsVisible(true);
          return undefined;
        }

        const observer = new window.IntersectionObserver(
          (entries) => {
            const [entry] = entries;
            if (entry.isIntersecting) {
              setIsVisible(true);
              if (viewport?.once !== false) observer.unobserve(node);
            } else if (viewport?.once === false) {
              setIsVisible(false);
            }
          },
          { threshold: viewport?.amount ?? 0.2 }
        );

        observer.observe(node);
        return () => observer.disconnect();
      }, [viewport]);

      const resolvedStyle = {
        opacity: isVisible ? (whileInView?.opacity ?? 1) : (initial?.opacity ?? 0),
        transform: isVisible ? toTransform(whileInView?.y ?? 0) : toTransform(initial?.y ?? 40),
        transition: `opacity ${transition?.duration ?? 0.8}s ease, transform ${transition?.duration ?? 0.8}s ease`,
        willChange: 'opacity, transform',
        ...style,
      };

      return (
        <Tag
          {...rest}
          ref={(node) => {
            innerRef.current = node;
            if (typeof forwardedRef === 'function') forwardedRef(node);
            else if (forwardedRef) forwardedRef.current = node;
          }}
          className={className}
          style={resolvedStyle}
        >
          {children}
        </Tag>
      );
    }
  );

  MotionComponent.displayName = `Motion(${Tag})`;
  return MotionComponent;
};

export const motion = {
  section: createMotionComponent('section'),
  div: createMotionComponent('div'),
};
