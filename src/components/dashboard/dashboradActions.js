import { FETCH_POSTS, VOTE_UP_POST, VOTE_DOWN_POST, VOTE_UP_COMMENT, VOTE_DOWN_COMMENT } from '../../utils/types'
import { getPosts, getComments, votePost, voteComment } from '../../utils/api'

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
    votePost(post.id,'upVote')
    return {
        type: VOTE_UP_POST,
        payload:post.id
    }
}

export function votePostDown(post){    
    votePost(post.id,'downVote')
    return{
        type: VOTE_DOWN_POST,
        payload:post.id
    }
}

export function voteCommentUp(comment){
    voteComment(comment.id,'upVote')
    return {
        type: VOTE_UP_COMMENT,
        payload:comment
    }
}

export function voteCommentDown(comment){
    voteComment(comment.id,'downVote')
    return {
        type: VOTE_DOWN_COMMENT,
        payload:comment
    }
}