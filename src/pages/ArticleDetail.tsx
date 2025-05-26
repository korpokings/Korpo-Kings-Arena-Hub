
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, Share, ArrowLeft, TagIcon, MessageSquare, Heart } from "lucide-react";
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { getArticleById, getRelatedArticles } from "@/utils/dataService";
import { useInView } from 'react-intersection-observer';

const ArticleDetail = () => {
  const { id } = useParams();
  const article = getArticleById(id || "");
  const relatedArticles = getRelatedArticles(id || "", 3);
  
  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: contentRef, inView: contentInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!article) {
    return (
      <Layout>
        <div className="container mx-auto py-20 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl font-bold mb-6">Article non trouvé</h1>
            <p className="mb-6 text-gray-600">Désolé, l'article que vous recherchez n'existe pas ou a été supprimé.</p>
            <Button asChild>
              <Link to="/newsroom">Retourner aux actualités</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <div 
        ref={headerRef} 
        className={`w-full h-[50vh] md:h-[60vh] relative transition-all duration-1000  bg-korpo-black ${
          headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <img 
          src={article.image} 
          alt={article.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end">
          <div className="container mx-auto px-4 pb-10 md:pb-16">
            <span className="bg-korpo-orange text-white px-3 py-1 rounded-md text-sm mb-4 inline-block">
              {article.category === "announcements" ? "Annonces" : 
               article.category === "match-reports" ? "Rapports de Match" : 
               article.category === "team-spotlights" ? "Portrait d'Équipe" : "Actualité"}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mt-2 leading-tight">
              {article.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-korpo-black py-3 sticky top-0 z-10 shadow-lg">
        <div className="container mx-auto px-4">
          <Breadcrumb>
            <BreadcrumbList className="text-white">
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/" className="hover:text-korpo-orange transition-colors">Accueil</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/newsroom" className="hover:text-korpo-orange transition-colors">Newsroom</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink className="text-korpo-orange font-medium">{article.title.substring(0, 20)}...</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Article content */}
      <article 
        ref={contentRef} 
        className={`bg-korpo-black mx-auto py-12 px-4 transition-all duration-1000`}
      >
        <div  className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 ">
          {/* Main content */}
          <div className="md:col-span-8 ">
            {/* Article meta */}
            <div className="flex flex-wrap items-center text-sm text-gray-600 mb-8 gap-4 p-4 bg-gray-50 rounded-lg shadow-sm">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1 text-korpo-orange" />
                <span className="font-medium">{article.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1 text-korpo-orange" />
                {article.date}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1 text-korpo-orange" />
                {article.readTime} de lecture
              </div>
            </div>

            {/* Article body */}
        <div 
          className=" text-white prose prose-invert max-w-none lg:prose-lg
            prose-headings:text-white prose-p:text-gray-300
            prose-a:text-korpo-orange prose-a:no-underline hover:prose-a:underline
            prose-ul:list-disc prose-ol:list-decimal
            prose-img:rounded-lg prose-img:shadow-md"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
            
            {/* Social sharing */}
            <div className="mt-10 p-6 bg-gradient-to-r from-gray-100 to-gray-50 rounded-lg shadow-inner">
              <h3 className="text-lg font-bold mb-4">Partagez cet article</h3>
              <div className="flex items-center gap-4">
                <Button variant="outline" className="rounded-full w-10 h-10 p-0 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                </Button>
                <Button variant="outline" className="rounded-full w-10 h-10 p-0 flex items-center justify-center hover:bg-blue-400 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                </Button>
                <Button variant="outline" className="rounded-full w-10 h-10 p-0 flex items-center justify-center hover:bg-green-500 hover:text-white transition-colors">
                  <span className="sr-only">WhatsApp</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10c0-5.52-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-4-9h8c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1zm0 3h8c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1z" clipRule="evenodd" /></svg>
                </Button>
                <Button variant="outline" className="rounded-full w-10 h-10 p-0 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" clipRule="evenodd" /></svg>
                </Button>
              </div>
            </div>

            {/* Article navigation */}
            <div className="mt-10 flex justify-between items-center flex-wrap gap-4">
              <Button 
                variant="outline" 
                className="flex items-center hover:bg-korpo-orange hover:text-white transition-colors"
                asChild
              >
                <Link to="/newsroom">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Retour aux actualités
                </Link>
              </Button>
              <div className="flex items-center gap-4">
                <Button variant="ghost" className="flex items-center gap-2">
                  <Heart className="h-5 w-5" />
                  <span>152</span>
                </Button>
                <Button variant="ghost" className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  <span>24</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="md:col-span-4">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 sticky top-20 shadow-sm border border-gray-200">
              <h2 className="text-xl font-bold mb-6 flex items-center text-korpo-black">
                <span className="w-1 h-6 bg-korpo-orange rounded-full block mr-3"></span>
                Articles récents
              </h2>
              
              <div className="space-y-6">
                {relatedArticles.map(relatedArticle => (
                  <div key={relatedArticle.id} className="group">
                    <Link to={`/article/${relatedArticle.id}`} className="flex gap-4 items-center hover:bg-white rounded-lg p-2 transition-all">
                      <img 
                        src={relatedArticle.image} 
                        alt={relatedArticle.title} 
                        className="w-20 h-20 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-all"
                      />
                      <div>
                        <h3 className="font-medium line-clamp-2 group-hover:text-korpo-orange transition-colors">
                          {relatedArticle.title}
                        </h3>
                        <p className="text-xs text-gray-500 mt-1">{relatedArticle.date}</p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
              
              <Separator className="my-6" />
              
              <div>
                <h2 className="text-xl font-bold mb-6 flex items-center text-korpo-black">
                  <span className="w-1 h-6 bg-korpo-orange rounded-full block mr-3"></span>
                  Catégories
                </h2>
                
                <div className="space-y-3">
                  <Link to="/newsroom?category=match-reports" className="flex items-center justify-between p-3 rounded-lg hover:bg-white hover:shadow-sm transition-all">
                    <div className="flex items-center">
                      <TagIcon className="h-4 w-4 text-korpo-orange mr-2" />
                      <span>Rapports de Match</span>
                    </div>
                    <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">12</span>
                  </Link>
                  
                  <Link to="/newsroom?category=team-spotlights" className="flex items-center justify-between p-3 rounded-lg hover:bg-white hover:shadow-sm transition-all">
                    <div className="flex items-center">
                      <TagIcon className="h-4 w-4 text-korpo-orange mr-2" />
                      <span>Portraits d'Équipe</span>
                    </div>
                    <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">8</span>
                  </Link>
                  
                  <Link to="/newsroom?category=announcements" className="flex items-center justify-between p-3 rounded-lg hover:bg-white hover:shadow-sm transition-all">
                    <div className="flex items-center">
                      <TagIcon className="h-4 w-4 text-korpo-orange mr-2" />
                      <span>Annonces</span>
                    </div>
                    <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">15</span>
                  </Link>
                </div>
              </div>

              <div className="mt-8 bg-korpo-orange/10 p-4 rounded-lg border border-korpo-orange/30">
                <h3 className="font-bold text-korpo-orange mb-2">Restez informé</h3>
                <p className="text-sm mb-4">Recevez toutes les actualités du tournoi directement dans votre boîte mail</p>
                <div className="flex">
                  <input type="email" placeholder="Votre email" className="px-3 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-korpo-orange w-full" />
                  <Button className="rounded-l-none bg-korpo-orange hover:bg-amber-600">
                    S'inscrire
                  </Button>
                </div>
              </div>
            </div>
          </aside>
        </div>
        </div>
      </article>
    </Layout>
  );
};

export default ArticleDetail;
