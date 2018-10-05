import { FETCH_POSTS,VOTE_UP_POST } from '../../utils/types'
import { getPosts, getComments,votePost } from '../../utils/api'




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

export function votePostUp(post){
    debugger
    votePost(post.id,'upVote')
    return {
        type: VOTE_UP_POST,
        payload:post.id
    }
}