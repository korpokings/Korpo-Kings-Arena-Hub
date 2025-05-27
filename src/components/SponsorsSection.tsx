
import SponsorCarousel from '@/components/SponsorCarousel';
import { useInView } from 'react-intersection-observer';

export default function SponsorsSection() {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });
    
    return(
        <section 
          ref={ref} 
          className={`py-12 md:py-16 bg-korpo-black transition-transform duration-1000 ${
            inView ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                NOS <span className="text-korpo-orange">SPONSORS</span>
              </h2>
              <div className="w-20 md:w-24 h-1 bg-korpo-orange mx-auto my-4 md:my-6"></div>
              <p className="text-white/80 max-w-2xl mx-auto">
                Ils nous font confiance pour organiser le plus grand tournoi corporate du Maroc
              </p>
            </div>
            
            <SponsorCarousel />
          </div>
        </section>
    )
}
