
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Logo from "@/assets/images/logo-final-kkc2.png"

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-korpo-black py-2 shadow-lg' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img
            src={Logo} 
            alt="Logo"
            className="h-11 w-11 mr-2"></img>
          <span className="text-white font-bold text-xl">KORPO KINGS</span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className={`text-white font-medium hover:text-korpo-orange transition-colors ${location.pathname === '/' ? 'text-korpo-orange' : ''}`}>
            Accueil
          </Link>
          <Link to="/concept" className={`text-white font-medium hover:text-korpo-orange transition-colors ${location.pathname === '/concept' ? 'text-korpo-orange' : ''}`}>
            Le Concept
          </Link>
          <Link to="/pourquoi-participer" className={`text-white font-medium hover:text-korpo-orange transition-colors ${location.pathname === '/pourquoi-participer' ? 'text-korpo-orange' : ''}`}>
            Pourquoi Participer
          </Link>
          <Link to="/regles" className={`text-white font-medium hover:text-korpo-orange transition-colors ${location.pathname === '/regles' ? 'text-korpo-orange' : ''}`}>
            Règles
          </Link>
          <Link to="/format-tournoi" className={`text-white font-medium hover:text-korpo-orange transition-colors ${location.pathname === '/format-tournoi' ? 'text-korpo-orange' : ''}`}>
            Format
          </Link>
          <Link to="/newsroom" className={`text-white font-medium hover:text-korpo-orange transition-colors ${location.pathname === '/newsroom' ? 'text-korpo-orange' : ''}`}>
            Newsroom
          </Link>
          <Link to="/finale" className={`text-white font-medium hover:text-korpo-orange transition-colors ${location.pathname === '/finale' ? 'text-korpo-orange' : ''}`}>
            La finale
          </Link>
          
          <Link to="/inscription">
            <Button className="bg-korpo-orange hover:bg-amber-600 text-white font-semibold">
              INSCRIVEZ-VOUS
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-korpo-black py-4 px-4 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link to="/" className={`text-white font-medium hover:text-korpo-orange transition-colors ${location.pathname === '/' ? 'text-korpo-orange' : ''}`}>
              Accueil
            </Link>
            <Link to="/concept" className={`text-white font-medium hover:text-korpo-orange transition-colors ${location.pathname === '/concept' ? 'text-korpo-orange' : ''}`}>
              Le Concept
            </Link>
            <Link to="/pourquoi-participer" className={`text-white font-medium hover:text-korpo-orange transition-colors ${location.pathname === '/pourquoi-participer' ? 'text-korpo-orange' : ''}`}>
              Pourquoi Participer
            </Link>
            <Link to="/regles" className={`text-white font-medium hover:text-korpo-orange transition-colors ${location.pathname === '/regles' ? 'text-korpo-orange' : ''}`}>
              Règles
            </Link>
            <Link to="/format-tournoi" className={`text-white font-medium hover:text-korpo-orange transition-colors ${location.pathname === '/format-tournoi' ? 'text-korpo-orange' : ''}`}>
              Format
            </Link>
            <Link to="/newsroom" className={`text-white font-medium hover:text-korpo-orange transition-colors ${location.pathname === '/newsroom' ? 'text-korpo-orange' : ''}`}>
              Newsroom
            </Link>
            <Link to="/finale" className={`text-white font-medium hover:text-korpo-orange transition-colors ${location.pathname === '/contact' ? 'text-korpo-orange' : ''}`}>
              La finale
            </Link>
            
            <Link to="/inscription">
            <Button className="bg-korpo-orange hover:bg-amber-600 text-white font-semibold">
              INSCRIVEZ-VOUS
            </Button>
          </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
