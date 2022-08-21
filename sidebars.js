module.exports = {
  docs: [
    {
      type: 'doc',
      id: 'welcome',
    },
    {
      type: 'category',
      label: 'Software Development',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'category',
          label: 'C++ Programming',
          link: {
            type: 'generated-index',
          },
          items: [
            {
              type: 'category',
              label: 'Testing',
              items: ['software-dev/cpp/testing/googlemock'],
            },
          ],
        },
        {
          type: 'category',
          label: 'C Programming',
          items: ['software-dev/c/escape'],
        },
        {
          type: 'category',
          label: 'Node.js',
          items: ['software-dev/nodejs/nvmwindows'],
        },
        {
          type: 'category',
          label: 'Docusaurus',
          items: ['software-dev/docusaurus/style-guide'],
        },
      ],
    },
  ],
};
