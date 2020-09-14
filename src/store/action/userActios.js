import {GOOD_CASE} from '../actionType'
import {fetchGetCate} from '@/utils/api'
export function userList(params){
    //dispatch一个函数,使用时对这个函数进行dispaatch
    return function(dispatch){
        fetchGetCate(params).then(res=>{
            //掉接口成功dispatch数据
            dispatch({
                type:GOOD_CASE,
                payload:res.list
            })
        }).catch(err=>{
            //失败再次dispatch
            dispatch({
                type:GOOD_CASE,
                payload:[]
            })
        })
    }
}