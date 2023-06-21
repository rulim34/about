import { PathMenu, SocialMedia, UrlMenu } from '@/domain/entities';

export const Config: {
  site: {
    url: string;
    title: string;
    description: string;
    image: string;
    locale: string;
    twitter: string;
  };
  nav: (PathMenu | UrlMenu)[];
  socialMedia: SocialMedia[];
  contact: {
    email: string;
  };
  skills: string[];
} = {
  site: {
    url: 'https://about.rulim34.dev',
    title: 'Ahmad Rulim',
    description: 'A technology enthusiast passionated in developing cloud-based applications.',
    image: '',
    locale: 'en-UK',
    twitter: '@rulim34',
  },
  nav: [
    {
      name: 'About',
      path: '/#about',
    },
    {
      name: 'Blog',
      url: 'https://blog.rulim34.dev',
    },
  ],
  socialMedia: [
    {
      icon: 'github',
      name: 'GitHub',
      url: 'https://github.com/rulim34',
    },
    {
      icon: 'stack-overflow',
      name: 'Stack Overflow',
      url: 'https://stackoverflow.com/users/13603811/ahmad-rulim',
    },
    {
      icon: 'telegram',
      name: 'Telegram',
      url: 'https://t.me/rulim34',
    },
    {
      icon: 'xda-developers',
      name: 'XDA Developers',
      url: 'https://forum.xda-developers.com/m/rulim34.9913118/',
    },
  ],
  contact: {
    email: 'me@rulim34.dev',
  },
  skills: [
    'Dart',
    'JavaScript',
    'TypeScript',
    'Python',
    'Flutter',
    'NestJS',
    'Next.js',
    'WordPress',
    'Node.js',
  ],
};
