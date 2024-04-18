import React, { useEffect, useState } from 'react'
import { getDeliverdOrdersByCustomerId, getPlacedOrdersByCustomerId } from '../../Services/CustomerService'

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Card } from '@mui/material';

const CustomerOrderDetailsPages = () => {

    const [orderData, setOrderData] = useState([]);
    const [deliveredOrderData, setDeliveredOrderData] = useState([]);

    const userData = JSON.parse(localStorage.getItem("data"));
    var setCustomerId = userData.id;

    useEffect(() => {

        getPlacedOrdersByCustomerId(setCustomerId).then((response) => {
            setOrderData(response.data);
        })

        getDeliverdOrdersByCustomerId(setCustomerId).then((response)=>{
            setDeliveredOrderData(response.data);
        })

    })

    const steps = [
        'Placed Order',
        'Shipped Order',
        'Out for Delivery',
        'Deliverd Order',
    ];

    const getOrderStatusStep = (orderStatus) => {
        switch (orderStatus) {
            case 'place':
                return 0;
            case 'shipped':
                return 1;
            case 'outForDelivery':
                return 2;
            case 'orderDeliverd':
                return 3;

        }
    };

    return (
        <div className='flex flex-col items-center'>


        {/* This is for Display Orders under process of Delivery  */}


            <div className='h-full w-[90rem] bg-gray-100 mt-[5rem] flex flex-col items-center '>

                <h2 className='text-2xl font-bold text-center py-6'>Your Order's</h2>

                <div>
                    {orderData.map((item, num) =>

                        <Card className='p-5 w-[80rem] item-center justify-between box productCard mt-6 cursor-pointer mb-[3rem]'>



                            <div className='mt-10'>
                                <Box sx={{ width: '100%' }}>
                                    <Stepper activeStep={getOrderStatusStep(item.orderStatus)} alternativeLabel>
                                        {steps.map((label) => (
                                            <Step key={label}>
                                                <StepLabel>{label}</StepLabel>
                                            </Step>
                                        ))}
                                    </Stepper>
                                </Box>
                            </div>

                            <div className='lg:flex textPart item-center lg:space-x-5 mt-16 '>
                                <img className='w-[10rem] h-[10rem] object-cover mt-10'
                                    src='https://img.freepik.com/free-vector/cash-delivery-concept_23-2148786294.jpg?t=st=1713185972~exp=1713189572~hmac=3943cccc358eedb75432b469b858b591a389015512cc9bf932a9563d796d4731&w=740'
                                    alt='' />

                                <div className='space-y-1 lg:space-y-4 lg:max-w-2xl'>
                                    <p className='font-semibold text-2xl'> {item.orderProductName} </p>
                                    <p className='font-semibold text-xl opacity-40'> {item.orderProductSubName} </p>
                                    <p><b>Quantity  &nbsp;&nbsp;:  &nbsp;&nbsp;</b> {item.orderQuantity} Kg</p>
                                    <p><b>Total Bill  &nbsp;&nbsp;: &nbsp;&nbsp; </b> ₹ {item.orderTotalBill}</p>
                                    <p><b>Delivered Date : </b> {item.orderDeliveryDate}</p>
                                    <p><b>Delivered Address : </b> {item.orderDeliveryCity}, {item.orderDeliveryTaluka}, {item.orderDeliveryDist} -{item.orderDeliveryZipCode}</p>

                                </div>

                            </div>


                        </Card>
                    )}

                </div>

            </div>




                    {/* This is for Display Deliverd Orders of customer */}


            <div className='h-full w-[90rem] bg-gray-100 mt-[10rem] flex flex-col items-center '>

                <h2 className='text-2xl font-bold text-center py-6'>Deliverd Orders</h2>

                <div>
                    {deliveredOrderData.map((item, num) =>

                        <Card className='p-5 w-[80rem] item-center justify-between box productCard mt-6 cursor-pointer mb-[3rem]'>


                            <div className='lg:flex textPart item-center lg:space-x-5 mt-16 '>
                                <img className='w-[10rem] h-[10rem] object-cover mt-10'
                                    src='https://img.freepik.com/free-vector/cash-delivery-concept_23-2148786294.jpg?t=st=1713185972~exp=1713189572~hmac=3943cccc358eedb75432b469b858b591a389015512cc9bf932a9563d796d4731&w=740'
                                    alt='' />

                                <div className='space-y-1 lg:space-y-4 lg:max-w-2xl'>
                                    <p className='font-semibold text-2xl'> {item.orderProductName} </p>
                                    <p className='font-semibold text-xl opacity-40'> {item.orderProductSubName} </p>
                                    <p><b>Quantity  &nbsp;&nbsp;:  &nbsp;&nbsp;</b> {item.orderQuantity} Kg</p>
                                    <p><b>Total Bill  &nbsp;&nbsp;: &nbsp;&nbsp; </b> ₹ {item.orderTotalBill}</p>
                                    <p><b>Order Placed Date : </b> {item.orderPlaceDate}</p>
                                    <p><b>Deliverd Date : </b> {item.actualDeliveredDate}</p>
                                    <p><b>Delivery Address : </b> {item.orderDeliveryCity}, {item.orderDeliveryTaluka}, {item.orderDeliveryDist} -{item.orderDeliveryZipCode}</p>

                                </div>

                            </div>


                        </Card>
                    )}

                </div>

            </div>

        </div>
    )
}

export default CustomerOrderDetailsPages
