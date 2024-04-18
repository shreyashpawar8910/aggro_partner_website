import { Button, TextField, setRef } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { userLogin } from '../../Services/userService';
import { toast } from 'react-toastify';
import { doLogin, getCurrentUserDetail } from '../../Services/Authantication';

const LoginPage = () => {

    const [loginDetail, setLoginDetail] = useState();
    

    const navigate = useNavigate();

    const handleCreateNew = ()=>{
        navigate("user_register");
    }

    const handleUserLogin = (e) =>{
        e.preventDefault();
        
       
        const data = new FormData(e.currentTarget);
        


        const login={
            username: data.get("userName"),
            password: data.get("password")
        }

        userLogin(login).then((response)=>{
            console.log(response);
            
            // Save the Data to Local Storage..
            doLogin(response, ()=>{
                
            })
            
            const userData = JSON.parse(localStorage.getItem("data"));
            var setRole = userData.role;
            
            if(setRole==="farmer"){
                navigate("/farmer")
              }else if(setRole==="customer"){
                navigate("/customer")
              }else if(setRole==="instructor"){
                navigate("/instructor")
              }else if(setRole==="admin"){
                navigate("/admin");
              }

            console.log("Role is ",setRole)

            toast.success("User Login Successfully..")


        }).catch((error) => {
            console.log(error);
            console.log("Error Log");
            toast.error("User Login Faild...")
        });
    }

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full m-3'>

            <div className='hidden sm:block'>

                <img className='w-full h-full object-cover object-right' src='https://okcredit-blog-images-prod.storage.googleapis.com/2020/10/shutterstock_1484680373.jpg' />

            </div>

            <div className='bg-gray-100 flex flex-col justify-center'>

                <form className='max-w-[400px] w-full mx-auto bg-white p-4' onSubmit={handleUserLogin}>
                    <h2 className='text-4xl font-bold text-center py-6'>Aggro Partner</h2>
                    <div className='flex flex-col py-2'>
                        {/* <label>Username</label>
                    <input className='border p-2' type='text' required  /> */}

                        <TextField
                            required
                            id="userName"
                            name="userName"
                            label="User Name"
                            
                            fullWidth
                           
                        />

                    </div>

                    <div className='flex flex-col py-2'>
                        <TextField
                            required
                            id="password"
                            name="password"
                            label="Password"
                            type='password'
                            fullWidth
                        />
                    </div>

                    <Button className='w-full h-[3rem] ' sx={{bgcolor:"#9BCF53", color:"white"}} size='large' variant='contained' type='submit'>Sign In</Button>
                    <div className='flex justify-between mt-3'>
                        <p className='flex items-center '><input className='mr-2' type="checkbox" /> Remember Me</p>
                        <p className='text-bold text-blue-700'><a href='' className='cursor-pointer' onClick={handleCreateNew}>Create an account</a></p>
                    </div>

                </form>
            </div>

        </div>
    )
}

export default LoginPage
