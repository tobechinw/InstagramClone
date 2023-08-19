const express = require('express')
const router = express.Router()

router.get('/', (requst, response) => {
    response.json({message: 'search images'})
})

module.exports = router