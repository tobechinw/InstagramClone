const express = require('express')
const router = express.Router()

router.use('/', require('#base/baseController'))
router.use('/posts', require('#posts/postsController'))
router.use('/search', require('#search/searchController'))

module.exports = router