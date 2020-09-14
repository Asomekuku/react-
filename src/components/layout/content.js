import React from 'react'
import routes from '@/routes'
import {Route,Switch,Redirect} from 'react-router-dom'
export default class Content extends React.Component{

    //配置路由
    createRoute(){
        let res=[]
        function create(arr){
            //如果接收到了子路由
            if(arr){
                //对路由进行循环
                arr.map(ele=>{
                    
                    res.push(<Route key={ele.id} exact path={ele.path} component={ele.component} />)  
                    //如果子路由里面还要路由，那么进行递归继续循环  
                    if(ele.children){
                        create(ele.children)
                        
                    }
                    return false
                })
            }
            
        }
        //调用配置路由
        routes.map(ele=>(
            //根据菜单结构，一级菜单没有路由，把二级菜单路由传入形参
            create(ele.children)
        ))
        return res
    }
    render(){
        return(
            <div className='KK-content'>
               
                <Switch>
                    {this.createRoute()}
                    {/* 登录页面 */}
                    
                    <Redirect from='/*' to='/'/>
                </Switch>
            </div>
        )
    }
}