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