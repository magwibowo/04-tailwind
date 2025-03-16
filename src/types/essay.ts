export interface EssayContent {
  type: 'heading' | 'paragraph' | 'code';
  text: string;
  language?: string;
}

export interface Essay {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
  categories: string[];
  content: string | EssayContent[];
}

export interface EssaysData {
  essays: Essay[];
} 