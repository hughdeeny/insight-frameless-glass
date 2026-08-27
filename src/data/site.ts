export const site = {
  name: 'Insight Frameless Glass',
  legalName: 'Insight Frameless Glass Pty Ltd',
  location: 'Sydney',
  url: 'https://www.insightframelessglass.com.au',
  phone: '0426 465 401',
  phoneHref: 'tel:+61426465401',
  email: 'tom@insightframelessglass.com.au',
  title: 'Insight Frameless Glass Sydney | Glass Fencing & Balustrades',
  description:
    'Sydney specialists in frameless glass pool fencing, glass balustrades, stairways, shower screens and architectural fencing solutions.',
} as const;

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
] as const;

export const socials = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/tom-hammond-3356b3317/',
    icon: 'linkedin',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/people/Insight-Frameless-Glass-Pty-Ltd/61563441032636/',
    icon: 'facebook',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/insightframelessglass/',
    icon: 'instagram',
  },
] as const;

export type ServiceIcon =
  | 'pool'
  | 'balustrade'
  | 'slat'
  | 'stair'
  | 'shower'
  | 'flat-top';

export const services: {
  name: string;
  icon: ServiceIcon;
  href: string;
}[] = [
  { name: 'Glass Pool Fencing', icon: 'pool', href: '#services' },
  { name: 'Glass Balustrades', icon: 'balustrade', href: '#services' },
  { name: 'Aluminium Slat Fencing & Gates', icon: 'slat', href: '#services' },
  { name: 'Glass Stairways', icon: 'stair', href: '#services' },
  { name: 'Shower Screens', icon: 'shower', href: '#services' },
  { name: 'Aluminium Flat Top Fencing', icon: 'flat-top', href: '#services' },
];

export const projects = [
  {
    name: 'Sylvania',
    image: 'sylvania' as const,
    alt: 'Frameless glass stair balustrade at a Sylvania residence',
  },
  {
    name: 'Whale Beach',
    image: 'whaleBeach' as const,
    alt: 'Frameless glass pool fencing overlooking the coast at Whale Beach',
  },
  {
    name: 'Mosman',
    image: 'mosman' as const,
    alt: 'Architectural glass balustrade on a Mosman property',
  },
  {
    name: 'Turramurra',
    image: 'turramurra' as const,
    alt: 'Glass fencing and outdoor living at a Turramurra home',
  },
];
