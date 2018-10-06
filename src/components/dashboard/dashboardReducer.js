const INITIAL_STATE = { posts:[] }

import { FETCH_POSTS, VOTE_UP_POST, VOTE_DOWN_POST, VOTE_UP_COMMENT,VOTE_DOWN_COMMENT } from '../../utils/types'

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case FETCH_POSTS:
            return { ...state,posts:action.payload }
        case VOTE_UP_POST : {
            let newPosts = state.posts.map(post=>{
                if(post.id === action.payload)
                {
                    post.voteScore++
                    return post
                }
                return post
            })
            return {...state,posts:newPosts}
        }
        case VOTE_DOWN_POST : {
                        let newPosts = state.posts.map(post=>{
                            if(post.id === action.payload)
                            {
                                post.voteScore--
                                return post
                            }
                            return post
                        })
                return {...state,posts:newPosts}
            }
        case VOTE_UP_COMMENT: {
            const {id, parentId } = action.payload
            let newPosts = state.posts.map(post =>{
                if(post.id === parentId)
                {
                    let newComments = post.comments.map(comment=>{
                        if(comment.id === id)
                        {
                            comment.voteScore++
                            return comment
                        }
                        return comment
                    })
                    
                    return {...post,comments:newComments}
                }
                return post
            })
            return {...state,posts:newPosts}
        }
        case VOTE_DOWN_COMMENT: {
            const {id, parentId } = action.payload
            let newPosts = state.posts.map(post =>{
                if(post.id === parentId)
                {
                    let newComments = post.comments.map(comment=>{
                        if(comment.id === id)
                        {
                            comment.voteScore--
                            return comment
                        }
                        return comment
                    })
                    
                    return {...post,comments:newComments}
                }
                return post
            })
            return {...state,posts:newPosts}
        }
        default:
            return state
    }
}