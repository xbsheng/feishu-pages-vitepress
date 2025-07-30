# GitHub Actions 使用说明

## 飞书文档同步 Action

这个 GitHub Action 会自动同步飞书文档并提交到仓库。

### 触发方式

#### 1. 手动触发

- 在 GitHub 仓库页面，点击 "Actions" 标签
- 选择 "Sync Feishu Documents" workflow
- 点击 "Run workflow" 按钮
- 可选择输入自定义的提交信息

#### 2. 定时触发

- 每天凌晨 2 点自动执行
- 无需人工干预

#### 3. API 触发

可以通过 GitHub API 手动触发：

```bash
curl -X POST \
  -H "Authorization: token YOUR_GITHUB_TOKEN" \
  -H "Accept: application/vnd.github.v3+json" \
  https://api.github.com/repos/xbsheng/feishu-pages-vitepress/actions/workflows/sync-feishu-docs.yml/dispatches \
  -d '{
    "ref": "main",
    "inputs": {
      "commit_message": "docs: 通过api同步飞书文档"
    }
  }'
```

### 配置要求

1. 确保仓库有 `GITHUB_TOKEN` 权限（默认已配置）
2. 确保 `feishu-pages` 配置正确
3. 确保 Node.js 和 pnpm 环境可用

### 工作流程

1. 检出代码
2. 设置 Node.js 环境
3. 安装 pnpm
4. 安装项目依赖
5. 执行 `pnpm sync` 同步飞书文档
6. 检查是否有文件变更
7. 如果有变更，自动提交并推送到仓库

### 注意事项

- Action 只会在有文档变更时才提交代码
- 使用 GitHub Actions 的默认用户身份进行提交
- 支持自定义提交信息
- 包含错误处理和状态输出
