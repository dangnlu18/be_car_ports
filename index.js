const express = require('express')
const router = require('./routes/server')

const app = express()

app.use(express.json())
app.use(router)

app.listen(4040, () => console.log('server listening on port 4040')) 