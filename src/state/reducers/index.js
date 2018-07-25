// --- importante cuando hay m[as de un reducer]
import { combineReducers } from 'redux'
import app from './app'
import records from './records'

const rootReducer = combineReducers({
    app,
    records
})

export default rootReducer