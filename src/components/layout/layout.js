import React from 'react'
import { Layout } from 'antd'//布局
import './style.scss'
import loadable from '@loadable/component' //代码分割


const Heade=loadable(()=>import('./header'))
const Side =loadable(()=>import('./sider'))
const Conten =loadable(()=>import('./content'))
const { Header,  Sider, Content } = Layout

 class LayoutBuJu extends React.Component{
   
    render(){
        return(
            <div className='KK-layout'>
                <Layout>
                    {/* 左侧导航栏 */}
                    <Sider>
                       <Side/>
                    </Sider>
                    <Layout>
                        {/* 头部 */}
                        <Header>
                            <Heade/>
                        </Header>
                        {/* 内容 */}
                        <Content>
                            <Conten/>
                        </Content>       
                    </Layout>
                </Layout>
                {/* 登录 */}
                
                
            </div>
        )
    }
}
export default LayoutBuJu