
import { Link } from 'react-router-dom';
import {
  FaInstagram,
  FaTiktok,
  FaFacebookF,
  FaXTwitter,
  FaYoutube,
  FaKickstarterK,
  FaTwitch,
  FaLinkedinIn,
} from "react-icons/fa6";
import Logo from "@/assets/images/logo-final-kkc2.png"

const Footer = () => {
  const NewsletterSubmit = (e) => {
    e.preventDefault();
    console.log("Newsletter subscription submitted");
  };
  return (
    <footer className="bg-korpo-black text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-10 h-10 mr-3 flex items-center justify-center">
                <Link to="/" className="flex items-center">
          <img
            src={Logo} 
            alt="Logo"
            className="h-11 w-11 mr-2"></img>
        </Link>
              </div>
              <h3 className="text-xl font-bold">KORPO KINGS</h3>
            </div>
            <p className="text-sm text-gray-300">
              Le premier tournoi corporate de football au Maroc qui allie spectacle, règles inédites et expérience immersive.
            </p>
            {/* Réseaux sociaux */}
      <div className="flex justify-start flex-wrap gap-4 mb-6">
        <SocialIcon href="https://instagram.com/korpokings/" icon={<FaInstagram />} />
        <SocialIcon href="https://www.tiktok.com/@korpo.kings" icon={<FaTiktok />} />
        <SocialIcon href="https://www.facebook.com/61573498238652" icon={<FaFacebookF />} />
        <SocialIcon href="https://x.com/Korpokings" icon={<FaXTwitter />} />
        <SocialIcon href="https://www.youtube.com/@KorpoKingsMaroc" icon={<FaYoutube />} />
        <SocialIcon href="https://kick.com/korpokings" icon={<FaKickstarterK />} />
        <SocialIcon href="https://www.twitch.tv/korpokings" icon={<FaTwitch />} />
        <SocialIcon href="https://www.linkedin.com/company/106524629/" icon={<FaLinkedinIn />} />
      </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li><Link to="/mentions-legales" className="text-gray-300 hover:text-korpo-orange transition-colors">Mentions légales</Link></li>
              <li><Link to="/concept" className="text-gray-300 hover:text-korpo-orange transition-colors">À Propos du Tournoi</Link></li>
              <li><Link to="/regles" className="text-gray-300 hover:text-korpo-orange transition-colors">Règlement</Link></li>
              <li><Link to="/inscription" className="text-gray-300 hover:text-korpo-orange transition-colors">Comment s'inscrire</Link></li>
              <li><Link to="/newsroom" className="text-gray-300 hover:text-korpo-orange transition-colors">Newsroom</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-0.5 text-korpo-orange" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-300">Casablanca, Maroc</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-0.5 text-korpo-orange" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-300">contact@korpokings.com</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-0.5 text-korpo-orange" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-300">+212 6 61 36 94 70</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">Abonnez-vous à notre newsletter pour recevoir les dernières nouvelles et mises à jour.</p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Votre email" 
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-korpo-orange"
              />
              <button type="submit" onClick={(e)=>{NewsletterSubmit(e)}} className="bg-korpo-orange hover:bg-amber-600 text-white font-semibold py-2 px-4 rounded transition-colors">
                S'abonner
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Korpo Kings. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};
const SocialIcon = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
  </a>
);
export default Footer;
