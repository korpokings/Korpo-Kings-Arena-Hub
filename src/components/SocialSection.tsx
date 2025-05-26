import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, MapPin, Phone, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
import { toast } from "sonner";
import { set } from 'date-fns';
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

export default function SocialSection() {
    const form = useRef<HTMLFormElement>(null);
    const [isLoading, setIsLoading] = useState(false);
    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (form.current) {
            setIsLoading(true);
            setTimeout(()=>{
                setIsLoading(false);
                toast.success("Message envoyée avec succès!", {
                description: "Nous vous contacterons bientôt",
                duration: 5000,
                });
                form.current?.reset();
            },1000)
        }
    };
    return (
        <section id="contact" className="py-20 bg-korpo-black">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        CONTACT & <span className="text-korpo-orange">RÉSEAUX</span>
                    </h2>
                    <div className="w-24 h-1 bg-korpo-orange mx-auto my-6"></div>
                </div>

                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Formulaire de contact */}
                    <div className="bg-korpo-darkgray/50 p-6 rounded-lg border border-korpo-orange/20">
                        <h3 className="text-2xl font-bold text-white mb-6">CONTACTEZ-NOUS</h3>
                        <form ref={form} onSubmit={sendEmail} className="space-y-4">
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Votre email"
                                    className="w-full p-3 rounded-md bg-korpo-black/50 border border-gray-700 text-white focus:border-korpo-orange focus:ring-1 focus:ring-korpo-orange transition-all"
                                    required
                                />
                                
                            </div>
                            <div>
                                <textarea
                                    name="message"
                                    placeholder="Votre message"
                                    rows={4}
                                    className="w-full p-3 rounded-md bg-korpo-black/50 border border-gray-700 text-white focus:border-korpo-orange focus:ring-1 focus:ring-korpo-orange transition-all"
                                    required
                                ></textarea>
                            </div>
                          
                            <Button 
                                type="submit"
                                disabled={isLoading}
                                className="bg-korpo-orange hover:bg-amber-600 text-white w-full py-6 text-lg font-semibold transition-all"
                            >
                                  {isLoading ? (
                                    <span>
                                    <span className="animate-pulse">Envoi</span>
                                    <span className="ml-1 animate-bounce [animation-delay:0s]">.</span>
                                    <span className="animate-bounce [animation-delay:0.2s]">.</span>
                                    <span className="animate-bounce [animation-delay:0.4s]">.</span>
                                    </span>
                            ):(
                               <span> ENVOYER LE MESSAGE</span>
                                   )}
                            </Button>
                         
                            
                        </form>
                    </div>

                    {/* Section Réseaux */}
                    <div className="bg-korpo-darkgray/50 p-6 rounded-lg border border-korpo-orange/20">
                        <h3 className="text-2xl font-bold text-white mb-6">NOS RÉSEAUX</h3>
                        
                        <div className="space-y-6">
                            {/* Informations de contact */}
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <MapPin className="text-korpo-orange mt-1 flex-shrink-0" size={20} />
                                    <p className="text-gray-300">
                                        95 Rue Mesklil - Bureau 5 - Beauséjour<br />
                                        Casablanca, Maroc
                                    </p>
                                </div>
                                
                                <div className="flex items-center gap-4">
                                    <Mail className="text-korpo-orange" size={20} />
                                    <a href="mailto:contact@korpokings.ma" className="text-gray-300 hover:text-korpo-orange transition-colors">
                                        contact@korpokings.com
                                    </a>
                                </div>
                                
                                <div className="flex items-center gap-4">
                                    <Phone className="text-korpo-orange" size={20} />
                                    <a href="tel:+212612345678" className="text-gray-300 hover:text-korpo-orange transition-colors">
                                        +212 6 61 36 94 70

                                    </a>
                                </div>
                            </div>

                            {/* Réseaux sociaux */}
                            <div className="pt-2">
                                <h4 className="text-lg font-semibold text-white mb-4">SUIVEZ-NOUS</h4>
                                      <div className="flex justify-center flex-wrap gap-4 mb-6">
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 
const SocialIcon = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-white border-2 border-orange-500 rounded-full p-2 hover:bg-orange-500 hover:text-white transition-colors duration-300"
  >
    {icon}
  </a>
);