import React, { useEffect, useState } from 'react'

import { Grid } from '@mui/material';
import { HomePageProductData } from './HomePageProductData';
import HomePageMainCaresol from './HomePageMainCaresol';
import { useNavigate } from 'react-router-dom';
import { isLoggedIn } from '../../Services/Authantication';
import { getAllAdvertisement } from '../../Services/InstructorService';


const HomePage = () => {

  const navigtate = useNavigate();

  const [advertiseData, setAdvertiseData] = useState([]);

  const [login, setLogin] = useState(false);
  const [RoleData, setRoleData] = useState(false);
  const [NameData, setNameData] = useState(false);



  var setRole;
  var setName;


  useEffect(() => {
    setLogin(isLoggedIn());

    getAllAdvertisement().then((response)=>{
      setAdvertiseData(response.data);
  })

    const userData = JSON.parse(localStorage.getItem("data"));

    if (userData) {
      setRole = userData.role;
      setName = userData.firstName;

      setRoleData(setRole);
      setNameData(setName);
      setNameData(setName.charAt(0));

      if (setRole === "farmer") {
        navigtate("/farmer")
        // navigate("/farmer")

      } else if (setRole === "customer") {
        navigtate("/customer")
        // navigate("/customer")

      } else if (setRole === "instructor") {
        navigtate("/instructor")
        // navigate("/instructor")
      } else if (setRole === "admin") {
        navigtate("/admin")
        // navigate("/instructor")
      }

    } else {
      navigtate("/")
    }


  }, [login])




  const handleProductcard = () => {
    navigtate("productDetail");
  }

  return (

    <div>
      <div className='w-[103rem] m-5'>
        <HomePageMainCaresol />
      </div>
      <div>
        <section className='-z-50 banner relative flex flex-col justify-center items-center'>
          <div className='w-[50vw] z-10 text-center'>
            <p className='text-2xl lg:text-7xl font-bold z-10 py-5 '> Welcome to </p>
            <p className='text-2xl lg:text-7xl font-bold z-10  text-green-600'>Aggro Partner</p>

            <p className='z-10  text-xl lg:text-4xl mt-10'>
              Connect yourself to the digital world
            </p>

          </div>
        </section>
      </div>

      <div>
        <div className='bg-gray-200 w-[99vw] flex items-center justify-center mt-10 h-full mb-10' >

          <Grid container spacing={3}>


            {advertiseData.map((item, num) =>
              <Grid item xs={12} >
                <div className='productCard p-5 cursor-pointer '>

                  <div className='h-full'>
                    <img className='h-full w-full object-cover object-left-top' src={`data:image/jpeg;base64,${item.imageData}`} alt='' />
                  </div>
                 
                </div>


              </Grid>
            )}

          </Grid>


        </div>
      </div>

    </div>



  )
}

export default HomePage
