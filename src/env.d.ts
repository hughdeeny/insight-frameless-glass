---
import type { ImageMetadata } from 'astro';

declare module '*.png' {
  const src: ImageMetadata;
  export default src;
}

declare module '*.jpg' {
  const src: ImageMetadata;
  export default src;
}
