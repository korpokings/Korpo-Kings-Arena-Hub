
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight} from 'lucide-react';
export default function FinalsSection(){
   
    return(
              <section 
        className={`py-20 relative transition-transform duration-1000 `}
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url('https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              LA GRANDE <span className="text-korpo-orange">FINALE</span>
            </h2>
            <div className="flex justify-center">
              <div className="w-24 h-1 bg-korpo-orange"></div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-10 flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80" 
                alt="Célébration" 
                className="rounded-lg w-full h-auto shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-4">L'APOTHÉOSE DU TOURNOI</h3>
              <p className="text-gray-300 mb-6">
                La journée des finales est l'événement phare du Korpo Kings. Bien plus qu'une simple compétition, c'est une véritable fête du football corporate avec animations, remises de prix et célébrations. Une expérience inoubliable pour tous les participants et supporters.
              </p>
              <Button asChild className="bg-korpo-orange hover:bg-amber-600 text-white group">
                <Link to="/finale" className="flex items-center">
                  JOUR DES FINALES
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    )
}
