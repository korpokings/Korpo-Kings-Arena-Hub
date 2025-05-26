
import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Info} from 'lucide-react';
import { useEffect } from 'react';
import MysteryPlayer from '@/assets/images/rulesCards/mystery player.png';
import clutch from '@/assets/images/rulesCards/clutch.png';
import overtime from '@/assets/images/rulesCards/overtime.png';
import powerPlayer from '@/assets/images/rulesCards/power play.png';
import HeroBg from '@/assets/images/4.png'
const Rules = () => {
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
          <div className="absolute inset-0 bg-gradient-to-r from-korpo-black via-korpo-black/40 to-korpo-black/2  0"></div>

          <div className="container mx-auto relative h-full flex flex-col justify-center">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">RÈGLES DU JEU</h1>
              <p className="text-xl text-gray-300 mb-8">
                Un format repensé. Un jeu spectaculaire.

              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Team Composition */}
        <section className="mb-16">
          <div className="mb-8 flex items-center">
            <Clock size={32} className="text-korpo-orange mr-3" />
            <h2 className="text-3xl font-bold text-white">Structure de match</h2>
          </div>
          <Card className="bg-korpo-darkgray border-korpo-orange/20 text-white">
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex">
                      <span className="text-korpo-orange font-bold mr-2">•</span> 
                      2 mi-temps de 25 min – équilibre entre intensité et stratégie
                    </li>
                    <li className="flex">
                      <span className="text-korpo-orange font-bold mr-2">•</span> 
                      Pas de hors-jeu – accent sur la construction et le collectif
                    </li>
                    <li className="flex">
                      <span className="text-korpo-orange font-bold mr-2">•</span> 
                      Remplacements illimités – rythme fluide
                    </li>
                    <li className="flex">
                      <span className="text-korpo-orange font-bold mr-2">•</span> 
                      Tirs de loin interdits – jeu resserré, dynamique

                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
        
        {/* Match Format */}
        <section className="mb-16">
          <div className="mb-8 flex items-center">
            <Clock size={32} className="text-korpo-orange mr-3" />
            <h2 className="text-3xl font-bold text-white">Moments clés</h2>
          </div>
          <Card className="bg-korpo-darkgray border-korpo-orange/20 text-white">
            <CardContent className="pt-6">
              <div className="">
                <div>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-korpo-orange font-bold mr-2"></span> 
                      <span className="flex-1"><span className="font-bold text-korpo-orange">Golden Time : </span>Dans la dernière minute, les buts comptent double.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-korpo-orange font-bold mr-2"></span> 
                      <span className="flex-1"><span className="font-bold text-korpo-orange">Golden Zone Freeze : </span>Pendant 2 min, seuls les tirs hors surface comptent.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-korpo-orange font-bold mr-2"></span> 
                      <span className="flex-1"><span className="font-bold text-korpo-orange">Goalkeeper Rush : </span>Le gardien peut monter une fois par match, son but vaut double.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

      {/* Special Rules */}
        <section className="mb-10">
          <div className="mb-8 flex items-center">
            <Info size={32} className="text-korpo-orange mr-3" />
            <h2 className="text-3xl font-bold text-white">Badges stratégiques
</h2>
          </div>
          <Card className="bg-korpo-darkgray border-korpo-orange/20 text-white">
            <CardContent className="pt-6 pb-8">
              <div className="grid grid-cols-1 gap-6">
                {/* Mistery Card */}
                <div className="bg-korpo-black/40 p-4 rounded-lg flex items-center">
                <div className='mr-4'>
                  <img src={MysteryPlayer} className='w-20' />
                </div>
                  <div>
                     <h3 className="text-xl font-bold text-korpo-orange mb-3">Mystery Player</h3>
                     <p className="text-gray-300">Un joueur mystère (influenceur, dirigeant, etc.) entre en jeu.</p>
                  </div>
                </div>
                {/* Power Play */}
                <div className="bg-korpo-black/40 p-4 rounded-lg flex items-center">
                  <div className='mr-4'>
                    <img src={powerPlayer} className='w-20' />
                  </div>
                    <div>
                      <h3 className="text-xl font-bold text-korpo-orange mb-3">Power Play</h3>
                      <p className="text-gray-300">Jouer en supériorité numérique pendant 2 min.</p>
                    </div>
                </div>
                {/* Overtime */}
                <div className="bg-korpo-black/40 p-4 rounded-lg flex items-center">
                            <div className='mr-4'>
                  <img src={overtime} className='w-20' />
                </div>
                  <div>
                  <h3 className="text-xl font-bold text-korpo-orange mb-3">Overtime</h3>
                  <p className="text-gray-300">Ajouter 5 min à un match – une seule fois dans le tournoi.</p>
                  </div>
                </div>
                {/* Clutch */}
                <div className="bg-korpo-black/40 p-4 rounded-lg flex items-center">
                            <div className='mr-4'>
                  <img src={clutch} className='w-20' />
                </div>
                  <div>
                  <h3 className="text-xl font-bold text-korpo-orange mb-3">Clutch</h3>
                  <p className="text-gray-300">Duel face au gardien tiré par le capitaine.</p>
                </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

      </div>

      <Footer />
    </div>
  );
};

export default Rules;
