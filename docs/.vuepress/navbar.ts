import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  { text: '文章', link: '/blog/' },
  //{ text: '标签', link: '/blog/tags/' },
  { text: '分类', link: '/blog/categories/' },
  { text: '归档', link: '/blog/archives/' },
  /**{
    text: '笔记',
    items: [{ text: '示例', link: '/notes/demo/README.md' }]
  },**/
])
