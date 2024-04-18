import { Button, Card, Grid, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Farmerlogo from './Assets/Farmer_logo_1.png'
import { InstructorFarmerData } from './InstructorFarmerData'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import { getAllFarmerProfiles, getSearchFarmerProfile } from '../../Services/InstructorService';
import { useNavigate } from 'react-router-dom';



const InstructorsFarmerList = () => {

  const [farmerProfile, setFarmerProfile] = useState([]);
  const [textFieldValue, setTextFieldValue] = useState('');
  const navigate = useNavigate();

  useEffect(() => {


    if (textFieldValue==='') {

      getAllFarmerProfiles().then((response) => {
        setFarmerProfile(response.data);
      })

    } else {

      getSearchFarmerProfile(textFieldValue).then((response) => {
        setFarmerProfile(response.data);
      })

    }


  })

  const handleSearchSubmit = (event) => {
    const typedText = event.target.value;

    setTextFieldValue(typedText);
  }




  return (
    <section >
      <div className='m-[6rem]'>
        <section className='relative items-center justify-center flex mt-20 bg-gray-100 '>
          <form className='m-8 bg-white' >
            <TextField
              
              value={textFieldValue}
              onChange={handleSearchSubmit}
              label='Search..'
              sx={{ width: '400px' }}
            />

          </form>
        </section>

        <div className='bg-gray-100 mt-10'>
          <div className='mt-[5rem]'>

            {farmerProfile.map((item, num) =>
              <Card className='p-5 lg:flex item-center justify-between box productCard mt-6 cursor-pointer'>
                <div className='lg:flex textPart item-center lg:space-x-5 '>
                  <img className='w-[7rem] h-[7rem] object-cover '
                    src={Farmerlogo}
                    alt='' />

                  <div className='space-y-1 lg:space-y-4 lg:max-w-2xl'>
                    <p className='font-semibold text-xl'> <b>Farmer Name : </b> {item.farmerFirstName} {item.farmerLastName}</p>
                    <p><b>Crops Planted in the field : </b> {item.farmerCrops}</p>
                    <p><b>Field Area : </b> {item.farmerArea} Acers</p>

                  </div>

                </div>

                <div>
                  <p className='text-gray-400  ml-[5rem] w-full'><LocationOnIcon /> {item.farmerCity}, {item.farmerDist}, {item.farmerState}</p>
                  <p className=' ml-[5rem] w-full mt-3'><CallIcon /> {item.farmerPhoneNumber}</p>

                </div>

              </Card>
            )}
          </div>

        </div>


      </div>
    </section>
  )
}

export default InstructorsFarmerList
