export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '60c325863911c3e3f6e2a4e6',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-zessutqs',
                  apiId: '89b109d0-a241-4c3b-b25b-a450a0f679e1'
                },
                {
                  buildHookId: '60c325861ef0e8e47ad64d9c',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-g7aigd6w',
                  apiId: 'dbf2181c-c94a-4c35-9ff4-ec367b3896ff'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/winstontech/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-g7aigd6w.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
