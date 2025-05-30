import { useEffect, useState } from 'react';

interface UseCounterOptions {
  start?: number;
  end: number;
  duration?: number;
  delay?: number;
  easing?: (t: number) => number;
}

const easeOutQuart = (t: number): number => 1 - Math.pow(1 - t, 4);

export const useCounter = (options: UseCounterOptions) => {
  const {
    start = 0,
    end,
    duration = 2000,
    delay = 0,
    easing = easeOutQuart
  } = options;

  const [count, setCount] = useState(start);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp + delay;
      
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      if (progress >= 0) {
        const easedProgress = easing(progress);
        const currentCount = start + (end - start) * easedProgress;
        setCount(Math.floor(currentCount));
      }

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [start, end, duration, delay, easing]);

  return count;
}; 