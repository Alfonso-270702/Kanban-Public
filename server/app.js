require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const route = require('./routes/index')
const cors = require('cors')
const errHandler = require('./middleware/errHandler')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(route)
app.use(errHandler)

app.listen(port,()=> console.log(`Runing on port ${port}`))