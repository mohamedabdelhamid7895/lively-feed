export interface Article {
  id: number;
  title: string;
  url?: string;
  score: number;
  by: string; 
  time: number;
  descendants?: number; 
  kids?: number[];
  type: string;
}

export interface User {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  likedArticles: Article[];
}
