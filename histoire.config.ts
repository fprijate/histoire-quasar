import { defineConfig } from 'histoire'
import { HstVue } from '@histoire/plugin-vue'

export default defineConfig({
  plugins: [
    HstVue(),
  ],
  tree: {
   /* file: 'title' path */
   file: ({ title, path }) => title.split('/'), // equivalent to default behavior
  }
})
