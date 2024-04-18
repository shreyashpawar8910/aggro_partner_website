import React, { useEffect, useState } from 'react'
import { FarmerDeliverdOrderData } from './FarmerDeliverdOrderData'
import { Button, Card, TextField } from '@mui/material'
import DateRangeIcon from '@mui/icons-material/DateRange';
import { getFarmerDeliverdOrdersByFarmerId } from '../../Services/FarmerService';

const FarmerDeliverdOrder = () => {

  const [orderData, setOrderData] = useState([]);


  const userData = JSON.parse(localStorage.getItem("data"));
  var setFarmerId = userData.id;

  useEffect(()=>{
    getFarmerDeliverdOrdersByFarmerId(setFarmerId).then((response)=>{
      setOrderData(response.data);
    })
  })


  return (
    <div>
      <div className='m-[6rem]'>

        <section className='relative items-center justify-center flex mt-20 bg-gray-100 '>
            <h1 className='text-4xl font-bold p-5'>Deliverd Order's</h1>
        </section>

        <div className='bg-gray-100 mt-10'>
          <div className='mt-[5rem]'>
            {orderData.map((item, num) =>
              <Card className='p-5 lg:flex item-center justify-between box productCard mt-6 cursor-pointer'>
                <div className='lg:flex textPart item-center lg:space-x-5 '>
                  <img className='w-[9rem] h-[9rem] object-cover '
                    src= 'https://img.freepik.com/free-vector/cash-delivery-concept_23-2148786294.jpg?t=st=1713185972~exp=1713189572~hmac=3943cccc358eedb75432b469b858b591a389015512cc9bf932a9563d796d4731&w=740'
                    alt='' />

                  <div className='space-y-1 lg:space-y-4 lg:max-w-2xl'>
                    <p className='font-semibold text-xl'> {item.orderProductName}</p>
                    <p className=''>{item.orderProductSubName}</p>
                    <p><b>Quantity : </b> {item.orderQuantity} Kg</p>
                    <p><b>Total Bill : </b> ₹ {item.orderQuantityPrice} </p>


                  </div>

                </div>

                <div>

                  <p className=' ml-[5rem] w-full mt-3'><DateRangeIcon /> {item.orderDeliveryDate}</p>
                 
                </div>

              </Card>
            )}
          </div>

        </div>

      </div>
    </div>
  )
}

export default FarmerDeliverdOrder
