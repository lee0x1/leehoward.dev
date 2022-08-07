module.exports = {
  title: 'Lee G. Howard',
  tagline: 'WELCOME TO THE HOME OF',
  url: 'https://www.leegibsonhoward.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'leegibsonhoward', // Github org/user name.
  projectName: 'www.leegibsonhoward.com', // Github repo name.
  themeConfig: {
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    navbar: {
      title: 'Lee G. Howard',
      logo: {
        alt: 'Lee G. Howard Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          to: 'about/',
          activeBasePath: 'about',
          label: 'About',
          position: 'left',
        },
        {
          href: 'https://github.com/leegibsonhoward',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
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
              label: 'Welcome',
              to: 'docs/',
            },
            {
              label: 'Docusaurus Style Guide',
              to: 'docs/docusaurus/style-guide/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/leegibsonhoward',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/leegibsonhoward',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Lee G. Howard. Built with Docusaurus.`,
    },
  },
  plugins: [require.resolve('docusaurus-plugin-sass')],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
        },
        theme: {
          customCss: require.resolve('./src/scss/custom.scss'),
        },
      },
    ],
  ],
};
