import {createStore,combineReducers,applyMiddleware} from 'redux'
// 中间键，用来支持异步action
import thunk from 'redux-thunk'
import todoRedu from './reducers/todoRedu'
import goodRedu from './reducers/goodRedu'
import userReducer from './reducers/userReducer'
const reducer =combineReducers({
    todo:todoRedu,
    good:goodRedu,
    user:userReducer
})
const store = createStore(reducer,applyMiddleware(thunk))

export default store