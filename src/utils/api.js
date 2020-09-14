import axios from './axios'

//获取所有品类
export function fetchGetCate(params){
    return axios({
        url:'/cates/all',
        method:'GET',
        params
    })
}
export function fetchLogin(data){
    return axios({
        url:'/users/cms/login',
        method:'POST',
        data
    })
}
