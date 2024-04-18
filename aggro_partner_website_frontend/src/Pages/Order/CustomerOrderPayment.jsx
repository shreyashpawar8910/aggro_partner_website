import React from 'react'
import { ProductDetailData } from './ProductDetailData'
import { Button, Grid, Radio } from '@mui/material'

const CustomerOrderPayment = () => {
    return (
        <div>
            <div className='h-full w-[90rem] bg-gray-100 mt-[5rem] ml-[8rem]'>


                <Grid container>
                    <Grid item>
                        <div className="flex flex-col items-center">
                            <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[45rem]">
                                <img
                                    src={ProductDetailData.images[0].img}
                                    alt={ProductDetailData.images[0].alt}
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>
                            <div className="flex flex-wrap space-x-5 justify-center">

                                {ProductDetailData.images.map((item) => <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem] mt-4">
                                    <img
                                        src={item.img}
                                        alt={item.alt}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>)}

                            </div>

                        </div>
                    </Grid>

                    <Grid item>
                        <div className='ml-10 mt-10'>
                            <p className='text-4xl font-semibold'>Tomato</p>
                            <p className='size-45 m-1 font-semibold opacity-40'>Red Tomato</p>
                            <p className='font-semibold text-2xl m-2'>Quantity      : <u className='text-green-500'>10Kg</u></p>
                            <p className='font-semibold text-2xl m-2'>Total Amount  : <u className='text-green-500'>₹500 </u></p>
                            <br></br>
                            <p className=' text-2xl m-1 font-semibold '>Customer: Krunal Jadhav</p>
                            <p className='m-1'>Delivery Address : Islampur-Sangli Road, Karandwadi <>-415368</> </p>

                        </div>


                    </Grid>

                </Grid>

                <section className='relative flex flex-col items-center justify-center mt-10'>
                    <form>
                        <p className='flex items-center '><input type='radio' className='mr-2 size-4' name='payment'/> Cash on Delivery</p>
                        <p className='flex items-center mt-1'><input type='radio' className='mr-2 size-4' name='payment'/> Pay Amount</p>
                        <Button sx={{ py: 1.5, mt: 2, bgcolor: "rgb(145 85 253)" }} size='large' variant='contained'>Place Order</Button>
                    </form>

                </section>


            </div>
        </div>
    )
}

export default CustomerOrderPayment
