// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
require('dotenv').config();
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DASA Docs',
  tagline: 'Data Structures and Algorithms',
  url: 'https://alexmnet.github.io',
  baseUrl: '/dasa-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/dasa-docs-favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'alexmnet', // Usually your GitHub org/user name.
  projectName: 'dasa-docs', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: true,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },

        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'DASA Docs',
        logo: {
          alt: 'Dasa Docs Logo',
          src: 'img/dasa-docs-favicon.ico',
          srcDark: 'img/dasa-docs-favicon.ico',
        },
        items: [
          {
            href: 'https://github.com/AlexMNet/dasa-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'About',
                to: '/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Personal Site',
                href: 'https://www.alexmaldonado.dev/',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/alexmnet/',
              },
              {
                label: 'Github',
                href: 'https://github.com/AlexMNet',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DASA Docs.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      liveCodeBlock: {
        playgroundPosition: 'bottom',
      },
    }),
  plugins: ['@docusaurus/theme-live-codeblock'],
};

module.exports = config;
