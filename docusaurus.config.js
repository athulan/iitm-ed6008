// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ED6008: Industry 4.0 and Smart Manufacturing',
  tagline: '',
  url: 'http://course.athulan.com/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'athulan', // Usually your GitHub org/user name.
  projectName: 'iitm-ed6008', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
			path: 'course',
			routeBasePath: '/', 
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: false,
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
        title: 'ED6008: Industry 4.0 and Smart Manufacturing',
        logo: {
          alt: 'Amazing Logo Here',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'right',
            label: 'Course',
          },
          /**{to: '/blog', label: 'Blog', position: 'right'},**/
          {
            href: 'https://github.com/athulan/iitm-ed6008',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Links',
            items: [
              {
                label: 'Lectures',
                to: '/lectures/lecture-01',
              },
              // {
              //   label: 'Assignments',
              //   to: '/docs/assignments/assignment-01'
              // }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/athulan/iitm-ed6008/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Athulan Vijayaraghavan, Chennai, India`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
