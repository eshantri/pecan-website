/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "PEcAn Project",
  tagline:
    "Ecosystem science, policy, and management informed by the best available data and models",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "PEcAn", // Usually your GitHub org/user name.
  projectName: "PEcAn Project", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "PEcAn",
      logo: {
        alt: "PEcAn Logo",
        src: "img/logo.jpeg",
      },
      items: [
        {
          to: "docs/1234",
          position: "left",
          label: "Documentation",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          label: "About",
          position: "left",
          items: [
            { to: "/about", label: "About", position: "left" },
            { to: "/people", label: "People", position: "left" },
            { to: "/news", label: "News", position: "left" },
            { to: "/workshops", label: "Workshops", position: "left" },
          ],
        },
        {
          href: "https://github.com/PecanProject",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
        {
          href: "https://opensource.ncsa.illinois.edu/projects/artifacts.php?key=PECAN",
          label: "Download",
          position: "left",
        },
        {
          type: "docsVersionDropdown",
          position: "right",
          dropdownActiveClassDisabled: true,
          dropdownItemsAfter: [
            {
              to: "/versions",
              label: "All versions",
            },
          ],
        },
      ],
    },
    footer: {
     
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/1234",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Slack",
              href: "https://join.slack.com/t/pecanproject/shared_invite/enQtMzkyODUyMjQyNTgzLWEzOTM1ZjhmYWUxNzYwYzkxMWVlODAyZWQwYjliYzA0MDA0MjE4YmMyOTFhMjYyMjYzN2FjODE4N2Y4YWFhZmQ",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Google",
              to: "/google",
            },
            {
              label: "GitHub",
              href: "https://github.com/PecanProject",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} PEcAn Project.`,
    },
    hideableSidebar: true,
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
          versions: {
   
              current: {
                label: 'Develop',
                path: 'docs',
              },
          
          },
          onlyIncludeVersions: ["master", "current"], // ex: ["current", "1.0.0", "2.0.0"]
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
