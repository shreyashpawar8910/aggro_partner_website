import { Card, Grid } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const AdminHomePage = () => {

  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    navigate("/adminPlaceOrder");
  }

  const handleShippedOrder = () => {
    navigate("/adminShippedOrder");
  }

  const handleOutOfDeliveryOrder = () => {
    navigate("/adminOutOfDeliveryOrder");
  }

  const handleDeliverdOrder = () => {
    navigate("/adminDeliverdOrder");
  }

  return (
    <div>

      <section className='-z-50 banner relative flex flex-col justify-center items-center mt-20'>
        <div className='w-[50vw] z-10 text-center'>
          <p className='text-2xl lg:text-7xl font-bold z-10 py-5 text-green-600'>
            Welcome Admin
          </p>

          <p className='z-10  text-xl lg:text-4xl'>
            Provide the best service for your Client...
          </p>

        </div>
      </section>

      <div className='mt-20'>

      </div>

      <div className='flex flex-col items-center w-[100rem] m-10 bg-gray-100'>

        <Grid container spacing={3} sx={{ marginTop: '20px' }}>

          <Grid item xs={12} sm={3}>
            <div className='w-[23rem] h-[25rem] flex flex-col items-center m-5 productCard cursor-pointer bg-white' onClick={handlePlaceOrder}>
              <img className='h-[20rem]' src='https://img.freepik.com/premium-vector/supermarket-online-concept_118813-3127.jpg?w=900' />

              <h3 className='mt-5 font-bold text-2xl'>Placed Order's</h3>
            </div>
          </Grid>

          <Grid item xs={12} sm={3}>
            <div className='w-[23rem] h-[25rem] flex flex-col items-center m-5 productCard cursor-pointer bg-white' onClick={handleShippedOrder}>
              <img className='h-[20rem] ' src='https://img.freepik.com/free-vector/storehouse-workers-keeping-records-boxes_74855-11065.jpg?t=st=1713327893~exp=1713331493~hmac=0323f1afde2340308f4146e666e5ed85a3e7638e550c66b8615a93ffec52ac31&w=1060' />

              <h3 className='mt-5 font-bold text-2xl'>Shipped Order's</h3>
            </div>
          </Grid>


          <Grid item xs={12} sm={3}>
            <div className='w-[23rem] h-[25rem] flex flex-col items-center m-5 productCard cursor-pointer bg-white' onClick={handleOutOfDeliveryOrder}>
              <img className='h-[20rem]' src='https://img.freepik.com/free-vector/way-concept-illustration_114360-1191.jpg?t=st=1713185795~exp=1713189395~hmac=a35c087a3552fcafb9181f0dba0352eb54ecf3a1d0e51afa26fcecb01df2d8e5&w=1060' />

              <h3 className='mt-5 font-bold text-2xl'>Out for Delivery Order's</h3>
            </div>
          </Grid>

          <Grid item xs={12} sm={3}>

            <div className='w-[23rem] h-[25rem] flex flex-col items-center m-5 productCard cursor-pointer bg-white' onClick={handleDeliverdOrder}>
              <img className='h-[20rem]' src='https://img.freepik.com/free-vector/cash-delivery-concept_23-2148786294.jpg?t=st=1713185972~exp=1713189572~hmac=3943cccc358eedb75432b469b858b591a389015512cc9bf932a9563d796d4731&w=740' />

              <h3 className='mt-5 font-bold text-2xl'>Deliverd Order's</h3>
            </div>
          </Grid>

        </Grid>








      </div>

    </div>
  )
}

export default AdminHomePage
