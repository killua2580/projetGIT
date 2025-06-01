export interface AnimeCardProps {
  id: number;
  title: string;
  image: string;
  category: string;
  rating: number;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  icon: string;
}

export interface AnimeNews {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  readTime: string;
}

export interface AnimeInfo {
  id: number;
  title: string;
  description: string;
  year: number;
  episodes: number;
  studio: string;
  genre: string[];
  rating: number;
  image: string;
  trailer?: string;
}