const express = require('express')
const app = express()
const port = 3000
const exphbs = require("express-handlebars")
const Users = require("./models/Users")

require('./config/mongoose') // 載入mongoose

app.engine("handlebars",exphbs({defaultLayout: "main"}))
app.set("view engine","handlebars")
app.use(express.urlencoded({ extended: true })) 

app.get('/',(req,res) => {
  res.render('index')
})

app.post('/',(req,res) => {
  const userEmail = req.body.email
  const userPassword = req.body.password
  Users.findOne({ email:userEmail , password:userPassword })
  .lean()
  .then( data => {
    if(data){
      return res.render('welcome',{ name: data.firstName })
    } else{
      const errorMessage = `Wrong email or password, please try again.`
      res.render('index', {errorMessage , email:userEmail})
    }
  })
  .catch( error => console.log(error))
})

app.listen('3000', () => {
  console.log(`App is running on http://localhost:${port}`)
})

