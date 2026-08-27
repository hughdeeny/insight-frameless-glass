import type { ImageMetadata } from 'astro';
import sylvania01 from '../assets/images/gallery/sylvania-01.webp';
import sylvania02 from '../assets/images/gallery/sylvania-02.webp';
import sylvania03 from '../assets/images/gallery/sylvania-03.webp';
import sylvania04 from '../assets/images/gallery/sylvania-04.webp';
import sylvania05 from '../assets/images/gallery/sylvania-05.webp';
import sylvania06 from '../assets/images/gallery/sylvania-06.webp';
import whaleBeach01 from '../assets/images/gallery/whale-beach-01.webp';
import whaleBeach02 from '../assets/images/gallery/whale-beach-02.webp';
import whaleBeach03 from '../assets/images/gallery/whale-beach-03.webp';
import whaleBeach04 from '../assets/images/gallery/whale-beach-04.webp';
import mosman01 from '../assets/images/gallery/mosman-01.webp';
import mosman03 from '../assets/images/gallery/mosman-03.webp';
import mosman04 from '../assets/images/gallery/mosman-04.webp';
import mosman05 from '../assets/images/gallery/mosman-05.webp';
import mosman06 from '../assets/images/gallery/mosman-06.webp';
import mosman08 from '../assets/images/gallery/mosman-08.webp';
import turramurra01 from '../assets/images/gallery/turramurra-01.webp';
import turramurra02 from '../assets/images/gallery/turramurra-02.webp';
import turramurra04 from '../assets/images/gallery/turramurra-04.webp';

export const projectGalleries: Record<string, { src: ImageMetadata; alt: string }[]> = {
  sylvania: [
    { src: sylvania04, alt: 'Sylvania Glass Stairs' },
    { src: sylvania01, alt: 'Sylvania Glass Balustrade' },
    { src: sylvania05, alt: 'Sylvania Glass Balustrade' },
    { src: sylvania02, alt: 'Sylvania Glass Balustrade' },
    { src: sylvania06, alt: 'Sylvania Glass Balustrade' },
    { src: sylvania03, alt: 'Sylvania Glass Balustrade' },
  ],
  'whale-beach': [
    { src: whaleBeach01, alt: 'Whale Beach Glass Balustrade' },
    { src: whaleBeach02, alt: 'Whale Beach Glass Balustrade' },
    { src: whaleBeach03, alt: 'Whale Beach Glass Balustrade' },
    { src: whaleBeach04, alt: 'Whale Beach Glass Balustrade' },
  ],
  mosman: [
    { src: mosman01, alt: 'Mosman Glass Balustrade' },
    { src: mosman03, alt: 'Mosman Glass Balustrade' },
    { src: mosman04, alt: 'Mosman Glass Balustrade' },
    { src: mosman05, alt: 'Mosman Glass Balustrade' },
    { src: mosman06, alt: 'Mosman Glass Balustrade' },
    { src: mosman08, alt: 'Mosman Glass Balustrade' },
  ],
  turramurra: [
    { src: turramurra04, alt: 'Turramurra Glass Balustrade' },
    { src: turramurra02, alt: 'Turramurra Glass Balustrade' },
    { src: turramurra01, alt: 'Turramurra Glass Balustrade' },
  ],
};
