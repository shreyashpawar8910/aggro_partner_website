import { Button, Grid, MenuItem, Select, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { getAllFarmerProducts, uploadFarmerProduct } from '../../Services/FarmerService';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const FarmerProductUpload = () => {

    const navigate = useNavigate();

    const handleProductSubmit = (e) => {
        e.preventDefault();

        const data = new FormData(e.currentTarget);


        const userData = JSON.parse(localStorage.getItem("data"));
        var setFarmerId = userData.id;

        const formDataToSend = new FormData();
        formDataToSend.append('farmerId', setFarmerId);

        formDataToSend.append('productName', data.get("productName"));
        formDataToSend.append('productSubName', data.get("subName"));
        formDataToSend.append('quantityKg', data.get("quantity"));
        formDataToSend.append('price', data.get("price"));
        formDataToSend.append('city', data.get("city"));
        formDataToSend.append('dist', data.get("dist"));
        formDataToSend.append('address', data.get("address"));
        formDataToSend.append('zipCode', data.get("zip"));
        formDataToSend.append('phoneNumber', data.get("phone"));
        formDataToSend.append('image', data.get("photo"));

        uploadFarmerProduct(formDataToSend).then((response) => {
            navigate("/farmer/products")
            toast.success("Product Added Succesfull....")
        }).catch((error) => {

            toast.error("Product Added Faild....")
        });
    }

   



    return (
        <div>
            <section className='banner relative flex flex-col items-center justify-center '>
                <div className='bg-gray-100  w-[60vw] '>
                
                    <form className='m-20' onSubmit={handleProductSubmit}>
                        <h2 className='text-4xl font-bold text-center py-6 text-green-600'>Aggro Partner</h2>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>

                                <TextField required
                                    id="productName"
                                    name="productName"
                                    label="Product Name"
                                    fullWidth

                                />

                            </Grid>

                            <Grid item xs={12} sm={6}>

                                <TextField required
                                    id="subName"
                                    name="subName"
                                    label="sub Name"
                                    fullWidth

                                />

                            </Grid>




                            <Grid item xs={12} sm={6}>

                                <TextField required
                                    id="quantity"
                                    name="quantity"
                                    label="Quantity in Kg"
                                    type='number'
                                    fullWidth

                                />

                            </Grid>

                            <Grid item xs={12} sm={6}>

                                <TextField required
                                    id="price"
                                    name="price"
                                    label="Price"
                                    type='number'
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
                                    id="dist"
                                    name="dist"
                                    label="Dist"
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
                                    label="Zip Code"
                                    fullWidth

                                />

                            </Grid>

                            <Grid item xs={12} sm={6}>

                                <TextField required
                                    id="phone"
                                    name="phone"
                                    label="Phone Number"

                                    fullWidth

                                />

                            </Grid>

                            <Grid item xs={12} sm={6}>

                                <TextField required
                                    id="photo"
                                    name="photo"
                                    label="Photo"
                                    type='file'
                                    fullWidth

                                />

                            </Grid>

                            <Grid item xs={12} >

                                <Button sx={{ py: 1.5, mt: 2, bgcolor: "rgb(145 85 253)" }} size='large' variant='contained'
                                    type='submit'>Submit </Button>

                            </Grid>



                        </Grid>
                    </form>


                </div>
            </section>
        </div>

    )
}

export default FarmerProductUpload
