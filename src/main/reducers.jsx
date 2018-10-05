import { combineReducers } from 'redux'
import dashboard from '../components/dashboard/dashboardReducer'

const rootReducer = combineReducers({
    dashboard
})

export default rootReducer