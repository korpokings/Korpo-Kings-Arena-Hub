
import { Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import ConceptSection from '@/components/ConceptSection';
import WhyParticipateSection from '@/components/WhyParticipateSection';
import RulesSection from '@/components/RulesSection';
import TournamentFormatSection from '@/components/TournementFormatSection';
import LastNewsSection from '@/components/LastNewsSection';
import FinalsSection from '@/components/FinalsSection';
import StatisticsSection from '@/components/StatisticsSection';
import SocialSection from '@/components/SocialSection';


const Index = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])


  return (
    <Layout>

      {/* Hero Section */}
      <HeroSection />

      {/* Concept Section */}
      <ConceptSection />

      {/* Why Participate Section */}
      <WhyParticipateSection />

      {/* Rules Section */}
      <RulesSection />

      {/* Tournament Format Section */}
      <TournamentFormatSection />

      {/* News Section */}
      <LastNewsSection />

      {/* Finals Section */}
      <FinalsSection />

      {/* Statistics Section */}
      <StatisticsSection />

      {/* Registration Section */}
      <section
        id="register"
        className={`py-20 relative transition-transform duration-1000`}
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9)), url('./src/assets/images/4.png')`,
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
              Ne manquez pas cette occasion unique de participer au plus grand tournoi de football corporate du Maroc. Les places sont limitées !
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

      {/* Contact & Social Section */}
      <SocialSection/>

    </Layout>
  );
};

export default Index;
