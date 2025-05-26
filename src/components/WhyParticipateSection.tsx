import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight , Users ,Award  , Network} from 'lucide-react';
export default function WhyParticipateSection() {
  return (
       <section 
        className={`py-20 bg-korpo-black  transition-transform duration-1000`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              POURQUOI <span className="text-korpo-orange">PARTICIPER?</span>
            </h2>
            <div className="flex justify-center">
              <div className="w-24 h-1 bg-korpo-orange"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-10">
            <div className="bg-korpo-black/50 backdrop-blur-sm p-6 rounded-lg border border-korpo-orange/20 hover:border-korpo-orange transition-all duration-300 text-center">
              <div className="text-korpo-orange mb-4 flex justify-center">
                <Users className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Défi d’équipe motivant</h3>
              <p className="text-gray-300">Fédérez vos collaborateurs autour d’un challenge dynamique et porteur de sens.</p>
            </div>

            <div className="bg-korpo-black/50 backdrop-blur-sm p-6 rounded-lg border border-korpo-orange/20 hover:border-korpo-orange transition-all duration-300 text-center">
              <div className="text-korpo-orange mb-4 flex justify-center">
                <Award className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Visibilité de Marque</h3>
              <p className="text-gray-300">TikTok, Instagram, Twitch, YouTube, LinkedIn, presse, influenceurs, et plus encore..</p>
            </div>

            <div className="bg-korpo-black/50 backdrop-blur-sm p-6 rounded-lg border border-korpo-orange/20 hover:border-korpo-orange transition-all duration-300 text-center">
              <div className="text-korpo-orange mb-4 flex justify-center">
                <Network className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Networking</h3>
              <p className="text-gray-300">Réseautage avec les autres entreprises participantes (Dislog, BOA, Tractafric, etc.).</p>
            </div>
          </div>

          <div className="text-center">
            <Button asChild className="bg-korpo-orange hover:bg-amber-600 text-white group">
              <Link to="/pourquoi-participer" className="flex items-center">
                VOIR TOUS LES AVANTAGES
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
  )
}