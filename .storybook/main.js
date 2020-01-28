module.exports = {
  stories: ['../stories/**/*.stories.js'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  addons: ['@storybook/addon-knobs/register'],
  webpackFinal: async config => {
    // do mutation to the config

    return config;
  },
};
