const mongoose = require('mongoose')  


if(process.env.NODE_ENV !== "production"){
  require('dotenv').config()}

//設定連線到mongoDB，與資料庫連線
mongoose.connect(process.env.MONGODB_URI,{
  useNewUrlParser: true,useUnifiedTopology: true })

const db = mongoose.connection //設定db並且監聽

db.on('error',()=>{
  console.log('mongodb error!')
})

db.once('open',() =>{
  console.log('mongodb connected!')
})