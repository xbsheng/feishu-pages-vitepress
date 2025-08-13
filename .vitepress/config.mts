import path from 'node:path'
import { DefaultTheme, defineConfig } from 'vitepress'
import markdownItTaskCheckbox from 'markdown-it-task-checkbox'
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
      link: `/${doc.slug}`,
      collapsed: false,
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
  title: 'blog',
  description: 'A VitePress Site',
  cleanUrls: true,
  base: process.env.VITEPRESS_BASE,
  srcDir,
  srcExclude: ['SUMMARY.md'],
  sitemap: {
    hostname: 'https://blog.quarkcode.cn',
  },
  head: [
    [
      'script',
      {},
      `var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?2cde7fb3fb56f53f18454b488082224e";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
      `,
    ],
  ],
  markdown: {
    config: md => {
      md.use(markdownItTaskCheckbox)
      md.renderer.rules.heading_close = (tokens, idx, options, env, slf) => {
        let htmlResult = slf.renderToken(tokens, idx, options)
        // if (tokens[idx].tag === 'h1') htmlResult += `<ArticleMetadata />`
        return htmlResult
      }
    },
    image: {
      lazyLoading: true,
    },
    theme: 'one-dark-pro',
  },
  vite: {
    ssr: {
      noExternal: ['vitepress-theme-website'],
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '../feishu/docs'),
      },
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '网站导航', link: '/nav' },
    ],
    sidebar: convertDocsToSidebars(docs),

    search: {
      provider: 'local',
    },

    outline: {
      level: 'deep',
    },

    editLink: {
      pattern: 'https://github.com/xbsheng/feishu-pages-vitepress/blob/main/feishu/docs/:path',
      text: '为此页提供修改建议',
    },

    //上次更新时间
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/xbsheng' }],
  },
})
