
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center bg-korpo-black py-20">
        <div className="text-center px-4">
          <div className="mb-6">
            <div className="w-20 h-20 mx-auto shield-clip bg-gradient-to-br from-korpo-orange to-amber-600 flex items-center justify-center">
              <span className="text-white font-extrabold text-xl">KK</span>
            </div>
          </div>
          
          <h1 className="text-6xl font-extrabold text-korpo-orange mb-4">404</h1>
          <p className="text-2xl text-white mb-8">Oups ! Page introuvable</p>
          <p className="text-gray-300 mb-8 max-w-md mx-auto">
            La page que vous recherchez n'existe pas. Elle a peut-être été déplacée ou supprimée.
          </p>
          
          <Button asChild className="bg-korpo-orange hover:bg-amber-600 text-white">
            <Link to="/">Retour à l'Accueil</Link>
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
