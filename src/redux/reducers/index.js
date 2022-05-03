import {combineReducers} from 'redux'
import counter from './counter'
import news from './news'
import errors from './errors'

const reducer = combineReducers({
    counter,
    news,
    errors,
})

export default reducer