#!/bin/bash

# 飞书文档同步 GitHub Action 触发脚本
# 使用方法: ./scripts/trigger-sync.sh [提交信息]

# 配置变量
GITHUB_TOKEN="your_github_token_here"
REPO_OWNER="your_username"
REPO_NAME="feishu-pages-vitepress"
WORKFLOW_FILE="sync-feishu-docs.yml"

# 获取提交信息参数，如果没有提供则使用默认值
COMMIT_MESSAGE=${1:-"docs: 手动同步飞书文档"}

# 检查 GitHub Token 是否已设置
if [ "$GITHUB_TOKEN" = "your_github_token_here" ]; then
    echo "❌ 请先设置 GITHUB_TOKEN 环境变量或在脚本中配置"
    echo "获取 Token: https://github.com/settings/tokens"
    exit 1
fi

echo "🚀 正在触发飞书文档同步..."
echo "📝 提交信息: $COMMIT_MESSAGE"

# 调用 GitHub API 触发 workflow
curl -X POST \
  -H "Authorization: token $GITHUB_TOKEN" \
  -H "Accept: application/vnd.github.v3+json" \
  "https://api.github.com/repos/$REPO_OWNER/$REPO_NAME/actions/workflows/$WORKFLOW_FILE/dispatches" \
  -d "{
    \"ref\": \"main\",
    \"inputs\": {
      \"commit_message\": \"$COMMIT_MESSAGE\"
    }
  }"

if [ $? -eq 0 ]; then
    echo "✅ Action 触发成功！"
    echo "📊 查看运行状态: https://github.com/$REPO_OWNER/$REPO_NAME/actions"
else
    echo "❌ Action 触发失败，请检查配置"
fi 