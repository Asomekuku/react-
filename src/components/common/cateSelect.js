
import React from 'react'
import { 
    Select, 
 
} from 'antd'
const { Option } = Select
 export default function CateSelect (){
    
    return(
        <div>         
            <Select defaultValue="lucy" style={{ width: 200 }} >                  
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>                   
                <Option value="Yiminghe">yiminghe</Option>        
            </Select>
        </div>
    )
 }

