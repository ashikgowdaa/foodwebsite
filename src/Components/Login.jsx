import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, notification, Space } from 'antd';
import { TextField } from "@mui/material";

import axios from 'axios';
const Login = () => {
const navigate =useNavigate();

const [api, contextHolder] = notification.useNotification();
const [errors ,setErros] =useState(
    {
        username:'',
        password:''
    }
);

const [inputData ,setinputdata] =useState(
    {
        username:'',
        password:''
    }
);
const handleChange =(event)=>{
const {name , value} = event;

if(name === 'username' ){
    setErros((prev)=>({...prev,[name]:''}))
}
else if (name === 'password'){

    setErros((prev)=>({...prev,[name]:''}))
}


setinputdata({...inputData,[name]:value})

}

const  handleLogin =  () =>{

    if (inputData.password === '') {
        setErros((prevErrprs)=>({...prevErrprs,password:"*Password is Required"}))
    }
    if(inputData.username === ''){
        setErros((prevErrprs)=>({...prevErrprs,username:"*Username is Required"}))
    }

if(errors.username === '' && errors.password === '' && inputData.username !== '' && inputData.password !== "" ){
    axios.post('http://localhost:8000/api/login/',inputData)
    .then((res)=>{
  if(res.status === 200){
   
    if(res.status === 200){    
         api['success']({
            message: (
                <div className="font-bold">Login Successful</div>
            ),
          
            duration: 2,
          });
    }
     setTimeout(()=>{
        navigate('/')
     },[1000])
  }
    })
    .catch((Err)=>{
        api['error']({
            message: (
                <div className="font-bold">Login Error</div>
            ),
            description:(
                <div className="font-bold" >Please Check Your Credentials</div>
            ),
            duration: 2,
          });
    })
}

}
  return (
    <div className='bg-[#d9d8dd] h-[92vh] w-full overflow-y-hidden flex items-center justify-center'>
                {contextHolder}

        <div className="bg-[url('https://themes.pixelstrap.com/zomo-app/assets/images/background/login-img.jpg')] bg-cover w-1/2 h-3/4 flex items-center justify-center">
            <div className=" w-[400px] h-3/4 bg-white flex flex-col border border-sky-500 gap-4 justify-center p-5  text-center rounded-2xl">
                <h1 className='text-4xl font-lobster'>Login</h1>
                <TextField
                style={{borderRadius:'10px !important' }}
                    className="w-full"
                    id="outlined-basic"
                    name='username'
                    label={'Enter Your Username'}
                    onChange={(e)=>handleChange(e.target)}
                    variant="outlined"
                    helperText={
                        (
                            <div className='text-red-600 font-bold'>
                               { errors.username}
                            </div>
                        )
                    }
                  />   
                     <TextField
                    className="w-full"
                    id="outlined-basic"
                    type='Password'
                    name='password'
                    label={'Enter Your Password'}
                    onChange={(e)=>handleChange(e.target)}
                    variant="outlined"
                    helperText={
                        (
                            <div className='text-red-600 font-bold'>
                               { errors.password}
                            </div>
                        )
                    }
                  />
          
        
            <button className='bg-red-600 w-[200px] p-3 rounded-lg font-bold text-white cursor-pointer'  onClick={()=>handleLogin()} >Login</button> :
            {/* <button className='bg-slate-600 w-[200px] p-3 rounded-lg font-bold text-white cursor-pointer'  disabled={true} onClick={()=>handleLogin()} >Login</button> */}
          
           
            </div>
        </div>
    </div>
  )
}

export default Login