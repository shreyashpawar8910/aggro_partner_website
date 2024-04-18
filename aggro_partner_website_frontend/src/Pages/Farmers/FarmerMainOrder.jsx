import { Card, Grid } from '@mui/material'
import React from 'react'
import newOrder from './Assets/box.png'
import deleverdOrder from './Assets/deliverd_Order.png'
import { useNavigate } from 'react-router-dom'

const FarmerMainOrder = () => {

    const navigate = useNavigate();

    const handleNewOrder=()=>{
        navigate('/farmer/orders/newOrders')
    }

    const handleDeliverdOrder=()=>{
        navigate('/farmer/orders/dileverdOrder')

    }

    return (
        <div>
            <div className=' w-screen flex justify-center items-center ml-[25rem]  mt-10'>

               <Grid container>               
                   <Grid item >
                        <div className='  text-center productCard  cursor-pointer bg-gray-200 m-10 w-[20rem] h-[30rem]' onClick={handleNewOrder} >
                            <section className='relative items-center justify-center'>
                                <img className='p-5' src={newOrder} alt='' />
                            </section>
                            <div className='textPart p-3 mt-[3rem]'>
                                <div style={{ color: "#9CCB00" }}>
                                    <p className='text-3xl  font-bold'>New Orders</p>
                                </div>
                                <div>
                                    <p className='mt-3'>List of new orders which you have to preaper</p>
                                </div>

                            </div>
                        </div>
                    </Grid>
                    

                    <Grid item>
                        <div className='  text-center items-center justify-center productCard  cursor-pointer bg-gray-200 mt-10 ml-[10rem] w-[20rem] h-[30rem]' onClick={handleDeliverdOrder}>
                            <section className='relative items-center justify-center  '>
                                <img className='p-5' src={deleverdOrder} alt='' />
                            </section>
                            <div className='textPart p-3 mt-[2rem]'>
                                <div style={{ color: "#9CCB00" }}>
                                    <p className='text-3xl  font-bold'>Deleverd Orders</p>
                                </div>
                                <div>
                                    <p className='mt-3'>List of orders which you deliverd</p>
                                </div>

                            </div>
                        </div>
                    </Grid>            
                  
                </Grid>




            </div>
        </div>
    )
}

export default FarmerMainOrder
