
const db = require('../db/mongo')
const s3 = require('../db/aws-s3')

const getPosts = async () => {
    return new Promise((resolve, reject) =>{
        resolve({
            _id: 1,
            name: 'Tobechi'
        })
    })
}

const savePost = async (requestBody, userId) => {
    await s3.savePost(requestBody, userId)
}

module.exports = {
    getPosts,
    savePost
}