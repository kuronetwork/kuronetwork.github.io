# Kuro Portfolio Website

現代化的個人網站，展示資安文章索引和個人資訊。

## 🚀 快速開始

### 安裝依賴
```bash
npm install
```

### 開發模式
```bash
npm run dev
```
訪問 http://localhost:3000

### 建置生產版本
```bash
npm run build
```

### 匯出靜態網站
```bash
npm run export
```
輸出到 `out/` 資料夾

## 📝 如何新增文章

編輯 `data/articles.ts` 檔案：

```typescript
{
  id: 60,  // 遞增編號
  title: "新文章標題",
  date: "2024-12-14",
  category: "資訊安全",  // 或其他分類
  tags: ["標籤1", "標籤2"],
  url: "https://medium.com/blacksecurity/文章連結",
  featured: false  // 設為 true 會在首頁顯示
},
```

## 📂 專案結構

```
new-site/
├── app/              # Next.js 頁面
├── components/       # React 元件
├── data/            # 文章資料
├── public/          # 靜態資源
└── package.json
```

## 🌐 部署到 GitHub Pages

1. 建置網站：`npm run export`
2. 將 `out/` 資料夾內容推送到 GitHub Pages
3. 或使用 GitHub Actions 自動部署

## 🎨 技術棧

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- 靜態網站生成 (SSG)
