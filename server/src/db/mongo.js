const mc = require('mongodb').MongoClient

const { MONGODB } = require('../config')


module.exports = {
    editProfile,
    loadProfile,
    saveProfile
}

async function editProfile(username, body) {
    try {
        const client = await mc.connect(MONGODB)
        let db = client.db('instagram')
        const profile = await db.collection('users').updateOne(
            {username: username},
            {}
        )
        client.close()
        return profile
    }catch (err) {
        throw err
    }
}

async function loadProfile( username ) {
    try {
        const client = await mc.connect(MONGODB)
        let db = client.db('instagram')
        const profile = await db.collection('users').findOne({
            username: username
        })
        client.close()
        return profile
    } catch (err) {
        throw err
    }
}

async function saveProfile(username) {
    try {
        const client = await mc.connect(MONGODB)
        let db = client.db('instagram')
        const user = await db.collection('users').insertOne({
            username: username
        })
        client.close()
        return user
    } catch(err) {
        throw err
    }
}
