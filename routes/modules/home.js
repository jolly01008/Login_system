const express = require('express')
const router = express.Router()
const Users = require("../../models/Users")  


router.get('/',(req,res) => {
  const usercookie = req.cookies.userName
  //判斷是否有req.cookies.userName，若有就顯示已經登入，不需再登入一次
  if(usercookie){
    console.log(usercookie)
    return res.send(`Hi，${usercookie}，您已經登入`)
  }
  res.render('index')
})

router.post('/',(req,res) => {
  const userEmail = req.body.email
  const userPassword = req.body.password
  Users.findOne({ email:userEmail , password:userPassword })
  .lean()
  .then( data => {
    if(data){
      res.cookie('userName',data.firstName)  //如果登入成功就set cookie
      res.render('welcome',{ name: data.firstName })
    } else{
      const errorMessage = `Wrong email or password, please try again.`
      res.render('index', {errorMessage , email:userEmail})
    }
  })
  .catch( error => console.log(error))
})

module.exports = router 