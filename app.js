const express = require('express')
const app = express()
const port = 3000
const exphbs = require("express-handlebars")
const session = require("express-session")

require('./config/mongoose') // 載入mongoose
const routes = require('./routes')

app.engine("handlebars",exphbs({defaultLayout: "main"}))
app.set("view engine","handlebars")
app.use(express.urlencoded({ extended: true })) 
app.use(session({
  secret: 'mySecret',
  name: 'user',
  resave: true,
  saveUninitialized: false,
}))

app.use(routes) //將request 導入路由器

app.listen('3000', () => {
  console.log(`App is running on http://localhost:${port}`)
})

