
import { useState, useEffect, useRef } from 'react';
import heroBg from '@/assets/images/heroBg.avif';
import { useInView } from 'react-intersection-observer';

interface Sponsor {
  id: number;
  name: string;
  logo: string;
}

const SponsorCarousel = () => {
  const sponsors: Sponsor[] = [
    { id: 1, name: 'Sponsor 1', logo: heroBg },
    { id: 2, name: 'Sponsor 2', logo: heroBg },
    { id: 3, name: 'Sponsor 3', logo: heroBg },  
    { id: 4, name: 'Sponsor 4', logo: heroBg },
    { id: 5, name: 'Sponsor 5', logo: heroBg },
    { id: 6, name: 'Sponsor 6', logo: heroBg },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  const containerRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const scrollContainer = containerRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollStep = 1;
    const scrollInterval = 30;

    const scroll = () => {
      if (!containerRef.current) return;
      scrollAmount += scrollStep;
      containerRef.current.scrollLeft = scrollAmount;

      if (scrollAmount >= containerRef.current.scrollWidth / 2) {
        scrollAmount = 0;
      }
    };

    let scrollTimer: number | undefined;
    if (inView) {
      scrollTimer = window.setInterval(scroll, scrollInterval);
    }

    return () => {
      if (scrollTimer) clearInterval(scrollTimer);
    };
  }, [inView]);

  const handleMouseEnter = () => setIsScrolling(false);
  const handleMouseLeave = () => setIsScrolling(true);

  return (
    <div className="w-full overflow-hidden" ref={ref}>
      <div 
        ref={containerRef}
        className="flex py-6 overflow-x-auto scrollbar-none"
        style={{ 
          scrollBehavior: 'smooth',
          msOverflowStyle: 'none', // IE and Edge
          scrollbarWidth: 'none',  // Firefox
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Double the sponsors array to create a loop effect */}
        {[...sponsors, ...sponsors].map((sponsor, index) => (
          <div
            key={`${sponsor.id}-${index}`}
            className="flex-shrink-0 mx-4 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg w-40 sm:w-48 md:w-56 lg:w-64 h-24 sm:h-28 md:h-32 transform transition-all duration-500 hover:scale-105 hover:bg-white/20"
          >
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              className="h-20 sm:h-24 md:h-28 w-36 sm:w-44 md:w-52 object-cover rounded-lg opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
        <style>
          {`
            .scrollbar-none::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default SponsorCarousel;
