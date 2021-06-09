const express = require('express')
require('dotenv').config()
const PORT = process.env.PORT || 5000
const sequelize = require('./db')
const cors = require('cors')
const {run} = require('./models/models')

const app = express()

app.use(cors())
app.use(express.json())


const start = async () => {
    try {
        await sequelize.authenticate() //функция подключения к bd по конфигу  process.env.DB_NAME, // Название БД И ТД
        await sequelize.sync({force:true}).then(()=>{
            run() //test
        })  //сверяет состояние bd со схемой
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}


start()
