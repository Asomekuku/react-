import axios from 'axios'
import { message } from 'antd';//消息提示
let baseURL_dev='http://localhost:9999/api' //本地地址
const instance = axios.create({
    baseURL: baseURL_dev,
    timeout: 7000,
    // headers: {'X-Custom-Header': 'foobar'}
  });

  // 添加请求拦截器
  instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    if(response.data.err){
      message.success('失败了')
    }else{
      return response.data.data;
    }
    
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
  export default instance