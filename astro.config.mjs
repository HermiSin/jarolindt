// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://jarolindt.fuenfgroschenverlag.com',
  output: 'static',
  build: {
    format: 'directory',
  },
  trailingSlash: 'ignore',
});
