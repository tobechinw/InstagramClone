import client from './client'

const endpoint = '/posts'

const getPosts = () => client.get(endpoint)


const addPost = ( post ) => {
    const postData = {
        image: post.image,
        caption: post.caption
    }

    if (post.location) postData[location] = post.location

    client.post(endpoint, data)
        .then( response => {
            if(response.ok) {
                console.log('Post successfully saved')
            }else{
                console.error('Error sending post')
            }
        })
}

export default {
    getPosts,
    addPost
}