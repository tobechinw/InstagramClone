const express = require('express')
const router = express.Router()

// const bodyParser = require('body-parser')
// rou


router.get('/', (request, response) => {
    response.json({message: 'yeah'})
})

router.post('/register', (request, response) => {
    console.log('logging request')
    console.log(request.body)
    response.end()
})

module.exports = router