
import {
    CHANGE_UP,
    TODO_ADD,
    TODO_UPDATA,
    TODO_CLEAR
} from '@/store/actionType'

const initState={
    msg:100,
    list:[
        {id:1,text:'吃饭'},
        {id:2,text:'睡觉'},
        {id:3,text:'打豆豆'},
    ]
}

export default function todoRedu(state=initState,action){
   
    let newState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        // 查
        case CHANGE_UP:
            return newState
        // 增
        case TODO_ADD:
            // 深复制
           
           newState.list.push(action.payload)
           console.log('add收到了')
            return newState
        //改
        case TODO_UPDATA:
            console.log('shoudao全部dle',action)
            newState.list=[]
            return newState
        // 删
        case TODO_CLEAR :
            newState.list.splice(action.payload,1)
         return newState
        default:
            return newState
    }
    
}