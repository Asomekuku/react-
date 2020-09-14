import React from 'react';
import 'antd/dist/antd.css';//antd样式
import './assets/css/app.scss';//全局样式
import {HashRouter} from 'react-router-dom'
import {Layout} from '@/components'
import {Provider} from 'react-redux'
import store from '@/store'

import Login from '@/components/common/login'
class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      token:localStorage.getItem('token')
    }
    
  }
  login(){
    this.setState({
      token:localStorage.getItem('token')
    })
  }
  render(){
    let {token} =this.state
    return (
      <div className="App">
        <Provider store={store}>
          <HashRouter>     
            {token ? <Layout/> : <Login onLogin={this.login.bind(this)}/>}
          </HashRouter>
        </Provider>
      </div>
    );
  }
}


export default App
