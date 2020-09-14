import React from 'react'
import {withRouter} from 'react-router-dom'
import { Form, Input, Button, Checkbox } from 'antd'
import {fetchLogin} from '@/utils/api'

const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  }
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  }
 class Login extends React.Component{
   
    componentDidMount(){
        this.props.history.replace('/login')
    }
    onvalue(values){
        console.log(values)
        fetchLogin(values).then(res=>{  
            this.props.history.replace('/')
                //登录成功,存localStorage
               localStorage.setItem('token',res.token)
               this.props.onLogin()
        })
    }
    render(){ 
        console.log(this.props)
        return(
            
            <div className='KK-login'>
               登录页面

               <Form
                {...layout}
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={this.onvalue.bind(this)}
                >
                <Form.Item
                    label="账号"
                    name="username"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="密码"
                    name="password"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                    Submit
                    </Button>
                </Form.Item>
                </Form>
               
            </div>
            
        )
    }
}



export default withRouter(Login)