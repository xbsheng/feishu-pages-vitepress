import DefaultTheme from 'vitepress/theme'
import mediumZoom from 'medium-zoom'
import './style/index.scss'
import { inBrowser, useRoute } from 'vitepress'
import { onMounted, watch, nextTick } from 'vue'
import { useLive2d } from 'vitepress-theme-website'
// import busuanzi from 'busuanzi.pure.js'

import '@bprogress/core/css'
import { BProgress } from '@bprogress/core'

export default {
  extends: DefaultTheme,

  enhanceApp({ app, router }) {
    if (inBrowser) {
      // BProgress.configure({ showSpinner: true })

      router.onBeforeRouteChange = () => {
        BProgress.start()
      }
      router.onAfterRouteChanged = () => {
        BProgress.done()
        // busuanzi.fetch()
      }
    }
  },

  setup() {
    const route = useRoute()
    const initZoom = () => {
      // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); // 默认
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' }) // 不显式添加{data-zoomable}的情况下为所有图像启用此功能
    }
    onMounted(() => {
      initZoom()
    })
    watch(
      () => route.path,
      () => nextTick(() => initZoom()),
    )

    //看板娘
    useLive2d({
      enable: true,
      model: {
        url: 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/hibiki/hibiki.model.json',
      },
      display: {
        position: 'right',
        width: '135px',
        height: '300px',
        xOffset: '35px',
        yOffset: '5px',
      },
      mobile: {
        show: true,
      },
      react: {
        opacity: 0.8,
      },
    })
  },
}
