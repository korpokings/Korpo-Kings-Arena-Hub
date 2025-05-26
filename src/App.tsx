
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Concept from "./pages/Concept";
import WhyParticipate from "./pages/WhyParticipate";
import Rules from "./pages/Rules";
import TournamentFormat from "./pages/TournamentFormat";
import Newsroom from "./pages/Newsroom";
import ArticleDetail from "./pages/ArticleDetail";
import GrandeFinale from "./pages/GrandeFinale";
import InscriptionPage from './pages/InscriptionPage';
import MentionsLegales from '@/pages/MentionsLegales';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react"
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/concept" element={<Concept />} />
          <Route path="/pourquoi-participer" element={<WhyParticipate />} />
          <Route path="/regles" element={<Rules />} />
          <Route path="/format-tournoi" element={<TournamentFormat />} />
          <Route path="/newsroom" element={<Newsroom />} />
          <Route path="/article/:id" element={<ArticleDetail />} />
          <Route path="/finale" element={<GrandeFinale />} />
          <Route path="/equipes" element={<NotFound />} />
          <Route path="/inscription" element={<InscriptionPage />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Analytics />
      <SpeedInsights />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
