import { Button, Grid, TextField } from '@mui/material'
import React from 'react'
import { ProductDetailData } from './ProductDetailData'
import { useNavigate } from 'react-router-dom'

const CustomerOrderAddress = () => {

    const navigate = useNavigate();

    const handleSubmitAddress = ()=>{
        navigate('/productDetail/orderAddress/payment')
    }

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
                            <p className=' text-2xl m-1 font-semibold '>Farmer: Shreyash Pawar</p>
                            <p className='m-1'>Near Tadasar Highschool, Kadegaon-Tadasar Road , Tadasar </p>

                        </div>


                    </Grid>

                </Grid>

                <Grid>
                    <div className='bg-white h-5 '></div>
                    <div className='bg-gray-100 mb-10'>
                        <form className='ml-[5rem] mr-5 w-[80rem]' onSubmit={handleSubmitAddress}>
                            <h2 className='text-2xl font-bold text-center py-6'>Delivery Address</h2>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>

                                    <TextField required
                                        id="name"
                                        name="name"
                                        label="Name"
                                        fullWidth

                                    />

                                </Grid>


                                <Grid item xs={12} sm={6}>

                                    <TextField required
                                        id="city"
                                        name="city"
                                        label="City"
                                        fullWidth

                                    />

                                </Grid>

                                <Grid item xs={12} sm={6}>

                                    <TextField required
                                        id="taluka"
                                        name="taluka"
                                        label="Taluka"
                                        fullWidth

                                    />

                                </Grid>

                                <Grid item xs={12} sm={6}>

                                    <TextField required
                                        id="dist"
                                        name="dist"
                                        label="District"
                                        fullWidth

                                    />

                                </Grid>

                                <Grid item xs={12} >

                                    <TextField required
                                        id="address"
                                        name="address"
                                        label="Address"
                                        fullWidth
                                        multiline
                                        rows={4}

                                    />

                                </Grid>

                                <Grid item xs={12} sm={6}>

                                    <TextField required
                                        id="zip"
                                        name="zip"
                                        label="Zip / Postal Code"
                                        fullWidth
                                        autoComplete='shipping postal-code'
                                    />

                                </Grid>

                                <Grid item xs={12} sm={6}>

                                    <TextField required
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        label="Phone Number" fullWidth

                                    />

                                </Grid>

                                <Grid item xs={12} sm={6}>

                                    <TextField 
                                        id="email"
                                        name="email"
                                        label="Email Id (Optional)"
                                        type='email'
                                        fullWidth

                                    />

                                </Grid>

                               

                              

                                <Grid item xs={12} >

                                    <Button sx={{ py: 1.5, mt: 2, bgcolor: "rgb(145 85 253)" }} size='large' variant='contained'
                                        type='submit'>Payment</Button>

                                </Grid>



                            </Grid>
                        </form>
                    </div>
                </Grid>
            </div>
        </div>
    )
}

export default CustomerOrderAddress
