const express = require('express')
const app = express()

app.use('/cabs', require('./routes/cabhandler'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
