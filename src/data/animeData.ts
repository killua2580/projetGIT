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
    image: 'https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg',
    category: 'Fantasy',
    rating: 4.8,
  },
  {
    id: 2,
    title: 'Ghost in the Shell',
    image: 'https://m.media-amazon.com/images/M/MV5BNzM1MDExNjMwNF5BMl5BanBnXkFtZTcwNjE2MzM1MQ@@._V1_FMjpg_UX1000_.jpg',
    category: 'Sci-Fi',
    rating: 4.7,
  },
  {
    id: 3,
    title: 'Death Note',
    image: 'https://m.media-amazon.com/images/M/MV5BNjRiNmNjMmMtN2U2Yi00ODgxLTk3OTMtMmI1MTI0ZTdiOTNiXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg',
    category: 'Mystery',
    rating: 4.5,
  },
  {
    id: 4,
    title: 'Attack on Titan',
    image: 'https://m.media-amazon.com/images/M/MV5BNzc5MTczNDQtNDFjNi00ZDU0LTk4Y2EtZmQzY2M1NWY0ZGM0XkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_FMjpg_UX1000_.jpg',
    category: 'Action',
    rating: 4.9,
  },
  {
    id: 5,
    title: 'Your Name',
    image: 'https://m.media-amazon.com/images/M/MV5BODRmZDVmNzUtZDA4ZC00NjhkLWI2M2UtN2M0ZDIzNDcxYThjL2ltYWdlXkEyXkFqcGdeQXVyNTk0MzMzODA@._V1_FMjpg_UX1000_.jpg',
    category: 'Romance',
    rating: 4.6,
  },
  {
    id: 6,
    title: 'Neon Genesis Evangelion',
    image: 'https://m.media-amazon.com/images/M/MV5BNzk5NDE3YTEtNzI4Yi00YTZmLWI5NGMtNDNkNDY4ZTQ4ZTJjXkEyXkFqcGdeQXVyNjI4OTg2Nzg@._V1_FMjpg_UX1000_.jpg',
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