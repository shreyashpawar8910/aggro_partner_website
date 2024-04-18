import React from 'react'
import FarmerHomePageCaresol from './FarmerHomePageCaresol'
import ReactPlayer from 'react-player'
import { Grid } from '@mui/material'

import productLogo from './Assets/product.png'
import orderLogo from './Assets/cart.png'
import researchLogo from './Assets/research.png'
import instructorLogo from './Assets/session_meeting.png'
import { useNavigate } from 'react-router-dom'

import PersonIcon from '@mui/icons-material/Person';
import { myAxios } from '../../../Services/helper'

const FarmerHomePage = () => {

    const navigate = useNavigate();

    const handleProduct = () => {
        navigate('/farmer/products')
    }

    const handleOrder = () => {
        navigate('/farmer/orders')
    }

    const handleResearch = () => {
        navigate('/farmer/research')
    }

    const handleInstructor = () => {
        navigate('/farmer/instructor')
    }


    const handleFarmerProfile=()=>{
        const userData = JSON.parse(localStorage.getItem("data"));
        var setFarmerId = userData.id;
        
        myAxios.get("/getFarmerProfileById/"+setFarmerId).then((response)=>{
            console.log("Data is",response.data);
            navigate("/farmer/editProfile")
        }).catch((error)=>{
            navigate("/farmer/createProfile")
        })
    }


    return (
        <div>
            <div className='mt-10  ml-[95rem] bg-gray-100 w-[5rem] h-[5rem] productCard' onClick={handleFarmerProfile}>

                <PersonIcon sx={{ fontSize: '5rem', cursor: 'pointer' }} />

            </div>

            <section className='-z-50 banner relative flex flex-col justify-center items-center'>
                <div className='w-[50vw] z-10 text-center'>
                    <p className='text-2xl lg:text-7xl font-bold z-10 py-5 text-green-600'>
                        Welcome Farmer's
                    </p>

                    <p className='z-10  text-xl lg:text-4xl'>
                        Connect yourself to the digital world
                    </p>

                </div>
            </section>


            <section className='relative items-center justify-center w-screen mt-10'>
                <Grid container>
                    <Grid item xs={12} sm={3}>
                        <div className=' relative text-center items-center justify-center productCard  cursor-pointer bg-gray-100 m-10' onClick={handleProduct} >
                            <section className='relative items-center justify-center'>
                                <img className='' src={productLogo} alt='' />
                            </section>
                            <div className='textPart p-3 mt-[8rem]'>
                                <div style={{ color: "#9CCB00" }}>
                                    <p className='text-3xl  font-bold'>Products</p>
                                </div>
                                <div>
                                    <p className='mt-3'>List your products for sell</p>
                                </div>

                            </div>
                        </div>
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <div className=' relative text-center items-center justify-center productCard  cursor-pointer bg-gray-100 m-10' onClick={handleOrder}>
                            <section className='relative items-center justify-center  '>
                                <img className='' src={orderLogo} alt='' />
                            </section>
                            <div className='textPart p-3 mt-[7rem]'>
                                <div style={{ color: "#9CCB00" }}>
                                    <p className='text-3xl  font-bold'>Orders</p>
                                </div>
                                <div>
                                    <p className='mt-3'>List of orders which you have to prepare</p>
                                </div>

                            </div>
                        </div>
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <div className=' relative text-center items-center justify-center productCard  cursor-pointer bg-gray-100 m-10' onClick={handleResearch}>
                            <section className='relative items-center justify-center'>
                                <img className='' src={researchLogo} alt='' />
                            </section>
                            <div className='textPart p-3 mt-[3rem]'>
                                <div style={{ color: "#9CCB00" }}>
                                    <p className='text-3xl  font-bold'>Research Blogs</p>
                                </div>
                                <div>
                                    <p className='mt-3'>View the research blog's published by experts</p>
                                </div>

                            </div>
                        </div>
                    </Grid>



                    <Grid item xs={12} sm={3}>
                        <div className=' relative text-center items-center justify-center productCard  cursor-pointer bg-gray-100 m-10' onClick={handleInstructor}>
                            <section className='relative items-center justify-center'>
                                <img className='' src={instructorLogo} alt='' />
                            </section>
                            <div className='textPart p-3 '>
                                <div style={{ color: "#9CCB00" }}>
                                    <p className='text-3xl  font-bold'>Aggro Instructors</p>
                                </div>
                                <div>
                                    <p className='mt-3'>View all instructors and contact with them</p>
                                </div>

                            </div>
                        </div>
                    </Grid>

                </Grid>

            </section>

            <section className='relative flex flex-col justify-center items-center mt-20'>
                <ReactPlayer controls={true} url={"https://youtu.be/H7B0vNsOFtA"} height={400} width={700} />
            </section>



            {/* This is Caresoal */}

            <div className='w-[103rem] m-5'>
                <FarmerHomePageCaresol />
            </div>

        </div>
    )
}

export default FarmerHomePage
