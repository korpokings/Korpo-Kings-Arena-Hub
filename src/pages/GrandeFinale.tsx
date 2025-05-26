
import { useState, useEffect } from 'react';
import { Layout } from '@/components/Layout';
import { useInView } from 'react-intersection-observer';
import { 
  Trophy, 
  Calendar, 
  MapPin, 
  Award, 
  Users,
  Video,
  Utensils,
  Music
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Card,
  CardContent,
  CardHeader,
  CardTitle 
} from '@/components/ui/card';
import logoFinals from '@/assets/images/logo-final-kkc2.png';
import HeroBg from '@/assets/images/7.png'
const GrandeFinale = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: activitiesRef, inView: activitiesInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
useEffect(() => {
  window.scrollTo(0, 0);
},[])
  return (
    <Layout>
      {/* Hero Section */}
      <section 
        ref={headerRef}
        className={`relative min-h-[70vh] flex items-center justify-center px-4 py-12 md:py-24 transition-opacity duration-1000 ${
          headerInView ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${HeroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="container mx-auto text-center">
          <div className="flex justify-center mb-4">
            <img src={logoFinals} alt="Logo Korpo Kings" className="w-40 animate-pulse" />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            LE <span className="text-korpo-orange">GRAND SOIR A L'ARENA</span>
          </h1>
          
          <div className="w-24 h-1 bg-korpo-orange mx-auto mb-8"></div>
          
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto mb-8">
            L'apothéose du tournoi Korpo Kings, une journée spectaculaire de football, célébrations et remises de prix.
          </p>

          {/* Date and Location Cards */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
            <div className="w-full md:w-auto bg-black/30 backdrop-blur-sm rounded-lg p-3 border border-korpo-orange/30 hover:border-korpo-orange transition-all duration-300 flex items-center">
              <Calendar className="h-5 w-5 text-korpo-orange mr-2" />
              <div className="text-left">
                <p className="text-xs text-korpo-orange font-semibold uppercase">Date</p>
                <p className="text-white font-medium">30 octobre 2025</p>
              </div>
            </div>
            
            <div className="w-full md:w-auto bg-black/30 backdrop-blur-sm rounded-lg p-3 border border-korpo-orange/30 hover:border-korpo-orange transition-all duration-300 flex items-center">
              <MapPin className="h-5 w-5 text-korpo-orange mr-2" />
              <div className="text-left">
                <p className="text-xs text-korpo-orange font-semibold uppercase">Lieu</p>
                <p className="text-white font-medium">Arena Ville Verte</p>
              </div>
            </div>
          </div>

          <Button 
            asChild
            size="lg"
            className="bg-korpo-orange hover:bg-amber-600 text-white text-lg px-8 py-6 mt-4 animate-bounce"
          >
            <a href="#programme">DÉCOUVRIR LE PROGRAMME</a>
          </Button>
        </div>
      </section>

{/* Activities Section */}
<section 
  ref={activitiesRef}
  id='programme'
  className={`py-20 bg-korpo-black transition-opacity duration-1000 ${
    activitiesInView ? 'opacity-100' : 'opacity-0'
  }`}
>
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        ACTIVITÉS <span className="text-korpo-orange">& ATTRACTIONS</span>
      </h2>
      <div className="w-24 h-1 bg-korpo-orange mx-auto mb-6"></div>
      <p className="text-xl text-gray-300 max-w-2xl mx-auto">
        Une expérience immersive au-delà du football
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {/* Activité 1 */}
      <div className="bg-black/40 rounded-lg p-6 border border-korpo-orange/30 transform transition-transform hover:scale-105 hover:border-korpo-orange">
        <div className="flex justify-between items-start">
          <div className="bg-korpo-orange rounded-full h-12 w-12 flex items-center justify-center mb-4">
            <MapPin className="h-6 w-6 text-white" />
          </div>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Terrain scénique</h3>
        <p className="text-gray-300">
          Un terrain aménagé pour une expérience visuelle exceptionnelle.
        </p>
      </div>

      {/* Activité 2 */}
      <div className="bg-black/40 rounded-lg p-6 border border-korpo-orange/30 transform transition-transform hover:scale-105 hover:border-korpo-orange">
        <div className="flex justify-between items-start">
          <div className="bg-korpo-orange rounded-full h-12 w-12 flex items-center justify-center mb-4">
            <Music className="h-6 w-6 text-white" />
          </div>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Concert live, DJ, animations</h3>
        <p className="text-gray-300">
          Ambiance festive avec concert live et animation musicale. DJ professionnel pour rythmer la journée et la soirée.
        </p>
      </div>

      {/* Activité 3 */}
      <div className="bg-black/40 rounded-lg p-6 border border-korpo-orange/30 transform transition-transform hover:scale-105 hover:border-korpo-orange">
        <div className="flex justify-between items-start">
          <div className="bg-korpo-orange rounded-full h-12 w-12 flex items-center justify-center mb-4">
            <Utensils className="h-6 w-6 text-white" />
          </div>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Food court & zone supporters</h3>
        <p className="text-gray-300">
          Espace dédié à la restauration avec variété de stands gourmands et zones confortables pour les supporters.
        </p>
      </div>

      {/* Activité 4 */}
      <div className="bg-black/40 rounded-lg p-6 border border-korpo-orange/30 transform transition-transform hover:scale-105 hover:border-korpo-orange">
        <div className="flex justify-between items-start">
          <div className="bg-korpo-orange rounded-full h-12 w-12 flex items-center justify-center mb-4">
            <Video className="h-6 w-6 text-white" />
          </div>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Streaming en direct & capsules médias</h3>
        <p className="text-gray-300">
          Diffusion en streaming pour les absents ou partenaires distants. Capsules vidéo pour immortaliser les moments clés.
        </p>
      </div>

      {/* Activité 5 */}
      <div className="bg-black/40 rounded-lg p-6 border border-korpo-orange/30 transform transition-transform hover:scale-105 hover:border-korpo-orange">
        <div className="flex justify-between items-start">
          <div className="bg-korpo-orange rounded-full h-12 w-12 flex items-center justify-center mb-4">
            <Users className="h-6 w-6 text-white" />
          </div>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Places incluses par entreprise</h3>
        <p className="text-gray-300">
          30 places incluses par entreprise. 50 places pour les entreprises finalistes.
        </p>
      </div>

    </div>
  </div>
</section>
 {/* Prizes Section */}
      <section 
       
        className={`py-20 relative bg-korpo-black transition-opacity duration-1000 `}
        
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              LES <span className="text-korpo-orange">RÉCOMPENSES</span>
            </h2>
            <div className="w-24 h-1 bg-korpo-orange mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
             Les trophées sont remis dans vos locaux le 31 octobre pour prolonger l’expérience et célébrer votre victoire en interne.
            </p>
          </div>

          <div className=" max-w-5xl mx-auto">
            <Card className="bg-black/40 border-korpo-orange/30 hover:border-korpo-orange transition-all duration-300 text-white">
              <CardHeader className="text-center">
                <Trophy className="h-16 w-16 mx-auto text-korpo-orange" />
                <CardTitle className="text-2xl mt-4 text-white">Équipe Championne</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <ul className="space-y-2 text-gray-300">
                  <li className="flex justify-center items-center gap-2">
                    <Award className="h-4 w-4 text-korpo-orange" />
                    <span>Trophée Korpo Kings</span>
                  </li>
              
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default GrandeFinale;
