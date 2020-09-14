import {
    CHANGE_UP,
    TODO_ADD,
    TODO_UPDATA,
    TODO_CLEAR
} from '@/store/actionType'

//查
export function up(payload){
    return {
        type:CHANGE_UP,
        payload
    }
}
//增
export function add(payload){
    return {
        type:TODO_ADD,
        payload
    }
}
//改
export function clear(){
    return {
        type:TODO_UPDATA,
       
    }
}
// 删
export function remo(payload){
    return {
        type:TODO_CLEAR,
        payload
    }
}