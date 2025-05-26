
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import { getRecentArticles } from '@/utils/dataService';

export default function LastNewsSection() {
  const newsItems = getRecentArticles(3);
  return (
    newsItems.length > 0 && (
      <section

        className={`py-16 md:py-20 bg-korpo-black transition-all duration-1000`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              DERNIÈRES <span className="text-korpo-orange">ACTUALITÉS</span>
            </h2>
            <div className="flex justify-center">
              <div className="w-24 h-1 bg-korpo-orange"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-10">
            {newsItems.map((item, index) => (
              <div
                key={item.id}
                className={`group bg-korpo-black/50 backdrop-blur-sm rounded-lg overflow-hidden border border-korpo-orange/20 hover:border-korpo-orange transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg `}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 bg-korpo-orange text-white text-xs px-3 py-1 flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {item.date}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-korpo-orange transition-colors">{item.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">{item.excerpt}</p>
                  <Button
                    variant="outline"
                    className="border-korpo-orange text-korpo-orange bg-transparent hover:bg-korpo-orange/10 hover:text-white w-full group"
                    asChild
                  >
                    <Link to={`/article/${item.id}`} className="flex justify-center items-center">
                      LIRE L'ARTICLE
                      <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              asChild
              className="bg-korpo-orange hover:bg-amber-600 text-white group px-6 py-3 rounded-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Link to="/newsroom" className="flex items-center">
                TOUTES LES ACTUALITÉS
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    )

  );
}
