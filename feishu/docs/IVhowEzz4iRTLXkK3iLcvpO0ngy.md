---
title: 浏览器原理
slug: IVhowEzz4iRTLXkK3iLcvpO0ngy
sidebar_position: 0
---


# 浏览器原理

## <b>HTTP 请求示意图</b>

八个阶段：构建请求、查找缓存、准备 IP 和端口、等待 TCP 队列、建立 TCP 连接、发起 HTTP 请求、服务器处理请求、服务器返回请求和断开连接

<img src="/assets/FBE5bKHOFoJpV5xavCdcBa8znxc.png" src-width="1142" src-height="423" align="center"/>

## <b>⭐️ 在浏览器里，从输入 URL 到页面展示，这中间发生了什么？</b>

1. 首先，浏览器进程接收到用户输入的 URL 请求，浏览器进程便将该 URL 转发给<b>网络进程</b>。
2. 然后，在网络进程中发起真正的 <b>URL 请求</b>。
3. 接着网络进程接收到了<b>响应头数据</b>，便解析响应头数据，并将数据转发给<b>浏览器进程</b>。
4. 浏览器进程接收到网络进程的响应头数据之后，发送“<b>提交导航 (CommitNavigation)</b>”消息到<b>渲染进程</b>；
5. 渲染进程接收到“提交导航”的消息之后，便开始准备<b>接收 HTML 数据</b>，接收数据的方式是直接和网络进程建立<b>数据管道</b>；
6. 最后渲染进程会向浏览器进程“<b>确认提交</b>”，这是告诉浏览器进程：“已经准备好接受和解析页面数据了”。
7. 浏览器进程接收到渲染进程“提交文档”的消息之后，便开始移除之前旧的文档，然后<b>更新</b>浏览器进程中的页面状态。

<img src="/assets/CWWybq6GBoe4dkxa8t5cMgZvned.png" src-width="1142" src-height="478" align="center"/>

## 浏览器的渲染流程

1. 渲染进程将HTML内容转换为能够读懂的<b>DOM树</b>结构。
2. 渲染引擎将CSS样式表转化为浏览器可以理解的<b>styleSheets</b>，计算出DOM节点的样式。
3. 创建<b>布局树</b>，并计算元素的布局信息。
4. 对布局树进行分层，并生成<b>分层树</b>。
5. 为每个图层生成<b>绘制列表</b>，并将其提交到合成线程。
6. 合成线程将图层分成<b>图块</b>，并在<b>光栅化线程池</b>中将图块转换成位图。
7. 合成线程发送绘制图块命令<b>DrawQuad</b>给浏览器进程。
8. 浏览器进程根据DrawQuad消息<b>生成页面</b>，并<b>显示</b>到显示器上。

<img src="/assets/M5m2bEvpeo6p8CxtGxDch8s3nrh.png" src-width="1142" src-height="745" align="center"/>

## 重排、重绘、合成

- 重排：更新元素的几何属性

重排需要更新完整的渲染流水线，所以<b>开销也是最大的</b>

<img src="/assets/Y060bglcLoKAxAxnQkTcX4EnnKg.png" src-width="1142" src-height="318" align="center"/>

- 重绘：更新元素的绘制属性

重绘省去了布局和分层阶段，所以<b>执行效率会比重排操作要高一些</b>

<img src="/assets/QFC4b18cYoHSmZx97fkcdUSenOe.png" src-width="1142" src-height="286" align="center"/>

- 合成：更改一个既不要布局也不要绘制的属性

使用CSS的transform来实现动画效果，这可以避开重排和重绘阶段，直接<b>在非主线程上执行合成动画操作</b>。这样的效率是最高的，因为是在非主线程上合成，并没有占用主线程的资源，另外也避开了布局和绘制两个子阶段，所以相对于重绘和重排，<b>合成能大大提升绘制效率</b>

<img src="/assets/CNltbrSOToFA3yx9rhCcflutnKe.png" src-width="1142" src-height="270" align="center"/>

## 同名函数、变量处理原则

- 如果是同名的函数，JavaScript编译阶段会选择最后声明的那个
- 如果变量和函数同名，那么在编译阶段，变量的声明会被忽略

```js
showName() // 1

function showName() {
  console.log(1)
}

var showName = function () {
  console.log(2)
}

showName() // 2
```

## 变量提升

<table header_row="1">
<colgroup>
<col width="198"/>
<col width="198"/>
<col width="198"/>
<col width="198"/>
</colgroup>
<thead>
<tr><th></th><th><p>function</p></th><th><p>var</p></th><th><p>let/const</p></th></tr>
</thead>
<tbody>
<tr><td><p>创建提升</p></td><td><p>✅</p></td><td><p>✅</p></td><td><p>✅</p></td></tr>
<tr><td><p>初始化提升</p></td><td><p>✅</p></td><td><p>✅ undefined</p></td><td><p>❌</p></td></tr>
<tr><td><p>赋值提升</p></td><td><p>✅</p></td><td><p>❌</p></td><td><p>❌</p></td></tr>
</tbody>
</table>

```js
console.log(fn) // [Function: fn]
function fn() {}

console.log(a) // undefined
var a = 1

console.log(b) // ReferenceError: Cannot access 'b' before initialization
let b = 2
```

