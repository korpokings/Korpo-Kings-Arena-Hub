
import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Newspaper } from "lucide-react";
import { getArticles} from "@/utils/dataService";

export default function Newsroom() {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam || "all");
  
  const articles = getArticles();
  
  // Filter news items based on selected category
  const filteredNews = selectedCategory === "all" 
    ? articles 
    : articles.filter(item => item.category === selectedCategory);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Update selected category if URL param changes
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-korpo-black py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-block mb-6">
            <div className="bg-korpo-orange p-2 rounded-md inline-block">
              <Newspaper className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Le Journal du tournoi</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Suivez les entreprises qui rejoignent l’arène, nos partenaires média, et les moments clés du
            tournoi.
          </p>
        </div>
      </section>
      
      {/* News Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Dernières Actualités</h2>
          
          {/* Category Filters */}
          <div className="flex justify-center mb-8">
            <Tabs defaultValue={selectedCategory} value={selectedCategory} className="w-full max-w-2xl">
              <TabsList className="grid grid-cols-4 mb-8">
                <TabsTrigger value="all" onClick={() => setSelectedCategory("all")}>Tous</TabsTrigger>
                <TabsTrigger value="match-reports" onClick={() => setSelectedCategory("match-reports")}>Matchs</TabsTrigger>
                <TabsTrigger value="team-spotlights" onClick={() => setSelectedCategory("team-spotlights")}>Équipes</TabsTrigger>
                <TabsTrigger value="announcements" onClick={() => setSelectedCategory("announcements")}>Annonces</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          
          {articles.length === 0 ? (
            <div className="text-center">
              <p className="text-lg text-gray-500">Aucune actualité disponible pour le moment.</p>
            </div>
          ):(
            <>
             {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.excerpt}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center bg-gray-50 px-6 py-3">
                  <span className="text-sm text-gray-500">{item.date}</span>
                  <Button variant="link" asChild>
                    <Link to={`/article/${item.id}`}>Lire plus</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <Button variant="outline" className="mx-1">1</Button>
            <Button variant="outline" className="mx-1">2</Button>
            <Button variant="outline" className="mx-1">3</Button>
            <Button variant="outline" className="mx-1">...</Button>
          </div>
            </>
          )}
         
        </div>
      </section>
    </Layout>
  );
}
