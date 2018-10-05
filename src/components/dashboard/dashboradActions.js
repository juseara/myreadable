import { FETCH_POSTS } from '../../utils/types'
import { getPosts, getComments } from '../../utils/api'




export function  fetchPosts(){
    return dispatch => {
        new Promise(resolve=>{
            getPosts()
            .then(posts=>{
                resolve(posts.map(post=> {
                    return getComments(post.id).then(comments => {return {...post,comments:comments}})
                }))
                
            })
        })
        .then(allPromise =>{
             Promise.all(allPromise).then(result=>{
                dispatch( {
                    type: FETCH_POSTS,
                    payload: result
                })
            })
        })
    }
    
}