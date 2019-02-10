import {combineReducers} from 'redux'

import convertReducer from './convert-reducer'

const rootReducer = combineReducers({
    conversor: convertReducer
})

export default rootReducer