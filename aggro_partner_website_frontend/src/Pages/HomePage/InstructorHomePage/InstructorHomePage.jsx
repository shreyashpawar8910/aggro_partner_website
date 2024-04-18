import { Grid } from '@mui/material'
import React from 'react'
import farmerLogo from './imageData/Farmer_logo_1.png'
import researchLogo from './imageData/Agriculture_research.png'
import advertisement from './imageData/Advertise.png'
import session_meeting from './imageData/session_meeting.png'
import { useNavigate } from 'react-router-dom'

import PersonIcon from '@mui/icons-material/Person';
import { myAxios } from '../../../Services/helper'

const InstructorHomePage = () => {

    const navigate = useNavigate();

    const handleFarmers = () => {
        navigate('/instructor/farmers')
    }

    const handleInformation = () => {
        navigate('/instructor/reasearch')
    }

    const handleAdvertisement = () => {
        navigate('/instructor/advertisement')
    }

    const handleSession = () => {
        navigate('/instructor/session')
    }

    const handleProfileCreate = () => {

        const userData = JSON.parse(localStorage.getItem("data"));
        var setInstructorId = userData.id;

        myAxios.get("/getInstructorByInstructorId/" + setInstructorId).then((response) => {
            navigate("/instructor/editProfile")
        }).catch((error) => {
            navigate("/instructor/createProfile")
        })

    }


    return (
        <div>

            <div className='mt-10  ml-[95rem] bg-gray-100 w-[5rem] h-[5rem] productCard' onClick={handleProfileCreate}>

                <PersonIcon sx={{ fontSize: '5rem', cursor: 'pointer' }} />

            </div>

            <section className='-z-50 banner relative flex flex-col justify-center items-center'>
                <div className='w-[50vw] z-10 text-center'>
                    <p className='text-2xl lg:text-7xl font-bold z-10 py-5 text-green-600'>
                        Welcome Instructor's
                    </p>

                    <p className='z-10  text-xl lg:text-4xl'>
                        Connect yourself to the digital world...
                    </p>

                </div>
            </section>

            <section className='relative items-center justify-center w-[300rem] m-10'>
                <Grid container>
                    <Grid item xs={12} sm={1}>
                        <div className=' relative text-center items-center justify-center productCard  cursor-pointer bg-gray-100 m-10' onClick={handleFarmers}>
                            <section className='relative items-center justify-center'>
                                <img className='' src={farmerLogo} alt='' />
                            </section>
                            <div className='textPart p-3'>
                                <div style={{ color: "#9CCB00" }}>
                                    <p className='text-3xl  font-bold'>Farmer's</p>
                                </div>
                                <div>
                                    <p className='mt-3'>React out farmers and contect them</p>
                                </div>

                            </div>
                        </div>
                    </Grid>

                    <Grid item xs={12} sm={1}>
                        <div className=' relative text-center items-center justify-center productCard  cursor-pointer bg-gray-100 m-10' onClick={handleInformation}>
                            <section className='relative items-center justify-center'>
                                <img className='' src={researchLogo} alt='' />
                            </section>
                            <div className='textPart p-3 mt-[2rem]'>
                                <div style={{ color: "#9CCB00" }}>
                                    <p className='text-3xl  font-bold'>Publish Information</p>
                                </div>
                                <div>
                                    <p className='mt-3'>Publish your reasearch or information for the farmer's</p>
                                </div>

                            </div>
                        </div>
                    </Grid>

                    <Grid item xs={12} sm={1}>
                        <div className=' relative text-center items-center justify-center productCard  cursor-pointer bg-gray-100 m-10' onClick={handleAdvertisement}>
                            <section className='relative items-center justify-center'>
                                <img className='' src={advertisement} alt='' />
                            </section>
                            <div className='textPart p-3 mt-[4.5rem]'>
                                <div style={{ color: "#9CCB00" }}>
                                    <p className='text-3xl  font-bold'>Advertisment</p>
                                </div>
                                <div>
                                    <p className='mt-3'>Advertise your products</p>
                                </div>

                            </div>
                        </div>
                    </Grid>

                    <Grid item xs={12} sm={1}>
                        <div className=' relative text-center items-center justify-center productCard  cursor-pointer bg-gray-100 m-10' onClick={handleSession}>
                            <section className='relative items-center justify-center'>
                                <img className='' src={session_meeting} alt='' />
                            </section>
                            <div className='textPart p-3 mt-[0.2rem]'>
                                <div style={{ color: "#9CCB00" }}>
                                    <p className='text-3xl  font-bold'>Your Sessions</p>
                                </div>
                                <div>
                                    <p className='mt-3'>List of farmer's who want to meet with you</p>
                                </div>

                            </div>
                        </div>
                    </Grid>

                </Grid>

            </section>
        </div>
    )
}

export default InstructorHomePage
