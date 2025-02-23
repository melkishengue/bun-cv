import postCssImport from 'postcss-import';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import purgeCSSPlugin from '@fullhuman/postcss-purgecss';
import cssnano from 'cssnano';

const plugin = (typeof purgeCSSPlugin.default) == "function" ? purgeCSSPlugin.default : purgeCSSPlugin

const purgecss = plugin({
  content: "./src/**/*.{js,jsx,ts,tsx}",
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/.]+/g) || []
});

export default {
  plugins: [
    postCssImport,
    tailwindcss,
    autoprefixer,
    ...process.env.NODE_ENV === "build" ?
      [purgecss, cssnano] : []
  ]
};
