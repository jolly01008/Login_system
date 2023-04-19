const db = require('../../config/mongoose') //引入mongoDB連線
const User = require('../Users') //引入Users model，資料綱要
const userList = require('../../userList.json') //載入userList的json資料


db.once('open', () => {
  console.log('mongoDB connected success!')
  User.create(userList)
    .then(() => {
      console.log('userSeeder done!')
      db.close()
    })
    .catch((error) => console.log(error))
})