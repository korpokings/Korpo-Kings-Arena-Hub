
import { useInView } from 'react-intersection-observer';
import AnimatedCounter from '@/components/AnimatedCounter';

export default function StatisticsSection(){
      const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
    return(
            <section 
        ref={statsRef}
        className={`py-20 bg-korpo-black transition-opacity duration-1000 ${
          statsInView ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              NOS <span className="text-korpo-orange">STATISTIQUES</span>
            </h2>
            <div className="w-24 h-1 bg-korpo-orange mx-auto my-6"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedCounter end={32} label="Entreprises Participantes" />
            <AnimatedCounter end={0} label="Matches Joués" />
            <AnimatedCounter end={0} label="Buts Marqués" />
            <AnimatedCounter end={1200} label="Joueurs" suffix="+" />
          </div>
        </div>
      </section>
    )
}