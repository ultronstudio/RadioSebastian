export interface Track {
  id: string;
  artist: string;
  title: string;
  duration?: string;
  youtubeUrl?: string;
}

export interface RadioMetadata {
  streamTitle: string;
  artist?: string;
  title?: string;
}

export interface FeaturedItem {
  id: string;
  title: string;
  description: string;
  link: string;
  type: 'video' | 'podcast' | 'article';
  date?: string;
}
