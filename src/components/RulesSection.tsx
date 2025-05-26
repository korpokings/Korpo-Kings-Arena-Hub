import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Info, Clock } from 'lucide-react';
export default function RulesSection() {

  return (
    <section
      className={`py-20 bg-korpo-black transition-transform duration-1000 `}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            RÈGLES <span className="text-korpo-orange">ESSENTIELLES</span>
          </h2>
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-korpo-orange"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-10">
          {/* Team Composition */}
          <div className="bg-korpo-black/50 backdrop-blur-sm p-6 rounded-lg border border-korpo-orange/20 hover:border-korpo-orange transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 rounded-full bg-korpo-orange/20 flex items-center justify-center mr-4">
                <Users className="w-8 h-8 text-korpo-orange" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Composition d'Équipe</h3>
                <p className="text-gray-300">7 joueurs (5 + 2 remplaçants)</p>
              </div>
            </div>
            <ul className="space-y-2 text-gray-300 pl-2">
              <li className="flex items-start">
                <span className="text-korpo-orange mr-2">•</span>
                <span>2 invités max + 1 "Joker" autorisés</span>
              </li>
              <li className="flex items-start">
                <span className="text-korpo-orange mr-2">•</span>
                <span>Remplacements illimités</span>
              </li>
            </ul>
          </div>

          {/* Match Duration */}
          <div className="bg-korpo-black/50 backdrop-blur-sm p-6 rounded-lg border border-korpo-orange/20 hover:border-korpo-orange transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 rounded-full bg-korpo-orange/20 flex items-center justify-center mr-4">
                <Clock className="w-8 h-8 text-korpo-orange" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Durée du Match</h3>
                <p className="text-gray-300">2 × 25 minutes</p>
              </div>
            </div>
            <ul className="space-y-2 text-gray-300 pl-2">
              <li className="flex items-start">
                <span className="text-korpo-orange mr-2">•</span>
                <span>Pas de hors-jeu</span>
              </li>
              <li className="flex items-start">
                <span className="text-korpo-orange mr-2">•</span>
                <span>Tirs de loin interdits</span>
              </li>
            </ul>
          </div>

          {/* Golden Time */}
          <div className="bg-korpo-black/50 backdrop-blur-sm p-6 rounded-lg border border-korpo-orange/20 hover:border-korpo-orange transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 rounded-full bg-korpo-orange/20 flex items-center justify-center mr-4">
                <span className="text-2xl font-bold text-korpo-orange">2×</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Golden Time</h3>
                <p className="text-gray-300">Dernière minute décisive</p>
              </div>
            </div>
            <p className="text-gray-300">
              <span className="text-korpo-orange font-bold">Règle:</span> Les buts marqués dans la dernière minute comptent double.
            </p>
          </div>

          {/* Special Rules */}
          <div className="bg-korpo-black/50 backdrop-blur-sm p-6 rounded-lg border border-korpo-orange/20 hover:border-korpo-orange transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 rounded-full bg-korpo-orange/20 flex items-center justify-center mr-4">
                <Info className="w-8 h-8 text-korpo-orange" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Règles Spéciales</h3>
                <p className="text-gray-300">Badges stratégiques</p>
              </div>
            </div>
            <ul className="space-y-2 text-gray-300 pl-2">
              <li className="flex items-start">
                <span className="text-korpo-orange mr-2">•</span>
                <span>Power Play (2 min en supériorité)</span>
              </li>
              <li className="flex items-start">
                <span className="text-korpo-orange mr-2">•</span>
                <span>Overtime (+5 min une fois/tournoi)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <Button asChild className="bg-korpo-orange hover:bg-amber-600 text-white group">
            <Link to="/regles" className="flex items-center">
              RÈGLEMENT COMPLET
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}