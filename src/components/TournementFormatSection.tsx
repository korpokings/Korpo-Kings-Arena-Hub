import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Trophy, ListCheck, Grid3x3 } from 'lucide-react';
export default function TournamentFormatSection() {
  return (
    <section
      className={`py-20 bg-korpo-black transition-transform duration-1000 `}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            FORMAT DU <span className="text-korpo-orange">TOURNOI</span>
          </h2>
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-korpo-orange"></div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-10">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-4">
            <div className="w-full md:w-1/3 text-center">
              <div className="w-24 h-24 rounded-full bg-korpo-black border-2 border-korpo-orange mx-auto flex items-center justify-center mb-4">
                <Grid3x3 className="w-12 h-12 text-korpo-orange" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Phase de Groupes</h3>
              <p className="text-gray-300">4 groupes de 8 équipes</p>
            </div>

            <div className="hidden md:block text-korpo-orange">
              <ArrowRight className="w-8 h-8" />
            </div>

            <div className="w-full md:w-1/3 text-center">
              <div className="w-24 h-24 rounded-full bg-korpo-black border-2 border-korpo-orange mx-auto flex items-center justify-center mb-4">
                <ListCheck className="w-12 h-12 text-korpo-orange" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Phase Éliminatoire</h3>
              <p className="text-gray-300">1/4, 1/2 et finales</p>
            </div>

            <div className="hidden md:block text-korpo-orange">
              <ArrowRight className="w-8 h-8" />
            </div>

            <div className="w-full md:w-1/3 text-center">
              <div className="w-24 h-24 rounded-full bg-korpo-black border-2 border-korpo-orange mx-auto flex items-center justify-center mb-4">
                <Trophy className="w-12 h-12 text-korpo-orange" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Grande Finale</h3>
              <p className="text-gray-300">Journée événementielle</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button asChild className="bg-korpo-orange hover:bg-amber-600 text-white group">
            <Link to="/format-tournoi" className="flex items-center">
              DÉCOUVRIR LE FORMAT
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}