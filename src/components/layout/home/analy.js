import React from 'react'
import {connect} from 'react-redux' //高阶函数接收两个参数，第一个将state的参数映射到this.props上，
// 第二个将用户的方法传递给action
import {userList} from '@/store/action/userActios'
 class Analy extends React.Component{
   
    componentDidMount(){
        this.props.componentList({})
    }
    //渲染
    createList(){
        return this.props.list.map(ele=>(
            <div key={ele._id}>
                {ele.cate_zh}
            </div>
        ))
    }
    render(){ 
        console.log(this.props)
        return(
            <div className='KK-analy'>
                分析页面
              {this.createList()}
            </div>
        )
    }
}
//
function mapState(store){
    return{
        list:store.user.list
    }
}
function mapAction(dispatch){
    return{
        componentList:(payload)=>dispatch(userList(payload))
    }
}


export default connect(mapState,mapAction)(Analy)