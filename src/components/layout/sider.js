import React from 'react'
import { Menu } from 'antd'
import routes from '@/routes'
import {Link} from 'react-router-dom'
import img from '../../utils/img' //logo图

const { SubMenu } = Menu
export default class Sider extends React.Component{


    //创建路由,一级菜单
    createRoutes(){
        return routes.map(ele=>(
            <SubMenu key={ele.id} icon={ele.icon} title={ele.text}>
                {this.createRouteChild(ele.children)}
            </SubMenu>
        ))
    }
    //二级菜单
    createRouteChild(children){
        if(children){
             return children.map(ele=>(
            <Menu.Item key={ele.id} icon={ele.icon}>
                <Link to={ele.path} replace>
                    {ele.text}
                </Link>
            </Menu.Item>
            ))
        }
    }
    render(){
        return(
            <div className='KK-sider'>
                <div className='imgs'>
                    <img src={img.logo} alt=''/>
                </div>
                <Menu
                    theme='dark'
                    style={{ width: 199 }}
                    defaultOpenKeys={['sub1']}     
                    mode="inline"
                    >
                   {this.createRoutes()}
                    
                </Menu>
                
            </div>
        )
    }
}