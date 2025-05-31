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
    title: 'Spirit Princess',
    image: 'https://images.pexels.com/photos/15825144/pexels-photo-15825144/free-photo-of-girl-with-a-butterfly-wing.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Fantasy',
    rating: 4.8,
  },
  {
    id: 2,
    title: 'Cyber Samurai',
    image: 'https://images.pexels.com/photos/2832382/pexels-photo-2832382.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Sci-Fi',
    rating: 4.7,
  },
  {
    id: 3,
    title: 'Midnight Academy',
    image: 'https://images.pexels.com/photos/7130560/pexels-photo-7130560.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Mystery',
    rating: 4.5,
  },
  {
    id: 4,
    title: 'Destiny Warriors',
    image: 'https://images.pexels.com/photos/10727036/pexels-photo-10727036.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Action',
    rating: 4.9,
  },
  {
    id: 5,
    title: 'Cherry Blossom Tales',
    image: 'https://images.pexels.com/photos/13020508/pexels-photo-13020508.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Romance',
    rating: 4.6,
  },
  {
    id: 6,
    title: 'Neon Genesis',
    image: 'https://images.pexels.com/photos/6044257/pexels-photo-6044257.jpeg?auto=compress&cs=tinysrgb&w=800',
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