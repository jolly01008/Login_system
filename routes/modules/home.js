const express = require('express')
const router = express.Router()
const Users = require("../../models/Users")  


router.get('/',(req,res) => {
  const userSession = req.session.user
  //進到首頁查看是否有userSession
  if(userSession){
    console.log("req.session:",req.session)
    console.log("req.sessionID:",req.sessionID)
    return res.render('welcome',{ name: userSession })
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
      req.session.user = data.firstName  //把使用者資訊存入session store
      console.log("req.sessionID :",req.sessionID)
      res.render('welcome',{ name: data.firstName })
    } else{
      const Message = `Wrong email or password, please try again.`
      res.render('index', {Message , email:userEmail})
    }
  })
  .catch( error => console.log(error))
})

router.get('/logout',(req,res)=>{
  const Message = `您已經登出`
  req.session.destroy(() => {
    console.log('session destroyed')
    res.render('index',{ Message })
  })  
})

module.exports = router 