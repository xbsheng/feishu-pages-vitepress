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

