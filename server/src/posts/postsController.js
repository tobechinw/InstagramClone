const express = require('express')
const router = express.Router()

const postsService = require('./postsService')

router.get('/getPosts', (request, response) => {
    postsService.getPosts().then((answer) => console.log(answer))
})

router.post('/createPost', (request, response) => {
    postsService.savePost(request.body, 1234)
})

module.exports = router