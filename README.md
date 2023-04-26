# Login 帳密檢查機制

![image about URL Shortener](https://github.com/jolly01008/Login_system/blob/main/帳密檢查機制.png)

## 介紹

1. 使用者可以輸入帳號及密碼登入網頁

## 開發工具

- Node.js @14.16.0
- Express @4.16.4
- Express-Handlebars @3.0.0
- Bootstrap

- MongoDB
- mongoose @7.0.3

- dotenv @16.0.3

## 開始使用

1. 請先確認有安裝 node.js 與 npm

2. 將專案 clone 到本地

3. 開啟終端機(Terminal)，進入存放此專案的資料夾

```
cd Login_system
```

4. 安裝所需套件

```
npm i express@4.16.4 express-handlebars@3.0.0
```

5. 安裝 mongoose

```
npm i mongoose@7.0.3
```

6. 安裝 nodemon (如已安裝可跳過此步驟)

```
npm install -g nodemon
```

7. 啟動伺服器，執行 app.js 檔案

```
npm run dev
```

8. 當 terminal 出現以下字樣，表示伺服器已啟動

> Express is running on http://localhost:3000
>
> mongoDB connect success!
