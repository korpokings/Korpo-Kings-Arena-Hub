
import CountdownTimer from '@/components/CountdownTimer';
import { useInView } from 'react-intersection-observer';
import heroBg from '@/assets/images/2.png';
import Logo from "@/assets/images/logo-final-kkc2.png"
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Calendar, MapPin } from 'lucide-react';

export default function HeroSection() {
  const tournamentDate = new Date("2025-07-30T00:00:00");
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
  <section
    ref={heroRef}
    className={`relative min-h-[90vh] md:min-h-screen flex flex-col items-center justify-center px-2 py-10 md:px-4 md:py-20 transition-opacity duration-1000 ${
      heroInView ? 'opacity-100' : 'opacity-0'
    }`}
    style={{
      backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url(${heroBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'scroll',
    }}
  >  <div className="container mx-auto text-center">
        <div className="mb-4 md:mb-6 flex justify-center">
          <img
            src={Logo}
            alt="Logo"
            className="h-24 w-24 md:h-32 md:w-32 object-contain"
          />
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 md:mb-6 drop-shadow-lg">
          KORPO KINGS CUP 2025
          <span className="block text-korpo-orange text-lg md:text-2xl lg:text-3xl mt-2">
            Le tournoi qui redéfinit le sport en entreprise
          </span>
        </h1>

        <p className="text-lg md:text-l text-white mb-4 md:mb-6 max-w-2xl mx-auto">
          Entrez dans l’arène.
          Offrez à vos équipes une expérience unique, mêlant cohésion, visibilité et
          esprit de compétition.
          Un terrain d’expression pour vos talents, un levier d’image pour votre
          entreprise.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6 md:mb-8 max-w-xl mx-auto">
          <div className="w-full md:w-auto bg-black/30 backdrop-blur-sm rounded-lg p-3 border border-korpo-orange/30 hover:border-korpo-orange transition-all duration-300 flex items-center">
            <Calendar className="h-5 w-5 text-korpo-orange mr-2" />
            <div className="text-left">
              <p className="text-xs text-korpo-orange font-semibold uppercase">Dates du tournoi</p>
              <p className="text-white font-medium">14 sept - 31 oct 2025</p>
            </div>
          </div>

          <div className="w-full md:w-auto bg-black/30 backdrop-blur-sm rounded-lg p-3 border border-korpo-orange/30 hover:border-korpo-orange transition-all duration-300 flex items-center">
            <MapPin className="h-5 w-5 text-korpo-orange mr-2" />
            <div className="text-left">
              <p className="text-xs text-korpo-orange font-semibold uppercase">Lieu</p>
              <p className="text-white font-medium">Arena Ville Verte, Bouskoura</p>
            </div>
          </div>

        </div>

        <div className="mb-8 md:mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">DATE LIMITE D'INSCRIPTION</h2>
          <CountdownTimer targetDate={tournamentDate} />
        </div>

        <Button
          asChild
          className="bg-korpo-orange hover:bg-amber-600 text-white text-base md:text-lg font-bold px-6 py-4 md:px-8 md:py-6 rounded-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
          size="lg"
        >
          <Link to="/inscription">
            <div className='block'>
              <p>INSCRIVEZ-VOUS MAINTENANT</p>
            </div>
          </Link>
        </Button>
      </div>
    </section>
  )
}
