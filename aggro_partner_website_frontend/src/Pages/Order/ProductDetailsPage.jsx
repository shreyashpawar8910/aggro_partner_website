import React, { useEffect, useState } from 'react'
import { ProductDetailData } from './ProductDetailData'
import { Button, Grid, MenuItem, Select, TextField } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom';
import { getFarmerIdUsingProductId, getFarmerProductById, placeOrder } from '../../Services/CustomerService';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { toast } from 'react-toastify';

const ProductDetailsPage = () => {

    const navigate = useNavigate();

    const [textFieldValue, setTextFieldValue] = useState();
    const [error, setError] = useState(false);
    const [productData, setProductData] = useState({}); 
    const [productFarmerData, setProductFarmerData] = useState({}); 



    const quantityBill = textFieldValue * productData.price;
    const gstCharges = (quantityBill * 5) / 100;
    const totalBill = quantityBill + gstCharges + 50;



    const currentDate = new Date();
    const afterTwoDays = new Date();
    afterTwoDays.setDate(currentDate.getDate() + 1);
    const formattedDate = afterTwoDays.toLocaleDateString();



    const placeOrderDate = currentDate.toDateString();

    const { id } = useParams();

    const handleQuantity = (e) => {
        e.preventDefault();
        if (textFieldValue > productData.quantityKg) {
            setError(true);
        }
    }

    useEffect(() => {
        getFarmerProductById(id).then((response) => {
            setProductData(response.data);
        })

        getFarmerIdUsingProductId(id).then((response)=>{
            setProductFarmerData(response.data);
        })
    })


    const handleCheckQuantity = (event) => {
        const typedText = event.target.value;

        setTextFieldValue(typedText);

    }


    const handlePlaceOrder=(e)=>{
        e.preventDefault();

        const data = new FormData(e.currentTarget);

        const userData = JSON.parse(localStorage.getItem("data"));
        var setCustomerId = userData.id;

        const orderDetail={

            orderProductId: id,
            orderCustomerId: setCustomerId,
            orderFarmerId : productFarmerData.farmerId,
            
            orderProductName: productData.productName,
            orderProductSubName:  productData.productSubName,
            orderPickupCity: productData.city,
            orderPickupDist: productData.dist,
            orderPickupZipCode: productData.zipCode,
            orderPickupAddress: productData.address,
            orderPickupPhoneNumber: productData.phoneNumber,

            orderQuantity: textFieldValue,
            orderQuantityPrice: quantityBill,
            orderGSTCharges: gstCharges,
            orderDeliveryCharges: 50,
            orderTotalBill: totalBill,

            orderDeliveryCustomerName: data.get("customerName"),
            orderDeliveryCity: data.get("customerCity"),
            orderDeliveryTaluka: data.get("customerTaluka"),
            orderDeliveryDist: data.get("customerDist"),
            orderDeliveryAddress: data.get("customerAddress"),
            orderDeliveryZipCode: data.get("customerZip"),
            orderDeliveryPhoneNumber: data.get("customerPhoneNumber"),
            orderDeliveryEmailId: data.get("customerEmail"),
            orderStatus: "place",
            orderDeliveryDate: formattedDate,
            orderPlaceDate: placeOrderDate,


        }

        placeOrder(orderDetail).then((response)=>{
            navigate("/customer")
            toast.success("Your Order Placed Successfully..")
        }).catch((error)=>{
            toast.error("Your Order Placed Faild..!!!");
        })

    }



    return (
        <div className='flex flex-col items-center'>

            <section className='h-full w-[90rem] bg-gray-100 mt-[5rem]'>
                <Grid container sx={{ marginTop: "50px" }}>
                    <Grid item>
                        <div className="flex flex-col items-center">
                            <div className="overflow-hidden rounded-lg max-w-[40rem] max-h-[45rem]">
                                <img
                                    src={`data:image/jpeg;base64,${productData.imageData}`}
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>
                            <div className="flex flex-wrap space-x-5 justify-center">

                                {ProductDetailData.images.map((item) => 
                                <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem] mt-4">
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
                            <p className='text-4xl font-semibold'>{productData.productName}</p>
                            <p className='size-45 m-1 font-semibold opacity-40'>{productData.productSubName}</p>

                            <p className='font-semibold text-2xl m-2'>Available Quantity : <u className='text-green-500 ml-4'>{productData.quantityKg} Kg</u></p>
                            <p className='font-semibold text-2xl m-2'>Price  : <u className='text-green-500 ml-[10rem]'>₹ {productData.price} per Kg</u></p>
                            <p className='font-semibold text-2xl m-2'>Delivery Charges  : <u className='text-green-500 ml-7'>₹ 50 </u></p>

                            <p className='font-semibold  mt-10 ml-2'><DateRangeIcon />  Delivery On  : {formattedDate}</p>

                            <br></br>
                            <p className='  m-1 font-semibold '><CallIcon /> {productData.phoneNumber}</p>
                            <p className='m-1'><LocationOnIcon /> {productData.city}, {productData.dist}, -{productData.zipCode} </p>

                        </div>

                    </Grid>

                </Grid>


            </section>




            <div className='mt-20 h-full w-[90rem] bg-gray-100'>
                <Grid >
                    <form onChange={handleQuantity} className='flex flex-col items-center '>
                        <h2 className='text-2xl font-bold text-center py-6'>Quantity</h2>
                        <div className='m-10'>
                            {error && textFieldValue > productData.quantityKg ?
                                <lable fullWidth className='text-red-700 font-semibold m-1'>We don't have the capacity you requested..</lable> : ""
                            }
                            <TextField
                                required
                                value={textFieldValue}
                                onChange={handleCheckQuantity}
                                label='Quantity in Kg'
                                sx={{ width: '600px', bgcolor: 'white' }}

                            />
                        </div>

                    </form>
                </Grid>
            </div>



            <div className='flex flex-col h-full w-[90rem] items-center mt-20'>
                <Grid>

                    <div className='bg-gray-100 mb-10'>
                        <form className='m-10' onSubmit={handlePlaceOrder}>
                            <h2 className='text-2xl font-bold text-center py-6'>Delivery Address</h2>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>

                                    <TextField required
                                        id="customerName"
                                        name="customerName"
                                        label="Name"
                                        fullWidth

                                    />

                                </Grid>


                                <Grid item xs={12} sm={6}>

                                    <TextField required
                                        id="customerCity"
                                        name="customerCity"
                                        label="City"
                                        fullWidth

                                    />

                                </Grid>

                                <Grid item xs={12} sm={6}>

                                    <TextField required
                                        id="customerTaluka"
                                        name="customerTaluka"
                                        label="Taluka"
                                        fullWidth

                                    />

                                </Grid>

                                <Grid item xs={12} sm={6}>

                                    <TextField required
                                        id="customerDist"
                                        name="customerDist"
                                        label="District"
                                        fullWidth

                                    />

                                </Grid>

                                <Grid item xs={12} >

                                    <TextField required
                                        id="customerAddress"
                                        name="customerAddress"
                                        label="Address"
                                        fullWidth
                                        multiline
                                        rows={4}

                                    />

                                </Grid>

                                <Grid item xs={12} sm={6}>

                                    <TextField required
                                        id="customerZip"
                                        name="customerZip"
                                        label="Zip / Postal Code"
                                        fullWidth
                                        autoComplete='shipping postal-code'
                                    />

                                </Grid>

                                <Grid item xs={12} sm={6}>

                                    <TextField required
                                        id="customerPhoneNumber"
                                        name="customerPhoneNumber"
                                        label="Phone Number" fullWidth

                                    />

                                </Grid>

                                <Grid item xs={12} sm={6}>

                                    <TextField
                                        id="customerEmail"
                                        name="customerEmail"
                                        label="Email Id (Optional)"
                                        type='email'
                                        fullWidth

                                    />

                                </Grid>

                                <Grid item xs={12} >



                                    <div className='flex flex-col items-center'>
                                        <h4 className='text-green-500 mt-5 font-semibold'>* Payment mode : Cash on Delivery *</h4>
                                        <div className='bg-white p-5 mt-7'>

                                            <p>Total Quantity  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : &nbsp;&nbsp;{textFieldValue} Kg</p>
                                            <p>Total Price &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : &nbsp;&nbsp;₹ {quantityBill}</p>
                                            <p>GST  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : &nbsp;&nbsp;₹ {gstCharges} </p>

                                            <p>Delivery Charges&nbsp; : &nbsp;&nbsp;₹ {50}</p>
                                            <br></br>
                                            <p>===================</p>
                                            <br></br>
                                            <p>Total Bill &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : &nbsp;&nbsp; ₹ {totalBill}</p>
                                        </div>
                                    </div>

                                    <Button sx={{ py: 1.5, mt: 2, bgcolor: "rgb(145 85 253)" }} size='large' variant='contained'
                                        type='submit'>Place Order</Button>

                                </Grid>



                            </Grid>
                        </form>
                    </div>
                </Grid>
            </div>




        </div>
    )
}

export default ProductDetailsPage
