import React from 'react'
import loadable from '@loadable/component'
import {  AppstoreOutlined ,BarsOutlined ,AppleOutlined ,GithubOutlined } from '@ant-design/icons'

const Home=loadable(()=>import('../components/layout/home/home'))
const Analy=loadable(()=>import('../components/layout/home/analy'))
const GoodAdd=loadable(()=>import('../components/layout/home/goodadd'))

const routes=[
    {
        id:1,
        text:'系统概况',
        icon:<AppstoreOutlined/>,//使用jsx语法必须引入react
        children:[
            {id:1-1,text:'首页概况',path:'/home',component:Home,icon:<AppleOutlined />},
            {id:1-2,text:'数据分析',path:'/analysis',component:Analy,icon:<GithubOutlined />},
        ]
    },
    {
        id:2,
        text:'商品管理',
        icon:<BarsOutlined />,
        children:[
            {id:2-1,text:'商品新增',path:'/goodadd',component:GoodAdd,icon:<GithubOutlined />},
        ]
    }
]

export default routes