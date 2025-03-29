用Nextjs创建的单页面导航站，无数据库，站点信息以json格式保存在src/files/sites.json

## 使用方式

本地运行:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

默认端口 [http://localhost:3000](http://localhost:3000) 访问浏览器查看

## 配置

创建.env并设置如下信息：
```
SITE_TITLE=
SITE_DESCRIPTION=
GITHUB_USERNAME=
PROJECT_NAME=
```