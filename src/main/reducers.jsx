import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import post from '../components/post/postReducer'
import category from '../components/category/categoryReducer'

const rootReducer = combineReducers({
    post,
    category,
    form:formReducer
})

export default rootReducer