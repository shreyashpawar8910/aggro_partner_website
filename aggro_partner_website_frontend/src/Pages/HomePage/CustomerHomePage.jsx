import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { HomePageProductData } from './HomePageProductData'
import { useNavigate } from 'react-router-dom';
import { getAllProductsForCustomer } from '../../Services/CustomerService';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CustomerHomePage = () => {

    const [farmerProduct, setFarmerProducts] = useState([]);

    const navigtate = useNavigate();

    const handleProductcard = (id) => {
        navigtate("/productDetail/" + id);
    }

    useEffect(() => {

        getAllProductsForCustomer().then((response) => {
            setFarmerProducts(response.data);
        });

    }, [])

    const handleShoppingCart = () => {
        navigtate("/customer/customerOrderDetails");
    }



    return (
        <div>

            <div className='mt-10  ml-[95rem] flex flex-col items-center bg-gray-100 w-[6rem] h-[5rem] productCard ' onClick={handleShoppingCart}>

                <ShoppingCartIcon sx={{ fontSize: '5rem', cursor: 'pointer', p: 1 }} />

            </div>

            <section className='-z-50 banner relative flex flex-col justify-center items-center'>
                <div className='w-[50vw] z-10 text-center'>
                    <p className='text-2xl lg:text-7xl font-bold z-10 py-5 text-green-600'>
                        Welcome Customer's
                    </p>

                    <p className='z-10  text-xl lg:text-4xl'>
                        Order Fresh Product Direct Farm to your Door...
                    </p>

                </div>
            </section>


            <div>
                <section className='relative flex flex-col justify-center items-center mt-20'>

                    <div className='mt-10'>
                        <h1 className='text-4xl text-green-600 font-extrabold'>Order Products</h1>
                    </div>

                    <div className='bg-gray-200 w-[60vw] flex items-center justify-center mt-16 h-full ' >

                        <Grid container spacing={3}>
                            {farmerProduct.map((item, num) =>

                                <Grid item xs={12} sm={6}>
                                    <div className='productCard p-5 cursor-pointer mt-10' onClick={() => handleProductcard(item.id)}>

                                        <div className='h-[20rem]'>
                                            <img className='h-full w-full object-cover object-left-top' src={`data:image/jpeg;base64,${item.imageData}`} alt='' />
                                        </div>
                                        <div className='textPart bg-white p-3'>
                                            <div>

                                                <p className='font-bold opacity-60'>{item.productSubName} </p>
                                                <p>{item.productName}</p>

                                            </div>
                                            <div className=' '>
                                                <p className='font-semibold'>Available Quantity: {item.quantityKg} Kg</p>
                                                <p className='font-semibold'>Price: ₹ {item.price}</p>
                                                <p className='font-semibold'>Contact: {item.phoneNumber}</p>
                                                <p className='font-semibold'>Location: {item.city}, {item.dist} -{item.zipCode} </p>
                                            </div>
                                        </div>
                                    </div>


                                </Grid>



                            )}
                        </Grid>


                    </div>

                </section>
            </div>

        </div>
    )
}

export default CustomerHomePage
