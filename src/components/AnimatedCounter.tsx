
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  label: string;
  suffix?: string;
}

const AnimatedCounter = ({ end, duration = 2000, label, suffix = '' }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const currentCount = Math.floor(progress * end);
        
        setCount(currentCount);
        countRef.current = currentCount;

        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      
      window.requestAnimationFrame(step);
    }
  }, [inView, end, duration]);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="text-4xl md:text-5xl font-extrabold text-korpo-orange">
        {count}{suffix}
      </div>
      <p className="text-gray-300 font-medium mt-2 text-center">{label}</p>
    </div>
  );
};

export default AnimatedCounter;
