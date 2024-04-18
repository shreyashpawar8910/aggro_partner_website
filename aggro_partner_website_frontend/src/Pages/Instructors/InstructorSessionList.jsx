import React, { useEffect, useState } from 'react'
import sessionImage from './Assets/session_meeting.png'
import { InstroctorSessionData } from './InstroctorSessionData'
import { Button, Card, TextField } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { getInstructorSessionsByInstructorId, updateSessionDoneYes } from '../../Services/InstructorService';
import { toast } from 'react-toastify'

const InstructorSessionList = () => {

    const [instructorSession, setInstructorSession] = useState([]);

    useEffect(()=>{
        const userData = JSON.parse(localStorage.getItem("data"));
        var setInstructorId = userData.id;

        getInstructorSessionsByInstructorId(setInstructorId).then((response)=>{
         
            setInstructorSession(response.data);
        })
    })

    const handleContactYes=(e)=>{
        e.preventDefault();

        const data = new FormData(e.currentTarget);
        const getMainId = data.get("getId");

        updateSessionDoneYes(getMainId).then((response)=>{
            toast.success("Your communication with client done successfull.. ");
        })
    }

    return (
        <div>
            <section >
                <div className='m-[6rem]'>
                    <section className='relative items-center justify-center flex mt-20 bg-gray-100 '>
                        <p className='text-4xl font-bold m-5'>Your Sessions</p>
                    </section>

                    <div className='bg-gray-100 mt-10'>
                        <div className='mt-[5rem]'>
                            {instructorSession.map((item, num) =>
                                <Card className='p-5 lg:flex item-center justify-between box productCard mt-6 cursor-pointer'>
                                    <div className='lg:flex textPart item-center lg:space-x-5 '>
                                        <img className='w-[7rem] h-[7rem] object-cover '
                                            src={sessionImage}
                                            alt='' />

                                        <div className='space-y-1 lg:space-y-4 lg:max-w-2xl'>
                                            <p className='font-semibold text-xl'> <b>Farmer Name : </b> {item.sessionFarmerFirstName} {item.sessionFarmerLastName}</p>
                                            <p><b>Crop : </b> {item.sessionFarmerCrop}</p>
                                            <p><b>Field Area : </b> {item.sessionFarmerArea} Acers</p>
                                       
                                            <p className=' w-full mt-3 text-1xl font-semibold'><CallIcon /> {item.sessionFarmerPhoneNumber}</p>

                                        </div>

                                    </div>

                                    <div>
                                        <p className='text-gray-400  ml-[5rem] w-full'><LocationOnIcon /> {item.sessionFarmerCity} {item.
                                        sessionFarmerDist} {item.sessionFarmerState}</p>
                                        <p className=' ml-[5rem] w-full mt-3 text-green-500 font-semibold'><CalendarMonthIcon />  {item.sessionDate} </p>
                                        
                                        <form className='mt-10 ml-10' onSubmit={handleContactYes}>
                                            <TextField 
                                                required
                                                type='checkbox'
                                            />
                                            <input hidden id='getId' name='getId' value={item.id} />
                                            <Button sx={{ py: 1.5, ml: 3, bgcolor: "rgb(145 85 253)" }} size='large' variant='contained' type='submit'>Yes I contacted </Button>
                                        </form>

                                    </div>

                                </Card>
                            )}
                        </div>

                    </div>


                </div>
            </section>
        </div>
    )
}

export default InstructorSessionList
