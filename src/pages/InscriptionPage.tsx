
import { Layout } from "@/components/Layout";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BriefcaseIcon, User, Mail, Phone, Users, 
  Folder, FileText, Check, X, ArrowRight, 
  ArrowLeft, Sparkles
} from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

const formSchema = z.object({
  companyName: z.string().min(2, { message: "Le nom de l'entreprise est requis" }),
  fullName: z.string().min(2, { message: "Le nom et prénom sont requis" }),
  position: z.string().min(2, { message: "Le poste est requis" }),
  email: z.string().email({ message: "Adresse email invalide" }),
  phone: z.string().min(8, { message: "Numéro de téléphone invalide" }),
  teamCount: z.string().min(1, { message: "Ce champ est requis" }),
  department: z.string().min(1, { message: "Ce champ est requis" }),
  wantDossier: z.string().min(1, { message: "Veuillez faire un choix" }),
});

type FormValues = z.infer<typeof formSchema>;

const Inscription = () => {
  const navigate = useNavigate();
  const [formStep, setFormStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: "",
      fullName: "",
      position: "",
      email: "",
      phone: "",
      teamCount: "1",
      department: "",
      wantDossier: "",
    },
  });

const onSubmit = (data: FormValues) => {
  if (data) {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false)
      toast.success("Inscription envoyée avec succès!", {
        description: "Nous vous contacterons bientôt",
        duration: 5000,
      });
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }, 100);
    
  }
};


  const nextStep = async () => {
    const fields = formStep === 0 
      ? ["companyName", "fullName", "position", "email"]
      : ["phone", "teamCount", "department", "wantDossier"];
    
    const output = await form.trigger(fields as any);
    if (!output) return;
    
    setFormStep(formStep + 1);
  };

  const prevStep = () => {
    setFormStep(formStep - 1);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);
    useEffect(() => {
    window.scrollTo(0, 0);
  },[formStep]);
  return (
    <Layout>
      <section className="min-h-screen relative overflow-hidden pt-28 pb-20">
        {/* Geometric shapes in background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-r from-korpo-orange/20 to-amber-600/10 blur-3xl"></div>
          <div className="absolute top-1/2 -right-40 w-96 h-96 rounded-full bg-gradient-to-l from-korpo-orange/20 to-amber-600/10 blur-3xl"></div>
          <div className="absolute -bottom-40 left-1/3 w-96 h-96 rounded-full bg-gradient-to-t from-korpo-orange/20 to-amber-600/10 blur-3xl"></div>
                  
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left side - Text content */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:w-2/5 "
            >
              <div className="text-left lg:sticky lg:top-28">
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <h1 className="text-3xl md:text-5xl font-bold mb-4 relative inline-block">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/70">REJOIGNEZ</span>{" "}
                    <span className="relative">
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-korpo-orange via-amber-500 to-korpo-orange">
                        L'AVENTURE
                      </span>
                      <motion.span
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-korpo-orange via-amber-500 to-korpo-orange"
                      ></motion.span>
                    </span>
                  </h1>
                  <motion.div
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.3 }}
                    className="flex items-center gap-1 mb-4 text-sm text-white/80"
                  >
                    <Sparkles className="w-4 h-4 text-korpo-orange" />
                    <span>Édition 2025</span>
                    <Sparkles className="w-4 h-4 text-korpo-orange" />
                  </motion.div>
                </motion.div>
                
               
                
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="text-lg text-white/80 mb-4"
                >
                 Complétez ce formulaire pour recevoir votre kit d’inscription et réserver un échange avec notre équipe.
                </motion.p>

    
              </div>
            </motion.div>
            
            {/* Right side - Form */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.7, ease: "easeOut" }}
              className="lg:w-3/5"
            >
              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 w-20 h-20 border-l-4 border-t-4 border-korpo-orange opacity-70"></div>
              <div className="absolute -bottom-10 -right-10 w-20 h-20 border-r-4 border-b-4 border-korpo-orange opacity-70"></div>
              
              <div className="bg-korpo-black backdrop-blur-lg rounded-xl shadow-2xl p-8 border border-white/10 relative overflow-hidden">
                {/* Animated glow effect */}
                <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-korpo-orange/5 blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-korpo-orange/5 blur-3xl"></div>
                
                {/* Form Progress with animation */}
                <div className="flex justify-center mb-8">
                  <div className="flex items-center w-full max-w-xs mx-auto">
                    <motion.div
                      initial={{ scale: 0.9 }}
                      animate={{ scale: formStep === 0 ? 1.05 : 1 }}
                      className={`relative rounded-full h-12 w-12 flex items-center justify-center transition-all duration-500 ${
                        formStep === 0 ? 'bg-gradient-to-r from-korpo-orange to-amber-500 text-white shadow-lg shadow-korpo-orange/30' : 'bg-gray-800 text-gray-400'
                      }`}
                    >
                      <span className="text-lg font-bold">1</span>
                      {formStep === 0 && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute -inset-1 rounded-full border border-korpo-orange/50 animate-ping"
                        ></motion.div>
                      )}
                    </motion.div>
                    
                    <div className="h-1 flex-grow mx-2 rounded-full bg-gray-700 overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: formStep === 1 ? '100%' : '0%' }}
                        transition={{ duration: 0.5 }}
                        className="h-full bg-gradient-to-r from-korpo-orange to-amber-500"
                      ></motion.div>
                    </div>
                    
                    <motion.div
                      initial={{ scale: 0.9 }}
                      animate={{ scale: formStep === 1 ? 1.05 : 1 }}
                      className={`relative rounded-full h-12 w-12 flex items-center justify-center transition-all duration-500 ${
                        formStep === 1 ? 'bg-gradient-to-r from-korpo-orange to-amber-500 text-white shadow-lg shadow-korpo-orange/30' : 'bg-gray-800 text-gray-400'
                      }`}
                    >
                      <span className="text-lg font-bold">2</span>
                      {formStep === 1 && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute -inset-1 rounded-full border border-korpo-orange/50 animate-ping"
                        ></motion.div>
                      )}
                    </motion.div>
                  </div>
                </div>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 relative z-10">
                    <AnimatePresence mode="wait">
                      {formStep === 0 && (
                        <motion.div
                          key="step1"
                          initial={{ x: 20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ x: -20, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-6"
                        >
                          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                            <div className="w-2 h-8 bg-gradient-to-b from-korpo-orange to-amber-500 mr-3"></div>
                            Informations de contact
                          </h2>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Company Name */}
                            <FormField
                              control={form.control}
                              name="companyName"
                              render={({ field }) => (
                                <FormItem className="backdrop-blur-sm bg-white/5 p-4 rounded-lg border border-white/10 hover:bg-white/10 transition-colors group">
                                  <FormLabel className="text-white flex items-center text-lg mb-2">
                                    <BriefcaseIcon className="mr-2 h-5 w-5 text-korpo-orange group-hover:scale-110 transition-transform" />
                                    Nom entreprise
                                  </FormLabel>
                                  <FormControl>
                                    <Input 
                                      placeholder="Votre entreprise" 
                                      className="bg-black/30 border-white/10 text-white placeholder:text-gray-400 focus-visible:ring-korpo-orange" 
                                      {...field} 
                                    />
                                  </FormControl>
                                  <FormMessage className="text-red-400" />
                                </FormItem>
                              )}
                            />

                            {/* Full Name */}
                            <FormField
                              control={form.control}
                              name="fullName"
                              render={({ field }) => (
                                <FormItem className="backdrop-blur-sm bg-white/5 p-4 rounded-lg border border-white/10 hover:bg-white/10 transition-colors group">
                                  <FormLabel className="text-white flex items-center text-lg mb-2">
                                    <User className="mr-2 h-5 w-5 text-korpo-orange group-hover:scale-110 transition-transform" />
                                    Nom & prénom
                                  </FormLabel>
                                  <FormControl>
                                    <Input 
                                      placeholder="Votre nom complet" 
                                      className="bg-black/30 border-white/10 text-white placeholder:text-gray-400 focus-visible:ring-korpo-orange" 
                                      {...field} 
                                    />
                                  </FormControl>
                                  <FormMessage className="text-red-400" />
                                </FormItem>
                              )}
                            />

                            {/* Position */}
                            <FormField
                              control={form.control}
                              name="position"
                              render={({ field }) => (
                                <FormItem className="backdrop-blur-sm bg-white/5 p-4 rounded-lg border border-white/10 hover:bg-white/10 transition-colors group">
                                  <FormLabel className="text-white flex items-center text-lg mb-2">
                                    <BriefcaseIcon className="mr-2 h-5 w-5 text-korpo-orange group-hover:scale-110 transition-transform" />
                                    Poste
                                  </FormLabel>
                                  <FormControl>
                                    <Input 
                                      placeholder="Votre position dans l'entreprise" 
                                      className="bg-black/30 border-white/10 text-white placeholder:text-gray-400 focus-visible:ring-korpo-orange" 
                                      {...field} 
                                    />
                                  </FormControl>
                                  <FormMessage className="text-red-400" />
                                </FormItem>
                              )}
                            />

                            {/* Email */}
                            <FormField
                              control={form.control}
                              name="email"
                              render={({ field }) => (
                                <FormItem className="backdrop-blur-sm bg-white/5 p-4 rounded-lg border border-white/10 hover:bg-white/10 transition-colors group">
                                  <FormLabel className="text-white flex items-center text-lg mb-2">
                                    <Mail className="mr-2 h-5 w-5 text-korpo-orange group-hover:scale-110 transition-transform" />
                                    Email professionnel
                                  </FormLabel>
                                  <FormControl>
                                    <Input 
                                      type="email" 
                                      placeholder="email@entreprise.com" 
                                      className="bg-black/30 border-white/10 text-white placeholder:text-gray-400 focus-visible:ring-korpo-orange" 
                                      {...field} 
                                    />
                                  </FormControl>
                                  <FormMessage className="text-red-400" />
                                </FormItem>
                              )}
                            />
                          </div>
                        </motion.div>
                      )}

                      {formStep === 1 && (
                        <motion.div
                          key="step2"
                          initial={{ x: 20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ x: -20, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-6"
                        >
                          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                            <div className="w-2 h-8 bg-gradient-to-b from-korpo-orange to-amber-500 mr-3"></div>
                            Informations de participation
                          </h2>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Phone */}
                            <FormField
                              control={form.control}
                              name="phone"
                              render={({ field }) => (
                                <FormItem className="backdrop-blur-sm bg-white/5 p-4 rounded-lg border border-white/10 hover:bg-white/10 transition-colors group">
                                  <FormLabel className="text-white flex items-center text-lg mb-2">
                                    <Phone className="mr-2 h-5 w-5 text-korpo-orange group-hover:scale-110 transition-transform" />
                                    Téléphone
                                  </FormLabel>
                                  <FormControl>
                                    <Input 
                                      type="tel" 
                                      placeholder="+212 XXX XXX XXX" 
                                      className="bg-black/30 border-white/10 text-white placeholder:text-gray-400 focus-visible:ring-korpo-orange" 
                                      {...field} 
                                    />
                                  </FormControl>
                                  <FormMessage className="text-red-400" />
                                </FormItem>
                              )}
                            />

                            {/* Team Count */}
                            <FormField
                              control={form.control}
                              name="teamCount"
                              render={({ field }) => (
                                <FormItem className="backdrop-blur-sm bg-white/5 p-4 rounded-lg border border-white/10 hover:bg-white/10 transition-colors group">
                                  <FormLabel className="text-white flex items-center text-lg mb-2">
                                    <Users className="mr-2 h-5 w-5 text-korpo-orange group-hover:scale-110 transition-transform" />
                                    Nombre d'équipes
                                  </FormLabel>
                                  <FormControl>
                                    <Select 
                                      onValueChange={field.onChange} 
                                      defaultValue={field.value}
                                    >
                                      <SelectTrigger className="bg-black/30 border-white/10 text-white focus-visible:ring-korpo-orange">
                                        <SelectValue placeholder="Sélectionnez" />
                                      </SelectTrigger>
                                      <SelectContent className="bg-gray-900 border-white/10 text-white">
                                        <SelectItem value="1" className="focus:bg-korpo-orange/20">1 équipe</SelectItem>
                                        <SelectItem value="2" className="focus:bg-korpo-orange/20">2 équipes</SelectItem>
                                        <SelectItem value="3" className="focus:bg-korpo-orange/20">3 équipes</SelectItem>
                                        <SelectItem value="4" className="focus:bg-korpo-orange/20">4 équipes ou plus</SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </FormControl>
                                  <FormMessage className="text-red-400" />
                                </FormItem>
                              )}
                            />
                          </div>

                          {/* Department - Redesigned as cards */}
                          <FormField
                            control={form.control}
                            name="department"
                            render={({ field }) => (
                              <FormItem className="space-y-3 backdrop-blur-sm bg-white/5 p-6 rounded-lg border border-white/10">
                                <FormLabel className="text-white flex items-center text-lg">
                                  <Folder className="mr-2 h-5 w-5 text-korpo-orange" />
                                  Département concerné
                                </FormLabel>
                                <Separator className="bg-white/20" />
                                <FormControl>
                                  <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4"
                                  >
                                    <motion.div 
                                      whileHover={{ scale: 1.03 }}
                                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                      className="relative "
                                    >
                                      <RadioGroupItem 
                                        value="RH" 
                                        id="rh" 
                                        className="peer sr-only" 
                                      />
                                      <label 
                                        htmlFor="rh" 
                                        className="flex flex-col items-center justify-center h-10 rounded-lg border border-white/20 bg-black/30 p-2 hover:bg-gradient-to-br hover:from-korpo-orange/20 hover:to-amber-600/10 transition-all cursor-pointer peer-data-[state=checked]:border-korpo-orange peer-data-[state=checked]:bg-gradient-to-br peer-data-[state=checked]:from-korpo-orange/20 peer-data-[state=checked]:to-amber-600/10"
                                      >
                                        <span className="text-white text-md">RH</span>
                                      </label>
                                      <Check className="absolute top-2 right-2 h-4 w-4 text-korpo-orange opacity-0 peer-data-[state=checked]:opacity-100" />
                                    </motion.div>
                                    
                                    <motion.div 
                                      whileHover={{ scale: 1.03 }}
                                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                      className="relative"
                                    >
                                      <RadioGroupItem 
                                        value="Com" 
                                        id="com" 
                                        className="peer sr-only" 
                                      />
                                      <label 
                                        htmlFor="com" 
                                        className="flex flex-col items-center justify-center h-10 rounded-lg border border-white/20 bg-black/30 p-2 hover:bg-gradient-to-br hover:from-korpo-orange/20 hover:to-amber-600/10 transition-all cursor-pointer peer-data-[state=checked]:border-korpo-orange peer-data-[state=checked]:bg-gradient-to-br peer-data-[state=checked]:from-korpo-orange/20 peer-data-[state=checked]:to-amber-600/10"
                                      >
                                        <span className="text-white text-md">Com</span>
                                      </label>
                                      <Check className="absolute top-2 right-2 h-4 w-4 text-korpo-orange opacity-0 peer-data-[state=checked]:opacity-100" />
                                    </motion.div>
                                    
                                    <motion.div 
                                      whileHover={{ scale: 1.03 }}
                                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                      className="relative"
                                    >
                                      <RadioGroupItem 
                                        value="Direction" 
                                        id="direction" 
                                        className="peer sr-only" 
                                      />
                                      <label 
                                        htmlFor="direction" 
                                        className="flex flex-col items-center justify-center h-10 rounded-lg border border-white/20 bg-black/30 p-2 hover:bg-gradient-to-br hover:from-korpo-orange/20 hover:to-amber-600/10 transition-all cursor-pointer peer-data-[state=checked]:border-korpo-orange peer-data-[state=checked]:bg-gradient-to-br peer-data-[state=checked]:from-korpo-orange/20 peer-data-[state=checked]:to-amber-600/10"
                                      >
                                        <span className="text-white text-md">Direction</span>
                                      </label>
                                      <Check className="absolute top-2 right-2 h-4 w-4 text-korpo-orange opacity-0 peer-data-[state=checked]:opacity-100" />
                                    </motion.div>
                                    
                                    <motion.div 
                                      whileHover={{ scale: 1.03 }}
                                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                      className="relative"
                                    >
                                      <RadioGroupItem 
                                        value="Autre" 
                                        id="autre" 
                                        className="peer sr-only" 
                                      />
                                      <label 
                                        htmlFor="autre" 
                                        className="flex flex-col items-center justify-center h-10 rounded-lg border border-white/20 bg-black/30 p-2 hover:bg-gradient-to-br hover:from-korpo-orange/20 hover:to-amber-600/10 transition-all cursor-pointer peer-data-[state=checked]:border-korpo-orange peer-data-[state=checked]:bg-gradient-to-br peer-data-[state=checked]:from-korpo-orange/20 peer-data-[state=checked]:to-amber-600/10"
                                      >
                                        <span className="text-white text-md">Autre</span>
                                      </label>
                                      <Check className="absolute top-2 right-2 h-4 w-4 text-korpo-orange opacity-0 peer-data-[state=checked]:opacity-100" />
                                    </motion.div>
                                  </RadioGroup>
                                </FormControl>
                                <FormMessage className="text-red-400" />
                              </FormItem>
                            )}
                          />

                          {/* Want Dossier - Redesigned */}
                          <FormField
                            control={form.control}
                            name="wantDossier"
                            render={({ field }) => (
                              <FormItem className="space-y-3 backdrop-blur-sm bg-white/5 p-6 rounded-lg border border-white/10">
                                <FormLabel className="text-white flex items-center text-lg">
                                  <FileText className="mr-2 h-5 w-5 text-korpo-orange" />
                                  Souhaitez-vous recevoir notre dossier sponsor/média ?
                                </FormLabel>
                                <Separator className="bg-white/20" />
                                <FormControl>
                                  <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="flex gap-4 mt-4"
                                  >
                                    <motion.div 
                                      whileHover={{ scale: 1.03 }}
                                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                      className="relative"
                                    >
                                      <RadioGroupItem 
                                        value="oui" 
                                        id="oui" 
                                        className="peer sr-only" 
                                      />
                                      <label 
                                        htmlFor="oui" 
                                        className="flex items-center gap-3 h-8 w-32 rounded-lg border border-white/20 bg-black/30 p-4 hover:bg-gradient-to-br hover:from-green-500/20 hover:to-green-600/10 transition-all cursor-pointer peer-data-[state=checked]:border-green-500 peer-data-[state=checked]:bg-gradient-to-br peer-data-[state=checked]:from-green-500/20 peer-data-[state=checked]:to-green-600/10"
                                      >
                                        <Check className="h-6 w-6 text-green-500" />
                                        <span className="text-white text-md">Oui</span>
                                      </label>
                                    </motion.div>
                                    
                                    <motion.div 
                                      whileHover={{ scale: 1.03 }}
                                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                      className="relative"
                                    >
                                      <RadioGroupItem 
                                        value="non" 
                                        id="non" 
                                        className="peer sr-only" 
                                      />
                                      <label 
                                        htmlFor="non" 
                                        className="flex items-center gap-3 h-8 w-32 rounded-lg border border-white/20 bg-black/30 p-4 hover:bg-gradient-to-br hover:from-red-500/20 hover:to-red-600/10 transition-all cursor-pointer peer-data-[state=checked]:border-red-500 peer-data-[state=checked]:bg-gradient-to-br peer-data-[state=checked]:from-red-500/20 peer-data-[state=checked]:to-red-600/10"
                                      >
                                        <X className="h-6 w-6 text-red-500" />
                                        <span className="text-white text-md">Non</span>
                                      </label>
                                    </motion.div>
                                  </RadioGroup>
                                </FormControl>
                                <FormMessage className="text-red-400" />
                              </FormItem>
                            )}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="flex justify-between pt-8 mt-4 border-t border-white/10">
                      {formStep === 1 && (
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <Button 
                            type="button" 
                            variant="outline"
                            onClick={prevStep}
                            className="text-korpo-orange border-white/30 hover:bg-white/10 hover:text-korpo-orange transition-colors group"
                          >
                            <ArrowLeft className="mr-2 h-4 w-4  group-hover:translate-x-[-2px] transition-transform" />
                            Précédent
                          </Button>
                        </motion.div>
                      )}

                      <div className={formStep === 0 ? 'ml-auto' : ''}>
                        {formStep === 0 && (
                          <motion.div
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                          >
                            <Button 
                              type="button"
                              onClick={nextStep}
                              className="bg-gradient-to-r from-korpo-orange to-amber-600 hover:from-amber-600 hover:to-korpo-orange text-white transition-all group"
                            >
                              Suivant
                              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-[2px] transition-transform" />
                            </Button>
                          </motion.div>
                        )}

                        {formStep === 1 && (
                          <motion.div
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                          >
                            <Button 
                              type="submit"
                              disabled={isLoading}
                              className="relative overflow-hidden group"
                            >
                              <span className="absolute inset-0 bg-gradient-to-r from-korpo-orange to-amber-600 group-hover:from-amber-600 group-hover:to-korpo-orange"></span>
                              {isLoading ? (
                                 <span className="relative z-10 flex items-center">
                                    <span className="animate-pulse">Envoi</span>
                                    <span className="ml-1 animate-bounce [animation-delay:0s]">.</span>
                                    <span className="animate-bounce [animation-delay:0.2s]">.</span>
                                    <span className="animate-bounce [animation-delay:0.4s]">.</span>
                                  </span>
                              ) : (
                              <span className="relative z-10 flex items-center">
                                                              Soumettre
                             <Check className="ml-2 h-4 w-4" />
                              </span>
                              )}
                              
                            </Button>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </form>
                </Form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Inscription;
