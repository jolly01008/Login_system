const express = require('express')
const router = express.Router()
const Users = require("../../models/Users")  


router.get('/',(req,res) => {
  res.render('index')
})

router.post('/',(req,res) => {
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

module.exports = router 