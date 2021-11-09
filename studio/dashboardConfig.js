export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '6189c5f50cdeea8a634577f7',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-aob43sct',
                  apiId: 'a02079cf-9960-4c34-93f9-eb723fbd5a32'
                },
                {
                  buildHookId: '6189c5f57c360c8d08df6df0',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-tigyus4x',
                  apiId: '100dee72-dfb3-4c9b-a2f3-d6f37d2708bc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nicolas-kline/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-tigyus4x.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
