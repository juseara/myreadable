const INITIAL_STATE = { posts:[] }

import { FETCH_POSTS,VOTE_UP_POST } from '../../utils/types'

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case FETCH_POSTS:
            return { ...state,posts:action.payload }
        case VOTE_UP_POST:
            debugger
            const newPosts = state.posts.map(post=>{
                debugger
                if(post.id === action.payload)
                {
                    debugger
                    post.voteScore++
                    return post
                }
                return post
            })
            return {...state,posts:newPosts}
        default:
            return state
    }
}