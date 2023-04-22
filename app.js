const express = require('express')
const app = express()
const port = 3000
const exphbs = require("express-handlebars")
const Users = require("./models/Users")

app.engine("handlebars",exphbs({defaultLayout: "main"}))
app.set("view engine","handlebars")
app.use(express.urlencoded({ extended: true })) 

app.get('/',(req,res) => {
  res.render('index')
})

app.post('/',(req,res) => {
  const email = req.body.email
  const userPassword = req.body.password
  const error = "Your Email is fail."
  console.log(req.body , email , userPassword)
  Users.findOne({ email })
    .lean()
    .then( data => {
      if(data === null ){
        return res.render('index',{error , email})
      }
      if(data.password === userPassword ){
        return res.render('welcome',{name: data.firstName})
      }
      else{
        return res.render('index',{error,email})
      }
    })
})

app.listen('3000', () => {
  console.log(`App is running on http://localhost:${port}`)
})

