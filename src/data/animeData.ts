import { AnimeCardProps, NavItem, SocialLink } from '../types';

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'featured', label: 'Featured', href: '#featured' },
  { id: 'anime-info', label: 'Anime Info', href: '#anime-info' },
  { id: 'professor', label: 'Thank You Professor', href: '#professor' },
  { id: 'categories', label: 'Categories', href: '#categories' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const socialLinks: SocialLink[] = [
  { id: 'twitter', platform: 'Twitter', url: 'https://twitter.com/CDawgVA', icon: 'twitter' },
  { id: 'instagram', platform: 'Instagram', url: 'https://instagram.com/sydsnap', icon: 'instagram' },
  { id: 'youtube', platform: 'YouTube', url: 'https://youtube.com/@TheAnimeMan', icon: 'youtube' },
  { id: 'twitch', platform: 'Twitch', url: 'https://twitch.tv/ironmouse', icon: 'twitch' },
];

export const animeData: AnimeCardProps[] = [
  {
    id: 1,
    title: 'Spirited Away',
    image: 'https://m.media-amazon.com/images/M/MV5BNTEyNmEwOWUtYzkyOC00ZTQ4LTllZmUtMjk0Y2YwOGUzYjRiXkEyXkFqcGc@._V1_.jpg',
    category: 'Fantasy',
    rating: 4.8,
  },
  {
    id: 2,
    title: 'Ghost in the Shell',
    image: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p36417_p_v8_aa.jpg',
    category: 'Sci-Fi',
    rating: 4.7,
  },
  {
    id: 3,
    title: 'Death Note',
    image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTJCp1AIyMA0ykJNEgaou1TA5lNcCIE3YzqFCd8l9yY5W4L1MrRVK2fWWasbjkx-mRwrlqv',
    category: 'Mystery',
    rating: 4.5,
  },
  {
    id: 4,
    title: 'Attack on Titan',
    image: 'https://m.media-amazon.com/images/M/MV5BZjliODY5MzQtMmViZC00MTZmLWFhMWMtMjMwM2I3OGY1MTRiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
    category: 'Action',
    rating: 4.9,
  },
  {
    id: 5,
    title: 'Your Name',
    image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQAiZvKRxC1SGGjIWatn-e4q8nkOAQsWosElu6LPj8rBK8cwpKo',
    category: 'Romance',
    rating: 4.6,
  },
  {
    id: 6,
    title: 'Neon Genesis Evangelion',
    image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRfXPltPlwvr-ICW1qsscPFjIQxpt_2NgYuTYz8niO4jQmNw849Icn5hGBAHMLf6su8vWD1',
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

export interface AnimeNews {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  readTime: string;
}

export const animeNews: AnimeNews[] = [
  {
    id: 1,
    title: "Studio Ghibli Announces New Film Project",
    excerpt: "The legendary animation studio reveals their latest masterpiece in development, promising to return to their classic storytelling roots.",
    image: "https://cdn.myanimelist.net/s/common/company_logos/e6d02dfe-71e9-49d2-bef1-68e585c2605e_600x600_i?s=f8bba4a0f7ae97f80c95e463c7529bd6",
    date: "2025-05-28",
    category: "Industry News",
    readTime: "3 min read"
  },
  {
    id: 2,
    title: "Attack on Titan Final Season Analysis",
    excerpt: "A deep dive into the emotional and narrative conclusion of one of anime's most impactful series.",
    image: "https://m.media-amazon.com/images/M/MV5BZjliODY5MzQtMmViZC00MTZmLWFhMWMtMjMwM2I3OGY1MTRiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    date: "2025-05-25",
    category: "Analysis",
    readTime: "5 min read"
  },
  {
    id: 3,
    title: "Anime Streaming Wars: What's Next?",
    excerpt: "How different platforms are competing for exclusive anime content and what it means for fans worldwide.",
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRfXPltPlwvr-ICW1qsscPFjIQxpt_2NgYuTYz8niO4jQmNw849Icn5hGBAHMLf6su8vWD1",
    date: "2025-05-22",
    category: "Industry",
    readTime: "4 min read"
  },
  {
    id: 4,
    title: "The Art of Anime Voice Acting",
    excerpt: "Exploring the talented voice actors who bring our favorite characters to life across different languages.",
    image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTJCp1AIyMA0ykJNEgaou1TA5lNcCIE3YzqFCd8l9yY5W4L1MrRVK2fWWasbjkx-mRwrlqv",
    date: "2025-05-20",
    category: "Culture",
    readTime: "6 min read"
  }
];

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

export const featuredAnimeInfo: AnimeInfo[] = [
  {
    id: 1,
    title: "Spirited Away",
    description: "A magical tale of a young girl who enters a world of spirits and magic, learning about courage, friendship, and growing up. This masterpiece by Hayao Miyazaki continues to captivate audiences worldwide.",
    year: 2001,
    episodes: 1,
    studio: "Studio Ghibli",
    genre: ["Fantasy", "Adventure", "Family"],
    rating: 9.3,
    image: "https://m.media-amazon.com/images/M/MV5BNTEyNmEwOWUtYzkyOC00ZTQ4LTllZmUtMjk0Y2YwOGUzYjRiXkEyXkFqcGc@._V1_.jpg"
  },
  {
    id: 2,
    title: "Attack on Titan",
    description: "Humanity fights for survival against giant humanoid creatures called Titans. This intense series explores themes of freedom, sacrifice, and the complexity of human nature.",
    year: 2013,
    episodes: 87,
    studio: "WIT Studio / MAPPA",
    genre: ["Action", "Drama", "Dark Fantasy"],
    rating: 9.0,
    image: "https://m.media-amazon.com/images/M/MV5BZjliODY5MzQtMmViZC00MTZmLWFhMWMtMjMwM2I3OGY1MTRiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
  },
  {
    id: 3,
    title: "Your Name",
    description: "A beautiful story of two teenagers who mysteriously swap bodies and must find each other across time and space. A touching exploration of connection and destiny.",
    year: 2016,
    episodes: 1,
    studio: "CoMix Wave Films",
    genre: ["Romance", "Drama", "Supernatural"],
    rating: 8.4,
    image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQAiZvKRxC1SGGjIWatn-e4q8nkOAQsWosElu6LPj8rBK8cwpKo"
  }
];