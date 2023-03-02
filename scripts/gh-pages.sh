#!/usr/bin/env zsh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn run docs:build

# 进入生成的文件夹
cd ../docs/.vitepress/dist

# 如果是发布到自定义域名

git init
git add -A
git commit -m 'deploy to the gh-pages'

