import React from 'react'

import {connect} from 'react-redux'
import {up,clear,add,remo} from '../../../store/action/dispatchActios'//引入action生成器

 class Home extends React.Component{
     constructor(props){
         super(props)
         this.state={
            value:''
         }
         
     }
     //清除
     clearAll(){
        console.log(this.props.list)
        this.props.todoclear()
    }
    creactList(){
        let {list} =this.props
        return list.map((ele,idx)=>(
            <div key={ele.id}>
                <span>{ele.text}</span>
                <button onClick={this.del.bind(this,idx)}>删除</button>
                {/* <input/> */}
            </div>
        ))
    }
    // 实现input双向绑定
    enter(e){
        //获取input输入值
        this.setState({
            value:e.target.value
        }) 
    }
    // 按下enter
    upenter(e){
        if(e.keyCode===13){
            
            //dispatch把input value值传过去
            this.props.todoadd({id:Date.now(),text:this.state.value})
            this.setState({
                value:''
            })            
        }
    }
    // 删除
    del(idx){
        console.log(idx)
        this.props.todoDel(idx)
    }
    render(){
        let {value}=this.state
        console.log(this.props)
        return(
            <div className='KK-home'>
                <h1>home页面</h1>
                <input type='text'  
                    value={value} 
                    onChange={this.enter.bind(this)} 
                    onKeyUp={this.upenter.bind(this)} />
                <div>{this.creactList()}</div>
                <button onClick={this.clearAll.bind(this)}>清除</button>
             
            </div>
        )
    }
}
//把store需要共享的数据变成this.props的方式访问
function mapStateToProps(store){
    return{
        list:store.todo.list,
       
    }
}
//把外部的action生成器方法，映射到this.props上
function mapActionToProps(dispatch){
    return{
        //派送一个方法传输数据
        changeTodo:(payload)=>dispatch(up(payload)),
        todoadd:(payload)=>dispatch(add(payload)),
        todoDel:(payload)=>dispatch(remo(payload)),
        todoclear:()=>dispatch(clear())
            
        
    }
}
export default connect(mapStateToProps,mapActionToProps)(Home)