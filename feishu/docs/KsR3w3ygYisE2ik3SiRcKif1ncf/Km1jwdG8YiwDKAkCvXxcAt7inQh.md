---
title: 计算机组成原理
slug: KsR3w3ygYisE2ik3SiRcKif1ncf/Km1jwdG8YiwDKAkCvXxcAt7inQh
sidebar_position: 0
---


# 计算机组成原理

## CPU流水线

### 冒险（Hazard）

- 结构冒险（Structural Hazard）
    - 解决方案：
        - 增加资源
            - 借鉴哈佛结构的思路，在 CPU 内部的高速缓存部分进行了区分，把高速缓存分成了指令缓存（Instruction Cache）和数据缓存（Data Cache）两部分
            <img src="/assets/EQztb7BbrocyMpxrxy1cdxJWnWI.png" src-width="2023" src-height="1792" align="center"/>

- 数据冒险（Data Hazard）
    - 解决方案
        - 流水线停顿
        - 操作数前推
        - 乱序执行

