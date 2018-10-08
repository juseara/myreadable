const INITIAL_STATE = { categories: [] }

import { FETCH_CATEGORIES } from '../../utils/types'

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case FETCH_CATEGORIES : {
            return {...state, categories: action.payload}
        }
    }
    return state
}