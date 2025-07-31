---
title: 这是子文档1
slug: DX5YwIxvOiqbPvkdd8Cc21ZOncb/UbpQwSziwir5Pnka7KLczlZjnuc
sidebar_position: 0
---


# 这是子文档1

===这是子文档1这是子文档1这是子文档1这是子文档1这是子文档1

<img src="/assets/U8PsbyLaVo8Wgsxkh7lcLX86nXb.gif" src-width="320" src-height="198" align="center"/>

```ts
export default {
  data () {
    return {
      msg: 'Removed' // [!code --]
      msg: 'Added' // [!code ++]
    }
  }
}
```

```ts
export default {
  data () {
    return {
      msg: 'Highlighted!' // [!code highlight]
    }
  }
}
```

```text
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VitePress is awesome',
      lorem: 'ipsum'
    }
  }
}
```

```js
export default {
  data () {
    return {
      msg: 'Error', // [!code error]
      msg: 'Warning' // [!code warning]
    }
  }
}
```

::: code-group

```text
/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  // ...
}

export default config
```

```text
import type { UserConfig } from 'vitepress'

const config: UserConfig = {
  // ...
}

export default config
```

::: code-group

```js
/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  // ...
}

export default config
```

```ts
import type { UserConfig } from 'vitepress'

const config: UserConfig = {
  // ...
}

export default config
```

:::

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>🎨</div>
<p>qweqeqwqew</p>
</div>

---

- [ ] 1

- [x] 2

- [x] 3

- [ ] 4

- [x] 5

- [ ] 6

- [ ] 7

- [ ] 8

<div class="flex gap-3 columns-3" column-size="3">
<div class="w-[33%]" width-ratio="33">
<p>1asdsaadsdas</p>
<p>adadasdas</p>
</div>
<div class="w-[33%]" width-ratio="33">
<p>2</p>
<p>addaad</p>
</div>
<div class="w-[33%]" width-ratio="33">
<p>3</p>
<p>1</p>
</div>
</div>

```text
flowchart LR
  Start --> Stop
```

```ts
enhanceApp({ app, router }) {
// 注册全局组件
app.component('ArticleMetadata', ArticleMetadata)

if (inBrowser) {
  router.onBeforeRouteChange = () => {
    BProgress.start()
  }
  router.onAfterRouteChanged = () => {
    BProgress.done()
    busuanzi.fetch()
  }
}
},
```

