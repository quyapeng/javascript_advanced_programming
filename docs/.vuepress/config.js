module.exports = {
  base: '/javascript_advanced_programming/',
  title: 'javascript 高级程序设计4',
  description: 'javascript 高级程序设计4',
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  plugins: [
    // '@vuepress/pwa',
    '@vuepress/back-to-top',
    [
      '@vuepress/google-analytics',
      {
        ga: 'UA-106861408-1' // UA-00000000-0
      }
    ]
  ],
  // theme: [],
  themeConfig: {
    repo: 'quyapeng/javascript_advanced_programming',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '编辑此页',
    activeHeaderLinks: false,
    sidebarDepth: 3,
    lastUpdated: '上次更新',
    adsConfig: [],
    nav: [],
    sidebar: [
      {
        title: '写在前面',
        collapsable: false,
        children: ['/']
      },
      {
        title: '第一章 什么是JavaScript',
        collapsable: false,
        children: ['/project/javascript_info', '/project/javascript_start']
      }
    ]
  }
};
