import { useState, useEffect, useRef } from 'react';
import MDNT from '@/assets/images/LOGO MDNT STUDIO.svg';
import DISLOG from '@/assets/images/disloog.png';
import KORAA from '@/assets/images/KORAA.png';
import LE7TV from '@/assets/images/LE7TV.png';
import MARS from '@/assets/images/MARS.png';
import NRJ from '@/assets/images/NRJ.png';
import TELQUEL from '@/assets/images/TELQUELL.png';
import HORIZON from '@/assets/images/HORIZON.png';
import A532 from '@/assets/images/5322.png';
import { useInView } from 'react-intersection-observer';

interface Sponsor {
  id: number;
  name: string;
  logo: string;
}

const SponsorCarousel = () => {
  const sponsors: Sponsor[] = [
    { id: 1, name: 'Sponsor 1', logo: MDNT },
    { id: 2, name: 'Sponsor 2', logo: DISLOG },
    { id: 3, name: 'Sponsor 3', logo: NRJ },  
    { id: 4, name: 'Sponsor 4', logo: A532 },
    { id: 5, name: 'Sponsor 5', logo: MARS },
    { id: 6, name: 'Sponsor 6', logo: TELQUEL },
    { id: 7, name: 'Sponsor 7', logo: LE7TV },
    { id: 8, name: 'Sponsor 8', logo: KORAA },
    { id: 9, name: 'Sponsor 9', logo: HORIZON },
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
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {[...sponsors, ...sponsors].map((sponsor, index) => (
          <div
            key={`${sponsor.id}-${index}`}
            className="flex-shrink-0 mx-4 flex items-center justify-center w-[120px] h-[80px] transition-transform duration-500 hover:scale-105"
          >
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              className="w-full h-full object-contain opacity-90 hover:opacity-100 transition-opacity"
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
