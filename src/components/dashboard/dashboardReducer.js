const INITIAL_STATE = { posts:[] }

import { FETCH_POSTS } from '../../utils/types'

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case FETCH_POSTS:
            return { ...state,posts:action.payload }
        default:
            return state
    }
}