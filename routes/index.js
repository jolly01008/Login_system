const express = require('express') //引用expres
const router = express.Router() //引用 Express路由器

const home = require('./modules/home') //載入home.js檔案

router.use('/',home) //網址結構符合 /字串的 request 導向 home 模組

module.exports = router //匯出路由器