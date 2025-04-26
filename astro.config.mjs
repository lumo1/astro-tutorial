// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://dynamic-panda-c3083b.netlify.app/",
  integrations: [preact()]
});