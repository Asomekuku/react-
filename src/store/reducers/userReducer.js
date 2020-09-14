import {GOOD_CASE} from '../actionType'

const initState={
    list:[],
    token:localStorage.getItem('token')
}

export default function userReducer(state=initState,action){
    let newState=JSON.parse(JSON.stringify(state))
    switch(action.type){
        case GOOD_CASE:
            newState.list=action.payload
            return newState
        default :
            return state
    }
}