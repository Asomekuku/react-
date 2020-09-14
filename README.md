## npm run eject 把隐藏文件暴露出来,要先把文件添加到本地仓库才能成功 

### 别名配置 '@':path.resolve(__dirname,'../src') package.json300行

## 配置跨域代理，在src根目录创建setupProxy.js进行配置文件
cnpm install http-proxy-middleware -D
const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app){
    app.use(
        '/jd',	//地址后的第一个路径
    	createProxyMiddleware({ 
                target: 'http://localhost:9999', //远程地址
                changeOrigin: true 
        	})
    	)
   
}

## 删除app里的严格模式

# redux

 1.cmpn i redux -S
 2.cnpm i react-redux -S

 3.创建总store
 import {createStore,combineReducers} from 'redux' //引入创建Store的方法/拆分子state的方法
 //引入创建的子state放进拆分方法中,把子state作为combineReducers方法的value值
 const reducer=combineReducers({
    good:goodReducer
})
//把所有子的模块合并进行创建
const store =createStore(reducer)

4.在全局app组件中映入 import {Provider} from 'react-redux'
引入创建好的总store import store from ''
基于上下文的理念把store映射到全局

<Provider store={store}>
</Provider>

## 在组件中使用store
import {connect} from 'react-redux'
connect是一个高阶函数组件

用connect有两个接收参数，分别是数据和方法
class Home extends React.Component{
    ...
    render(){
        return(
            <>
                {msg}
            </>
        )
    }
}
 //把store需要共享的数据变成this.props的方式访问
    function mapState(store){
        return{
            msg:store.good.msg  //现在可以通过this.props来访问store子仓库good里面的msg
        }
    }

    //把外部的action生成器方法，映射到this.props上
    function mapAction(dispatch){
        return{
            //在this.props上映射了一个add的方法,调用该方法子state可以在action上接收到数据,
            add:()=>{
                dispatch({
                    adc:123
                })
            }
        }
    }

export default connect(mapState,mapAction)(Home)



const initState={
    msg:2222
}
export default function goodRedu(state=initState,action){
    //收到了传过来的数据 进行操作
    switch(action.type){
        case 'change':
            //先进行深复制
            let newState=JSON.parse(JSON.stringify(state))
            newState.msg=2000   //修改数据
            //把新数据return出去页面自动更新
            return newState

        default :
        return state
    }
}

action生成器

