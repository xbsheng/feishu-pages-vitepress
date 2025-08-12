---
title: 计算机组成原理
slug: Km1jwdG8YiwDKAkCvXxcAt7inQh
sidebar_position: 0
---


# 计算机组成原理

## CPU流水线

### 冒险（Hazard）

- 结构冒险（Structural Hazard）
    - 解决方案：增加资源
        - 借鉴哈佛结构的思路，在 CPU 内部的高速缓存部分进行了区分，把高速缓存分成了指令缓存（Instruction Cache）和数据缓存（Data Cache）两部分

<img src="/assets/EQztb7BbrocyMpxrxy1cdxJWnWI.png" src-width="2023" src-height="1792" align="center"/>

- 数据冒险（Data Hazard）
    - 解决方案
        - 流水线停顿
        - 操作数前推
        - 乱序执行

- 控制冒险（Control Hazard）
    - 解决方案：
        - 分支预测：
            - [ ] TODO: 为什么不同环境下js运行效率对比的结果相反呢？chrome环境下和理论的结果不同
    > 循环嵌套应遵循「内层循环迭代次数多，外层循环迭代次数少」的原则，以提高 CPU 缓存利用率，充分利用引擎优化，从而提升执行效率。这也是编写高性能多层循环的常见优化技巧。

```js
console.time('1')
for(let i = 0; i < 100; i++) {
  for(let j = 0; j < 1000; j++) {
    for(let k = 0; k < 10000; k++) {
    }
  }
}
// chrome: 416.739013671875 ms
// nodejs: 416.37ms
console.timeEnd('1')


console.time('2')
for(let i = 0; i < 10000; i++) {
  for(let j = 0; j < 1000; j++) {
    for(let k = 0; k < 100; k++) {
    }
  }
}
// chrome: 266.676025390625 ms
// nodejs: 485.416ms
console.timeEnd('2')
```

