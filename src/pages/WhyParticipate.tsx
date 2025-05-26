
import { useState ,useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Target, Camera, Network, Smile, Globe, Trophy } from "lucide-react";

import { Link } from "react-router-dom";
import whyPaticipateBg from "@/assets/images/5.png";
// Benefit card component
const BenefitCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
  return (
    <div className="bg-korpo-black/80 backdrop-blur-sm rounded-lg p-6 border border-korpo-orange/20 hover:border-korpo-orange transition-all duration-300 h-full flex flex-col">
      <div className="text-korpo-orange mb-4 flex justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

const WhyParticipate = () => {

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
          src={whyPaticipateBg} 
          alt="Celebrating team" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-end pb-12">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-white">
            Bien plus qu’un tournoi. <br />
            <span className="text-korpo-orange"> Une opportunité à 360°</span>
          </h1>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-12 bg-gradient-to-b from-black to-korpo-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-300 mb-6">
              Participer à Korpo Kings, c'est bien plus qu'inscrire votre entreprise à un tournoi de football. C'est investir dans une expérience transformatrice qui apportera des bénéfices tangibles à votre organisation, à votre équipe et à votre image de marque.
            </p>
            <p className="text-lg text-gray-300">
              Découvrez comment notre tournoi corporate premium peut devenir un levier stratégique pour votre entreprise, renforçant vos équipes internes tout en développant votre réseau professionnel dans un cadre prestigieux et médiatisé.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
  <section className="py-16 bg-korpo-black">
  <div className="container mx-auto px-4">
    <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
      LES BÉNÉFICES POUR VOTRE ENTREPRISE
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
      <BenefitCard 
        icon={<Target size={48} />} 
        title="Défi d’équipe motivant"
        description="Fédérez vos collaborateurs autour d’un challenge dynamique et porteur de sens."
      />
      
      <BenefitCard 
        icon={<Smile size={48} />} 
        title="Aventure collective fédératrice"
        description="Renforcez l’esprit d’appartenance grâce à une aventure collective impactante."
      />
      
      <BenefitCard 
        icon={<Globe size={48} />} 
        title="Visibilité multi-canaux"
        description="TikTok, Instagram, Twitch, YouTube, LinkedIn, presse, influenceurs, et plus encore."
      />
      
      <BenefitCard 
        icon={<Camera size={48} />} 
        title="Contenu valorisant"
        description="Captation pro, ralentis, interviews, reels, stories, et bien plus."
      />
      
      <BenefitCard 
        icon={<Network size={48} />} 
        title="Opportunités de réseautage"
        description="Échangez avec d’autres entreprises participantes."
      />
      
      <BenefitCard 
        icon={<Trophy size={48} />} 
        title="Finale événementielle"
        description="Concert, presse, influenceurs, 600+ invités, food court, et animations."
      />
    </div>
  </div>
</section>


      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-black to-korpo-black relative">
        <div className="absolute inset-0 bg-[url('./assets/images/4.png')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              REJOIGNEZ L'ÉLITE DU FOOTBALL CORPORATE
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Ne manquez pas cette opportunité unique de transformer votre entreprise, de motiver vos équipes et de développer votre réseau professionnel.
            </p>
            <Link to="/inscription">
            <Button className="bg-korpo-orange hover:bg-amber-600 text-white font-semibold text-lg px-8 py-6">
              INSCRIVEZ VOTRE ÉQUIPE
            </Button>
            </Link>
            
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhyParticipate;
