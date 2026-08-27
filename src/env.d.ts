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

declare module '*.webp' {
  const src: ImageMetadata;
  export default src;
}

declare module '*.avif' {
  const src: ImageMetadata;
  export default src;
}

declare module '*.svg?raw' {
  const src: string;
  export default src;
}
