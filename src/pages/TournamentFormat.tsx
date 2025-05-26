import { useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import TournamentF from '@/assets/images/calnd.png';
import { Link } from 'react-router-dom';
import HeroBg from '@/assets/images/6.png'
const TournamentFormat = () => {
      useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="min-h-screen flex flex-col bg-korpo-black">
      {/* Hero Section */}
      <Navbar />
      <div className="pt-24 md:pt-28 lg:pt-32 px-4 relative">
        <div 
          className="w-full h-[300px] md:h-[400px] bg-cover bg-center relative"
          style={{ backgroundImage: `url(${HeroBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-korpo-black via-korpo-black/40 to-korpo-black/20"></div>
          <div className="container mx-auto relative h-full flex flex-col justify-center">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">FORMAT DU TOURNOI</h1>
              <p className="text-xl text-gray-300 mb-8">
               16 équipes. 2 tableaux. Une chance pour tous. 
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Tournament Structure */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Structure du Tournoi</h2>
          
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
  {/* Phase 1 */}
  <Card className="bg-korpo-darkgray border-korpo-orange/20 text-white hover:border-korpo-orange transition-colors duration-300">
    <CardContent className="pt-6">
      <Badge variant="outline" className="bg-korpo-orange text-white border-none mb-4">Phase 1</Badge>
      <h3 className="text-2xl font-bold text-white mb-3">Phase de Groupes</h3>
      <p className="text-gray-300 mb-4">
        4 groupes de 4 équipes chacun. Chaque équipe joue un minimum de 4 matchs dans cette phase.
      </p>
      <ul className="space-y-2 text-gray-300 mb-4">
        <li className="flex">
          <span className="text-korpo-orange font-bold mr-2">•</span>
          16 équipes réparties équitablement
        </li>
        <li className="flex">
          <span className="text-korpo-orange font-bold mr-2">•</span>
          Format compétitif et inclusif
        </li>
        <li className="flex">
          <span className="text-korpo-orange font-bold mr-2">•</span>
          Matchs garantis pour tous
        </li>
      </ul>
      <div className="text-sm text-gray-400">
        Chaque équipe a la chance de s’exprimer pleinement dès la première phase.
      </div>
    </CardContent>
  </Card>

  {/* Phase 2 */}
  <Card className="bg-korpo-darkgray border-korpo-orange/20 text-white hover:border-korpo-orange transition-colors duration-300">
    <CardContent className="pt-6">
      <Badge variant="outline" className="bg-korpo-orange text-white border-none mb-4">Phase 2</Badge>
      <h3 className="text-2xl font-bold text-white mb-3">Phases Finales</h3>
      <p className="text-gray-300 mb-4">
        Deux parcours pour prolonger l’expérience et maintenir l’intensité.
      </p>
      <ul className="space-y-2 text-gray-300 mb-4">
        <li className="flex">
          <span className="text-korpo-orange font-bold mr-2">•</span>
          Phase principale : pour le titre de Champion KKC
        </li>
        <li className="flex">
          <span className="text-korpo-orange font-bold mr-2">•</span>
          Phase alternative : un second parcours compétitif
        </li>
        <li className="flex">
          <span className="text-korpo-orange font-bold mr-2">•</span>
          Matchs à élimination directe
        </li>
      </ul>
      <div className="text-sm text-gray-400">
        Tout le monde reste en jeu jusqu’au bout, pour la gagne ou pour l’honneur.
      </div>
    </CardContent>
  </Card>

  {/* Phase 3 */}
  <Card className="bg-korpo-darkgray border-korpo-orange/20 text-white hover:border-korpo-orange transition-colors duration-300">
    <CardContent className="pt-6">
      <Badge variant="outline" className="bg-korpo-orange text-white border-none mb-4">Phase 3</Badge>
      <h3 className="text-2xl font-bold text-white mb-3">Supercup</h3>
      <p className="text-gray-300 mb-4">
        Un ultime duel symbolique pour désigner l’élite de cette édition.
      </p>
      <ul className="space-y-2 text-gray-300 mb-4">
        <li className="flex">
          <span className="text-korpo-orange font-bold mr-2">•</span>
          Champion de la phase principale vs Champion de la phase alternative
        </li>
        <li className="flex">
          <span className="text-korpo-orange font-bold mr-2">•</span>
          Format prestige et show final
        </li>
        <li className="flex">
          <span className="text-korpo-orange font-bold mr-2">•</span>
          Clôture spectaculaire du tournoi
        </li>
      </ul>
      <div className="text-sm text-gray-400">
        Un face-à-face épique pour couronner l’excellence et célébrer tous les talents.
      </div>
    </CardContent>
  </Card>
</div>


          {/* Tournament Bracket Visualization */}
          <Card className="bg-korpo-darkgray border-korpo-orange/20 text-white mb-12">
            <CardContent className="pt-6 pb-8">
              <h3 className="text-2xl font-bold mb-6 text-center text-white">Parcours vers la Victoire</h3>
              <div className="w-full flex justify-center items-center"> 
                  <img src={TournamentF} className='w-[50%]' />
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Prêt à Relever le Défi?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Inscrivez votre entreprise dès maintenant pour participer à cette aventure footballistique unique et tenter de remporter le prestigieux trophée Korpo Kings.
          </p>
          <Link to="/inscription">
          <Button className="bg-korpo-orange hover:bg-amber-600 text-white px-8 py-6 text-lg">
            INSCRIVEZ VOTRE ÉQUIPE
          </Button>
          </Link>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default TournamentFormat;
