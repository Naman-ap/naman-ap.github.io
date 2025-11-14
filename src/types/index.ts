export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface BlogPost {
  title: string;
  pubDate: string;
  link: string;
  thumbnail?: string;
  description: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}
