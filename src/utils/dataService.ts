
import articlesData from '../data/articles.json';


export interface Article {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  image: string;
  category: string;
}



export const getArticles = (): Article[] => {
  return articlesData;
};

export const getArticleById = (id: string): Article | undefined => {
  return articlesData.find(article => article.id === id);
};

export const getRecentArticles = (count: number = 3): Article[] => {
  return articlesData.slice(0, count);
};

export const getRelatedArticles = (currentArticleId: string, count: number = 3): Article[] => {
  return articlesData
    .filter(article => article.id !== currentArticleId)
    .slice(0, count);
};

