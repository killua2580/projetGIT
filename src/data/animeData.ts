import { AnimeCardProps, NavItem, SocialLink } from '../types';

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'featured', label: 'Featured', href: '#featured' },
  { id: 'categories', label: 'Categories', href: '#categories' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const socialLinks: SocialLink[] = [
  { id: 'twitter', platform: 'Twitter', url: '#', icon: 'twitter' },
  { id: 'instagram', platform: 'Instagram', url: '#', icon: 'instagram' },
  { id: 'youtube', platform: 'YouTube', url: '#', icon: 'youtube' },
  { id: 'twitch', platform: 'Twitch', url: '#', icon: 'twitch' },
];

export const animeData: AnimeCardProps[] = [
  {
    id: 1,
    title: 'Spirited Away',
    image: 'https://cdn.myanimelist.net/images/anime/6/79597.jpg',
    category: 'Fantasy',
    rating: 4.8,
  },
  {
    id: 2,
    title: 'Ghost in the Shell',
    image: 'https://cdn.myanimelist.net/images/anime/5/67707.jpg',
    category: 'Sci-Fi',
    rating: 4.7,
  },
  {
    id: 3,
    title: 'Death Note',
    image: 'https://cdn.myanimelist.net/images/anime/9/9453.jpg',
    category: 'Mystery',
    rating: 4.5,
  },
  {
    id: 4,
    title: 'Attack on Titan',
    image: 'https://cdn.myanimelist.net/images/anime/10/47347.jpg',
    category: 'Action',
    rating: 4.9,
  },
  {
    id: 5,
    title: 'Your Name',
    image: 'https://cdn.myanimelist.net/images/anime/5/87048.jpg',
    category: 'Romance',
    rating: 4.6,
  },
  {
    id: 6,
    title: 'Neon Genesis Evangelion',
    image: 'https://cdn.myanimelist.net/images/anime/1314/108941.jpg',
    category: 'Sci-Fi',
    rating: 4.8,
  }
];

export const categories = [
  'Action',
  'Adventure',
  'Comedy',
  'Drama',
  'Fantasy',
  'Horror',
  'Mystery',
  'Romance',
  'Sci-Fi',
  'Slice of Life',
  'Sports',
  'Supernatural',
];