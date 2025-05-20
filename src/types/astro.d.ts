import 'astro';

declare module 'astro' {
  interface AstroGlobal {
    siteName?: string;
  }
}
