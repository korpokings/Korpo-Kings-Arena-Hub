import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import StepsTimeLine from '@/components/StepsTimeLine';
import ConceptBg from '@/assets/images/AI_Image.png';

export default function ConceptSection() {

  return (
    <section
      className={`py-20 bg-gradient-to-b bg-korpo-black transition-transform duration-1000 `}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            DÉCOUVREZ <span className="text-korpo-orange">KORPO KINGS</span>
          </h2>
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-korpo-orange"></div>
          </div>
        </div>
        <div className="max-w-[85rem] px-4  sm:px-6 lg:px-8  mx-auto">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
            <div className="lg:col-span-7">
              <div className="grid grid-cols-5 gap-2 sm:gap-6 items-center lg:-translate-x-10">
                <div className="col-span-5">
                  <img className="rounded-xl  w-full" src={ConceptBg} alt="Features Image" />
                </div>


              </div>
            </div>

            <div className="mt-5 sm:mt-10 lg:mt-0 lg:col-span-5">

              <p className="text-lg text-gray-300 mb-2">
                La Korpo Kings Cup fusionne compétition, communication, cohésion et contenu immersif.
                Chaque match devient un moment fort à vivre en équipe, à partager, à valoriser.
              </p>
              <StepsTimeLine />
              <Button asChild className="mt-2 bg-korpo-orange hover:bg-amber-600 text-white group">
                <Link to="/concept" className="flex items-center">
                  LIRE PLUS
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}