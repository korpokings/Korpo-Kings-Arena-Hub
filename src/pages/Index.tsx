
import { Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import WhyParticipateSection from '@/components/WhyParticipateSection';
import RulesSection from '@/components/RulesSection';
import TournamentFormatSection from '@/components/TournementFormatSection';
import LastNewsSection from '@/components/LastNewsSection';
import FinalsSection from '@/components/FinalsSection';
import SocialSection from '@/components/SocialSection';
import RegisterBg from '@/assets/images/4.png'

const Index = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])


  return (
    <Layout>

      {/* Hero Section */}
      <HeroSection />

      {/* Why Participate Section */}
      <WhyParticipateSection />

      {/* Rules Section */}
      <RulesSection />

      {/* Tournament Format Section */}
      <TournamentFormatSection />

      {/* News Section */}
      

      {/* Finals Section */}
      <FinalsSection />

      {/* Contact & Social Section */}
      <SocialSection/>

      {/* Registration Section */}
      <section
        id="register"
        className={`py-20 relative transition-transform duration-1000`}
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9)), url(${RegisterBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              INSCRIPTION <span className="text-korpo-orange">RAPIDE</span>
            </h2>
            <div className="w-24 h-1 bg-korpo-orange mx-auto my-6"></div>

            <p className="text-xl text-white mb-8">
              Le tournoi corporate le plus innovant du Maroc. Règles inédites, badges tactiques, shows inoubliables… Places limitées, ne ratez pas votre chance !
            </p>

            <Button
              asChild
              className="bg-korpo-orange hover:bg-amber-600 text-white text-lg font-bold px-8 py-6 rounded-md animate-pulse"
              size="lg"
            >
              <Link to="/inscription">S'INSCRIRE MAINTENANT</Link>
            </Button>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default Index;
