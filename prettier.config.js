const styleguide = require('@vercel/style-guide/prettier');

module.exports = {
  ...styleguide,
  semi: false,
  printWidth: 120,
  plugins: [...styleguide.plugins, 'prettier-plugin-tailwindcss'],
};
