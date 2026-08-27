// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.insightframelessglass.com.au',
  compressHTML: true,
  redirects: {
    '/about-insight-glass-sydney': '/about',
    '/services-glass-shower-screen-balustrade-fencing': '/services',
    '/projects-glass-balustrades-pool-fence-sydney': '/projects',
    '/contact-insight-frameless-glass-sydney': '/contact',
    '/project/sylvania': '/projects/sylvania',
    '/project/whale-beach': '/projects/whale-beach',
    '/project/mosman': '/projects/mosman',
    '/project/turramurra': '/projects/turramurra',
  },
});
