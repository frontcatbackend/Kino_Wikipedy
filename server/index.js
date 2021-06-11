const express = require('express')
require('dotenv').config()
const PORT = process.env.PORT || 5000
const sequelize = require('./db')
const cors = require('cors')
// const {run} = require('./models/models')
const router = require('./routes/index.router')

const app = express()

app.use(cors())
app.use(express.json())
app.use('/', router)


const start = async () => {
    try {
        await sequelize.authenticate() //функция подключения к bd по конфигу  process.env.DB_NAME, // Название БД И ТД
        await sequelize.sync({force:false})  //сверяет состояние bd со схемой
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}


start()
