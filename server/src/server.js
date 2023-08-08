const express = require('express')

const app = express()
const port = process.env.PORT || 5000

app.get('/', (request, response) => {
    response.json({name: 'Tobechi'})
})

app.get('/colors', (request, response) => {
    response.json({color: 'Red'})
})









app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})