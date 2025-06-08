import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'Team',
      href: '/team',
    },
    {
      text: 'About',
      href: '/about',
    },
    {
      text: 'Blog',
      href: '/blog',
    },
    {
      text: 'Sponsor',
      href: '/sponsor',
    },
  ],
};

export const footerData = {
  links: [{}, {}, {}, {}],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
};
