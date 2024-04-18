import { Box, Button, Card, Step, StepLabel, Stepper } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { changeOrderStatusForAdmin, getAdminDeliverdOrders, getAdminPlacedOrders } from '../../Services/AdminService';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';


const AdminDeliveredOrder = () => {

    const [placeOrderData, setPlaceOrderData] = useState([]);

    useEffect(() => {
        getAdminDeliverdOrders().then((response) => {
            setPlaceOrderData(response.data);
        })
    })


    const steps = [
        'Placed Order',
        'Shipped Order',
        'Out for Delivery',
        'Deliverd Order',
    ];



    return (
        <div className='flex flex-col items-center'>


            <div className='h-full w-[90rem] bg-gray-100 mt-[5rem] flex flex-col items-center '>

                <h2 className='text-2xl font-bold text-center py-6'>Placed Order's</h2>

                <div>
                    {placeOrderData.map((item, num) =>

                        <Card className='p-5 w-[80rem] h-[40rem] item-center justify-between box  mt-6 cursor-pointer mb-[3rem]'>

                            <div className='flex flex-col items-center'>
                                <p className='font-semibold text-2xl'> {item.orderProductName} </p>
                                <p className='font-semibold text-xl opacity-40'> {item.orderProductSubName} </p>
                                <p><b>Quantity  &nbsp;&nbsp;:  &nbsp;&nbsp;</b> {item.orderQuantity} Kg</p>
                            </div>

                            <div className='lg:flex textPart item-center lg:space-x-5 mt-16 '>
                                <img className='w-[10rem] h-[10rem] object-cover mt-10'
                                    src='https://img.freepik.com/free-vector/cash-delivery-concept_23-2148786294.jpg?t=st=1713185972~exp=1713189572~hmac=3943cccc358eedb75432b469b858b591a389015512cc9bf932a9563d796d4731&w=740'
                                    alt='' />

                                <div className='w-[30rem]'>
                                    <p className='font-semibold text-2xl text-green-500'> PickUp Address </p>
                                    <br></br>

                                    <p><b>Total Bill  &nbsp;&nbsp;: &nbsp;&nbsp; </b> ₹ {item.orderQuantityPrice}</p>
                                    <p><b>PickUp Date : </b> {item.orderDeliveryDate}</p>
                                    <p><b>PickUp Address : </b> {item.orderPickupCity}, {item.orderPickupDist} -{item.orderPickupZipCode}</p>
                                    <br></br>
                                    <p><b> <LocationOnIcon /> </b> {item.orderPickupAddress}</p>


                                </div>

                                <div className='absolute left-[60rem] w-[30rem] '>
                                    <p className='font-semibold text-2xl text-green-500'> Delivery Address </p>
                                    <br></br>

                                    <p><b>Name  &nbsp;&nbsp;:  &nbsp;&nbsp;</b> {item.orderDeliveryCustomerName} </p>

                                    <p><b>Total Bill  &nbsp;&nbsp;: &nbsp;&nbsp; </b> ₹ {item.orderTotalBill}</p>
                                    <p><b>Delivered Date : </b> {item.actualDeliveredDate}</p>
                                    <p><b>Delivered Address : </b> {item.orderDeliveryCity}, {item.orderDeliveryTaluka}, {item.orderDeliveryDist} -{item.orderDeliveryZipCode}</p>
                                    <br></br>
                                    <p><b><CallIcon /> </b> {item.orderDeliveryPhoneNumber}</p>
                                    <p><b><LocationOnIcon /> </b> {item.orderDeliveryAddress}</p>

                                </div>

                            </div>

                            <div className='flex flex-col items-center mt-20'>
                                <Box sx={{ width: '100%' }}>
                                    <Stepper activeStep={4} alternativeLabel>
                                        {steps.map((label) => (
                                            <Step key={label}>
                                                <StepLabel>{label}</StepLabel>
                                            </Step>
                                        ))}
                                    </Stepper>
                                </Box>

                            </div>




                        </Card>
                    )}

                </div>

            </div>


        </div>
    )
}

export default AdminDeliveredOrder





