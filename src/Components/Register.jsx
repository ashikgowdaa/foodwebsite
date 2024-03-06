import axios from 'axios';
import React, { useState } from 'react'
import { Button, notification, Space } from 'antd';
const Register = () => {

    const [registerData ,setRegisterData]=useState()
    const [api, contextHolder] = notification.useNotification();

const handleChange = (event )=>{
const {name ,value} =event;
setRegisterData({...registerData,[name]:value});
}

const handleRegister= ()=>{
    console.log(registerData)
    axios.post('http://localhost:8000/api/register/',registerData)
    .then((res)=>{
        if(res.status === 201){    
            api['success']({
                message: (
                    <div className="text-2xl text-bold"> Successfull</div>
                    ),
                description:(
                    <div className="text-bold text-green-600">*User Registered Successfully</div>
                )
                  ,
              });
        }
    })
    .catch((err)=>{
        api['error']({
            message: (
                <div className="text-2xl text-bold"> Error</div>
                ),
            description:(
                <div className="text-bold text-red-600">*User not Registered</div>
            )
              ,
          });
            })
}

  return (
    <div className='bg-[#d9d8dd] h-[92vh] w-full overflow-y-hidden flex items-center justify-center'>
        {contextHolder}
    <div className="bg-[url('https://themes.pixelstrap.com/zomo-app/assets/images/background/login-img.jpg')] bg-cover w-1/2 h-3/4 flex items-center justify-center">
        <div className="  h-3/4 bg-white flex flex-col border border-sky-500 gap-4 justify-center p-5  text-center rounded-2xl">
            <h1 className='text-4xl font-lobster'>Login</h1>
<div className="flex gap-3">
            <input className='border border-sky-500 rounded-lg h-[3rem] p-2' type="text" name='first_name'   placeholder='First Name'onChange={(e)=>handleChange(e.target)} />
            <input  className='border border-sky-500 rounded-lg h-[3rem] p-2' type="text" name='last_name'  placeholder='Last Name'onChange={(e)=>handleChange(e.target)} />
</div>
<input className='border border-sky-500 rounded-lg h-[3rem] p-2' type="email" name='email'   placeholder='Email'onChange={(e)=>handleChange(e.target)} />
<input className='border border-sky-500 rounded-lg h-[3rem] p-2' type="text" name='username'   placeholder='Username'onChange={(e)=>handleChange(e.target)} />
<input className='border border-sky-500 rounded-lg h-[3rem] p-2' type="text" name='password1'   placeholder='Password'onChange={(e)=>handleChange(e.target)} />
<input className='border border-sky-500 rounded-lg h-[3rem] p-2' type="text" name='password2'   placeholder='Confirm Password'onChange={(e)=>handleChange(e.target)} />

            
            <button className='bg-red-600 w-[200px] p-3 rounded-lg font-bold text-white cursor-pointer' onClick={()=>handleRegister()} >Register</button>
        </div>
    </div>
</div>
  )
}

export default Register