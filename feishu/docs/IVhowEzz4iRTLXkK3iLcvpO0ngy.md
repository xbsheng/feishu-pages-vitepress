---
title: 浏览器原理
slug: IVhowEzz4iRTLXkK3iLcvpO0ngy
sidebar_position: 3
---


# 浏览器原理

## <b>HTTP 请求示意图</b>

八个阶段：构建请求、查找缓存、准备 IP 和端口、等待 TCP 队列、建立 TCP 连接、发起 HTTP 请求、服务器处理请求、服务器返回请求和断开连接

<img src="/assets/FBE5bKHOFoJpV5xavCdcBa8znxc.png" src-width="1142" src-height="423" align="center"/>

---

## <b>⭐️ 在浏览器里，从输入 URL 到页面展示，这中间发生了什么？</b>

1. 首先，浏览器进程接收到用户输入的 URL 请求，浏览器进程便将该 URL 转发给网络进程。
2. 然后，在网络进程中发起真正的 URL 请求。
3. 接着网络进程接收到了响应头数据，便解析响应头数据，并将数据转发给浏览器进程。
4. 浏览器进程接收到网络进程的响应头数据之后，发送“提交导航 (CommitNavigation)”消息到渲染进程；
5. 渲染进程接收到“提交导航”的消息之后，便开始准备接收 HTML 数据，接收数据的方式是直接和网络进程建立数据管道；
6. 最后渲染进程会向浏览器进程“确认提交”，这是告诉浏览器进程：“已经准备好接受和解析页面数据了”。
7. 浏览器进程接收到渲染进程“提交文档”的消息之后，便开始移除之前旧的文档，然后更新浏览器进程中的页面状态。

<img src="/assets/CWWybq6GBoe4dkxa8t5cMgZvned.png" src-width="1142" src-height="478" align="center"/>

---

