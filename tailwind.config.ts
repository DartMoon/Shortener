import type { Config } from 'tailwindcss';
const plugin = require('tailwindcss/plugin');
const { nextui } = require('@nextui-org/react');
import { PluginAPI } from 'tailwindcss/types/config';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',

    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [
    nextui(),
    plugin(function ({ addBase, theme }: PluginAPI) {
      addBase({
        h1: { fontSize: theme('fontSize.2xl') },
      });
    }),
  ],
};
export default config;
