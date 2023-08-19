const { S3 } = require('@aws-sdk/client-s3')
const fs = require('fs')

const { accessKeyId, secretAccessKey } = require('../config')

const region = 'us-east-1'
const s3 = new S3({ 
    region: region, 
    credentials: { 
        accessKeyId: accessKeyId, 
        secretAccessKey: secretAccessKey 
    } 
})

module.exports = {
    getPosts,
    getUserPosts,
    savePost
}

async function getPosts() {
    const prefix = `users/posts`
    try {
        const response = await s3.listObjectsV2({
            Bucket: 'instagram-clone-app-tdn-69170',
            Prefix: prefix
        })
    } catch(err) {
        console.error(err)
    }
}

async function getUserPosts( userId ) {
    const prefix = `users/posts/${userId}`

    try {
        const response = await s3.listObjectsV2({
            Bucket: 'instagram-clone-app-tdn-69170',
            Prefix: prefix
        })
    } catch(err) {
        console.error(err)
    }
}

async function savePost( post, userId ) {
    const image = fs.readFileSync(post)

    const key = `users/posts/${userId}/${Math.random()
    .toString(36)
    .substring(7)}.jpeg`

    console.log(key)

    await s3.putObject ({
        Body: image,
        Bucket: 'instagram-clone-app-tdn-69170',
        Key: key
    })
}