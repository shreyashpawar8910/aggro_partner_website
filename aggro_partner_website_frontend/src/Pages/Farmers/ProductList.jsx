import React, { useEffect, useState } from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import './ProductList.css'
import { useNavigate } from 'react-router-dom';
import { deleteFarmerProduct, getAllFarmerProducts } from '../../Services/FarmerService';
import { toast } from 'react-toastify';

const ProductList = () => {

    const navigate = useNavigate();
    const [FarmerProductList, setFarmerProductList] = useState([]);

    const handleAddProduct = () => {
        navigate("/farmer/products/addproduct")
    };

    const userData = JSON.parse(localStorage.getItem("data"));
    var setFarmerId = userData.id;


    useEffect(() => {

        getAllFarmerProducts(setFarmerId).then(response => {
            setFarmerProductList(response.data)
        });
    }, [])

    const handleProductDelete=(mainId)=>{
        deleteFarmerProduct(mainId).then((response)=>{
            navigate("/farmer/products");
            toast.success("Product Delete Successfull .....");
        }).catch((error)=>{

            toast.error("product Delete Faild..!!!");
        })
    }

    return (
        <div>
            <section className='relative flex flex-col justify-center items-center'>

                <div className='mt-10' onClick={handleAddProduct}>

                    <AddShoppingCartIcon sx={{ fontSize: '3rem', cursor: 'pointer' }} />

                </div>

                <div className='bg-gray-200 w-[60vw] flex items-center justify-center mt-16 h-full'>

                    <Grid container spacing={3}>
                        {FarmerProductList.map((item, num) =>

                            <Grid item xs={12} sm={6}>
                                <div className='productCard p-5 cursor-pointer'>

                                    <div className='h-[20rem]'>
                                        <img className='h-full w-full object-cover object-left-top' src={`data:image/jpeg;base64,${item.imageData}`} alt='' />
                                    </div>
                                    <div className='textPart bg-white p-3'>
                                        <div>
                                            {/* <p className='absolute ml-80 text-green-700 font-semibold'>{item.availableDate}</p> */}
                                            <p className='font-bold opacity-60'>{item.productSubName} </p>

                                            <p>{item.productName}</p>
                                        </div>
                                        <div className=' '>
                                            <p className='font-semibold'>Available Quantity: {item.quantityKg} Kg</p>
                                            <p className='font-semibold'>Price: ₹ {item.price}</p>
                                            <p className='font-semibold'>Contact: {item.phoneNumber}</p>
                                            <p className='font-semibold'>Location: {item.city}, {item.dist} -{item.zipCode}</p>
                                        </div>
                                    </div>

                                    <div className='flex flex-row space-x-6 items-center relative justify-center'>
                                        <p className='text-5xl text-red-600 cursor-pointer' onClick={() => handleProductDelete(item.id)}><DeleteIcon /></p>
                                    </div>
                                </div>                           


                            </Grid>


                        )}
                    </Grid>


                </div>

            </section>
        </div>
    )
}

export default ProductList
