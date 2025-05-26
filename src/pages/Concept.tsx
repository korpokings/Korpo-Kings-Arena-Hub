import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Briefcase ,Gamepad ,Star} from "lucide-react";
import conceptBG from "@/assets/images/8.png";
import { useEffect } from "react";

const Concept = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <div className="w-full h-[50vh] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black z-10" />
        <img
          src={conceptBG}
          alt="Corporate teams in action"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-end pb-12">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-white">
            KORPO KINGS <br />
            <span className="text-korpo-orange">Un format unique, pensé pour l’entreprise d’aujourd’hui
            </span>
          </h1>
        </div>
      </div>

      {/* Description Section */}
      <section className="py-12 bg-gradient-to-b from-black to-korpo-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-300 mb-6">
              La Korpo Kings Cup fusionne compétition, communication, cohésion et contenu immersif.
              Chaque match devient un moment fort à vivre en équipe, à partager, à valoriser.
            </p>
            <p className="text-lg text-gray-300">

            </p>
          </div>
        </div>
      </section>

      {/* Infographic Benefits Section */}
      <section className="py-16 bg-korpo-black">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">LES AVANTAGES DE LA PARTICIPATION</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-korpo-black/80 backdrop-blur-sm border border-korpo-orange/20 rounded-lg p-6 text-center transition-all duration-300 hover:border-korpo-orange">
              <div className="w-16 h-16 rounded-full bg-korpo-orange/20 flex items-center justify-center mx-auto mb-4">
                <Gamepad className="text-korpo-orange h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Expérience de Jeu Inédite</h3>
              <p className="text-gray-300">Un terrain habillé, des casters, lumières LED et effets sonores créent une ambiance pro, immersive et spectaculaire à chaque match.
</p>
            </div>

            <div className="bg-korpo-black/80 backdrop-blur-sm border border-korpo-orange/20 rounded-lg p-6 text-center transition-all duration-300 hover:border-korpo-orange">
              <div className="w-16 h-16 rounded-full bg-korpo-orange/20 flex items-center justify-center mx-auto mb-4">
                <Briefcase className="text-korpo-orange h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Plateforme RH Engagée</h3>
              <p className="text-gray-300">Une diffusion live simple en deux clics, qui implique joueurs et collaborateurs, crée cohésion d’équipe, sentiment d’appartenance et renforce la culture d’entreprise.
</p>
            </div>

            <div className="bg-korpo-black/80 backdrop-blur-sm border border-korpo-orange/20 rounded-lg p-6 text-center transition-all duration-300 hover:border-korpo-orange">
              <div className="w-16 h-16 rounded-full bg-korpo-orange/20 flex items-center justify-center mx-auto mb-4">
                <Star className="text-korpo-orange h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Valorisation des Collaborateurs</h3>
              <p className="text-gray-300">Des contenus authentiques sur les réseaux, qui valorisent vos collaborateurs et renforcent marque employeur et attractivité RH.</p>
            </div>
          </div>

        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Concept;
