export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5dc3a9f12687fb80b5a1b3ee',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-txufzd2v',
                  apiId: '3a34ee9b-e203-4ba8-b9ef-b9b6c047f32a'
                },
                {
                  buildHookId: '5dc3a9f237351e138d080d8e',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-c5ju97d6',
                  apiId: 'c4b1e62a-8b00-4c7c-8772-58971c7c9c9a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nabrach/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-c5ju97d6.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
