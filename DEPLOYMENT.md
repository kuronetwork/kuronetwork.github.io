# 部署指南

## 🚀 部署到 GitHub Pages

### 方法 1: 使用 GitHub Actions（推薦）

1. **將專案推送到 GitHub**
   ```bash
   cd new-site
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/你的用戶名/kuronetwork.github.io.git
   git push -u origin main
   ```

2. **啟用 GitHub Pages**
   - 前往 GitHub repo 設定
   - 點擊 "Pages"
   - Source 選擇 "GitHub Actions"
   - 儲存

3. **自動部署**
   - 每次推送到 main 分支會自動觸發部署
   - 等待 2-3 分鐘
   - 訪問 https://你的用戶名.github.io

### 方法 2: 手動部署

1. **建置網站**
   ```bash
   npm run build
   ```

2. **推送 out 資料夾到 gh-pages 分支**
   ```bash
   cd out
   git init
   git add .
   git commit -m "Deploy"
   git push -f https://github.com/你的用戶名/kuronetwork.github.io.git main:gh-pages
   ```

## 🌐 使用自訂網域

1. 在 `public/` 資料夾建立 `CNAME` 檔案
   ```
   kuronetwork.me
   ```

2. 在網域商設定 DNS
   ```
   A    @    185.199.108.153
   A    @    185.199.109.153
   A    @    185.199.110.153
   A    @    185.199.111.153
   ```

3. 在 GitHub repo 設定中設定自訂網域

## ✅ 驗證部署

訪問以下頁面確認：
- 首頁: https://kuronetwork.me/
- 文章索引: https://kuronetwork.me/articles/
- 關於: https://kuronetwork.me/about/
- 聯絡: https://kuronetwork.me/contact/

## 🔧 故障排除

### 404 錯誤
- 確認 `next.config.js` 中的 `basePath` 設定正確
- 確認 GitHub Pages 已啟用

### 樣式未載入
- 確認 `next.config.js` 中 `images.unoptimized` 設為 `true`
- 清除瀏覽器快取

### 連結失效
- 確認所有內部連結使用相對路徑
- 確認 `trailingSlash: true` 已設定
