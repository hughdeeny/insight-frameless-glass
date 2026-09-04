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
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Quote calculator', href: '/calculator' },
  { label: 'Contact', href: '/contact' },
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

export type ServiceImage =
  | 'pool'
  | 'balustrade'
  | 'stair'
  | 'shower'
  | 'slat'
  | 'flat-top';

export const services: {
  name: string;
  slug: string;
  icon: ServiceIcon;
  image: ServiceImage;
  href: string;
  pageOrder: number;
  alt: string;
  paragraphs: string[];
}[] = [
  {
    name: 'Glass Pool Fencing',
    slug: 'glass-pool-fencing',
    icon: 'pool',
    image: 'pool',
    href: '/services#glass-pool-fencing',
    pageOrder: 1,
    alt: 'Custom glass pool fencing in Sydney',
    paragraphs: [
      'Optimise the look of your outdoor space with our premium Glass Pool Fencing. Perfect for new builds and traditional properties alike, this system combines safety with style to enhance the overall look while ensuring secure boundaries.',
      'We have an in-depth understanding of pool barrier compliance rules and guarantee that all of our work meets the current standards. So sit back and enjoy uninterrupted views of fun in the sun :).',
    ],
  },
  {
    name: 'Glass Balustrades',
    slug: 'glass-balustrades',
    icon: 'balustrade',
    image: 'balustrade',
    href: '/services#glass-balustrades',
    pageOrder: 2,
    alt: 'Glass balustrade looking out over a Sydney outlook',
    paragraphs: [
      'Take in the sights with our stunningly secure Glass Balustrades. Whether a beachfront balcony in Bondi, a tree lined vista in Forestville or suburban bliss in Beecroft, our signature glass balustrades will unveil the beauty of an outlook while complementing the overall look of your structure. We guarantee safety.',
    ],
  },
  {
    name: 'Aluminium Slat Fencing & Gates',
    slug: 'aluminium-slat-fencing',
    icon: 'slat',
    image: 'slat',
    href: '/services#aluminium-slat-fencing',
    pageOrder: 5,
    alt: 'Aluminium slat fencing in Sydney',
    paragraphs: [
      'For areas that require privacy, our slat fencing is the ideal solution. A modern design coming in a wide range of colours, slat fencing is secure and can really add to the look of a property. Slat fencing blends well with a range of different materials including glass!',
    ],
  },
  {
    name: 'Glass Stairways',
    slug: 'glass-stairways',
    icon: 'stair',
    image: 'stair',
    href: '/services#glass-stairways',
    pageOrder: 3,
    alt: 'Glass stairway installation in Sydney',
    paragraphs: [
      'Pass seamlessly between levels with our chic Glass Stairways. Choose from our range of hardware types and finishes to match your aesthetic goals with style and safety.',
    ],
  },
  {
    name: 'Shower Screens',
    slug: 'shower-screens',
    icon: 'shower',
    image: 'shower',
    href: '/services#shower-screens',
    pageOrder: 4,
    alt: 'Frameless glass shower screen in a Sydney bathroom',
    paragraphs: [
      'The profound interplay between visual flow and lively gleam makes our Frameless Shower Screens a must have feature in any bathroom. Whether you have a classic or modern bathroom design, our Frameless Shower Screens are always pleasing. We supply a wide range of hardware finishes to match the surrounding colours and textures.',
    ],
  },
  {
    name: 'Aluminium Flat Top Fencing',
    slug: 'aluminium-flat-top-fencing',
    icon: 'flat-top',
    image: 'flat-top',
    href: '/services#aluminium-flat-top-fencing',
    pageOrder: 6,
    alt: 'Aluminium flat top fencing in Sydney',
    paragraphs: [
      'A practical and budget solution ideal for soft soil areas. Flat top fencing is a classic design and more than fit for purpose. Choose from a wide range of colours.',
    ],
  },
];

export const projects = [
  {
    name: 'Sylvania',
    slug: 'sylvania',
    image: 'sylvania' as const,
    year: 2023,
    quote: 'It was crucial that we gave this high end renovation the finish it deserved',
    alt: 'Frameless glass stair balustrade at a Sylvania residence',
    paragraphs: [
      'Being among the last trades to enter a project makes our work a crucial piece in the puzzle of home building. For this highly customised renovation we were contracted to install the pool fence as well as stairway and balcony balustrades. Choosing different hardware types and finishes the customer was open to blending styles which we happily obliged. Ensuring safety compliance throughout, everything went smoothly with another happy customer.',
    ],
  },
  {
    name: 'Whale Beach',
    slug: 'whale-beach',
    image: 'whaleBeach' as const,
    year: 2024,
    quote: 'Uninterrupted ocean views were key!',
    alt: 'Frameless glass pool fencing overlooking the coast at Whale Beach',
    paragraphs: [
      'A truly wondrous view deserved only the clearest option. For this project we installed a PosiGlaze channel system to accommodate ultra clear laminated glass panels. Working closely with engineers we produced a fully frameless result that would stand up to high winds while endorsing those beachy ocean views. A project with all the right design steps requires expert tradesmen to ensure that it is finished correctly. That’s where we came in.',
    ],
  },
  {
    name: 'Mosman',
    slug: 'mosman',
    image: 'mosman' as const,
    year: 2023,
    quote: 'Iconic Harbour Views',
    alt: 'Architectural glass pool fencing on a Mosman property overlooking the harbour',
    paragraphs: [
      'Only the best would do for this magnificent pool build.',
      'With views over to Rose Bay and Vaucluse, this remarkable pool build required fencing that would enhance the view while accentuating the striking nature of the build.',
      'This project involved a number of compliance and design considerations which required careful consideration and cooperation. Combining different hardware types we managed to do justice to this wonderful project while meeting all the necessary requirements.',
    ],
  },
  {
    name: 'Turramurra',
    slug: 'turramurra',
    image: 'turramurra' as const,
    year: 2019,
    quote: 'Only the best would do for this magnificent renovation',
    alt: 'Glass balustrade and pool fencing at a Turramurra home',
    paragraphs: [
      'Set close to the beautiful Ku-ring-gai Chase National Park in one of Sydney’s premier suburbs, this bespoke renovation contracted our team for the design and installation of glass balustrade and pool fencing that would accentuate its striking beauty.',
      'This customer wanted a modern feel so we opted for a striking matte black finish for the hardware. The pool fence glass is installed close to the edge to optimise space while creating a seamless flow. The custom balustrade glass adds an amazing sheen to the structure. There were some compliance considerations for this project which we carefully navigated, settling on an efficient layout that would emanate the sumptuous surroundings.',
    ],
  },
];

export type Project = (typeof projects)[number];
