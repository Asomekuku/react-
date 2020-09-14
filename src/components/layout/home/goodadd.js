import React from 'react'
import {connect} from 'react-redux' //高阶函数接收两个参数，第一个将state的参数映射到this.props上，
// 第二个将用户的方法传递给action
import { 
     Form,
     Input, 
     Button,
     InputNumber,
     Select,
     Switch,
  
   
 } from 'antd'
import ImgFile from '@/components/common/imgFile'
import CateSelect from '@/components/common/cateSelect'


 const { Option } = Select
const { TextArea } = Input

const layout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 10,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 4,
      span: 16,
    },
  };


 class GoodAdd extends React.Component{
    constructor(props){
        super(props)
        this.state={
            imageUrl:''
        }
    }
    onFinish(values){
        console.log('提交',values)
    }
    switchChange(){

    }
    imgChange(){

    }
    render(){    
        let {imageUrl}=this.state
        return(
            <div className='KK-analy'>
                <h1>商品新增</h1>
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={this.onFinish.bind(this)}
               
                    >
                     <Form.Item
                        label="商品新增"
                        name="cate"
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
                        label="商品描述"
                        name="password"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                        ]}
                    >
                        <TextArea rows={4} />
                    </Form.Item>

                    <Form.Item
                        label="商品价格"
                        name="price"
                        rules={[
                            {
                                required: true,
                                message: '请输入商品价格',
                            },
                        ]}
                    >
                        <InputNumber  />
                    </Form.Item>
                    
                    <Form.Item
                        label="商品品类"
                        name="cate"
                    >
                        <CateSelect/>
                    </Form.Item>
               
                    <Form.Item
                        label="商品图片"
                        name="img"
                    >                    
                        <ImgFile/>        
                    </Form.Item>
                    



                    <Form.Item
                        label="热销"
                        name="cate"
                    >
                        <Switch defaultChecked onChange={this.switchChange.bind(this)} />
                    </Form.Item>
                    

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                        提交
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
//
function mapState(store){
    return{
        
    }
}
function mapAction(dispatch){
    return{
        
    }
}


export default connect(mapState,mapAction)(GoodAdd)