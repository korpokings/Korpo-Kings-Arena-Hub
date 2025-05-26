import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, MapPin, Phone, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
import { toast } from "sonner";
import { set } from 'date-fns';

export default function SocialSection() {
    const form = useRef<HTMLFormElement>(null);
    const [isLoading, setIsLoading] = useState(false);
    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (form.current) {
            const formData = new FormData(form.current);
            const templateParams = {
                email_type: 'nouveau contact Submission',
                name: formData.get('email') as string,
                email: formData.get('email') as string,
                reply_message : 'Merci de nous avoir contacté. Nous vous répondrons dès que possible.',
                message_html: `<p>${formData.get('message') as string}</p>`
            };
            setIsLoading(true);
            emailjs.send(
                'gmail', //  EmailJS Service ID
                'template_v2dtw3l', // EmailJS Template ID
                templateParams,
                'idE4iDSPmZ0QJLhIl' // EmailJS User ID
            )
            .then(() => {
                setIsLoading(false);
                toast.success("Message envoyée avec succès!", {
                description: "Nous vous contacterons bientôt",
                duration: 5000,
                });
                form.current?.reset();
            })
            .catch((error) => {
                alert('Échec de l\'envoi du message: ' + error.text);
            });
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
                                <div className="flex gap-4">
                                    <a href="#" className="bg-korpo-black/70 hover:bg-korpo-orange/20 p-3 rounded-full border border-korpo-orange/30 transition-all group">
                                        <Instagram className="text-gray-300 group-hover:text-korpo-orange" size={20} />
                                    </a>
                                    <a href="#" className="bg-korpo-black/70 hover:bg-korpo-orange/20 p-3 rounded-full border border-korpo-orange/30 transition-all group">
                                        <Facebook className="text-gray-300 group-hover:text-korpo-orange" size={20} />
                                    </a>
                                    <a href="#" className="bg-korpo-black/70 hover:bg-korpo-orange/20 p-3 rounded-full border border-korpo-orange/30 transition-all group">
                                        <Twitter className="text-gray-300 group-hover:text-korpo-orange" size={20} />
                                    </a>
                                    <a href="#" className="bg-korpo-black/70 hover:bg-korpo-orange/20 p-3 rounded-full border border-korpo-orange/30 transition-all group">
                                        <Linkedin className="text-gray-300 group-hover:text-korpo-orange" size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 