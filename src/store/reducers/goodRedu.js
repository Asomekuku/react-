

const initState={
    msg:2222
}

export default function goodRedu(state=initState,action){

    switch(action.type){
        case 'change':
            let newState=JSON.parse(JSON.stringify(state))
            newState.msg=2000
            return newState

        default :
        return state
    }
}