import React from 'react'
import { 

    Upload, 
  
} from 'antd'
import {uploadImg} from '@/utils/img'
export default function ImgFile(props){
    const imgChange=(e)=>{
        console.log('改变',e)
    }
    return(
        <div>
            <Upload
                name="file"
                action="http://localhost:3000/api/upload/img"
                listType="picture-card"
                className="avatar-uploader"
                onChange={imgChange}
            >
                <img src={props.value || uploadImg } alt='avatar' style={{width:'100%'}}/>
            </Upload>
        </div>
    )
}