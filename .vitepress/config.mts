import fs from 'node:fs'
import path from 'node:path'
import { DefaultTheme, defineConfig } from 'vitepress'
import docs from '../feishu/docs.json'

const srcDir = path.resolve(__dirname, '../feishu/docs')

/**
 * Convert feishu-pages's docs.json into VitePress's sidebar config
 * @param docs from `docs.json`
 * @returns
 */
function convertDocsToSidebars(docs: any) {
  const sidebars: DefaultTheme.SidebarItem[] = []
  for (const doc of docs) {
    let sidebar: DefaultTheme.SidebarItem = {
      text: doc.title,
      link: doc.slug,
    }
    if (doc.children.length > 0) {
      sidebar.items = convertDocsToSidebars(doc.children)
    }
    sidebars.push(sidebar)
  }

  return sidebars
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'My Awesome Project',
  description: 'A VitePress Site',
  srcDir,
  rewrites: {
    'RmnxwelqyiuNN0kaDf2cOMDmnRd.md': 'index.md',
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: convertDocsToSidebars(docs),

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
  },
})
