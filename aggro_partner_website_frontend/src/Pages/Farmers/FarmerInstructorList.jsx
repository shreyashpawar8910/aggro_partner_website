import { Button, Card, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { FarmerInstructorData } from './FarmerInstructorData'
import CallIcon from '@mui/icons-material/Call';
import InstructorLogo from './Assets/session_meeting.png'
import { useNavigate } from 'react-router-dom'
import { bookFarmerSessionWithInstructor, getAllInstructorProfile, getFarmerProfileByFarmerId, getSearchInstructorProfile } from '../../Services/FarmerService';
import { toast } from 'react-toastify'

const FarmerInstructorList = () => {

    const [instructorList, setInstructorList] = useState([]);
    const [textFieldValue, setTextFieldValue] = useState('');
    const navigate = useNavigate();

    useEffect(() => {

        if (textFieldValue === '') {
            getAllInstructorProfile().then((response) => {
                setInstructorList(response.data);
            })
        }else{
            getSearchInstructorProfile(textFieldValue).then((response)=>{
                setInstructorList(response.data);
            })
        }
    })


    const handleSessionSubmit = (e) => {
        e.preventDefault();

        const data = new FormData(e.currentTarget);

        const userData = JSON.parse(localStorage.getItem("data"));
        var setFarmerId = userData.id;



        getFarmerProfileByFarmerId(setFarmerId).then((response) => {
            const farmerData = response.data;

            const sessionBook = {
                farmerId: setFarmerId,

                sessionFarmerFirstName: farmerData.farmerFirstName,
                sessionFarmerLastName: farmerData.farmerLastName,
                sessionFarmerCity: farmerData.farmerCity,
                sessionFarmerDist: farmerData.farmerDist,
                sessionFarmerState: farmerData.farmerState,
                sessionFarmerPhoneNumber: farmerData.farmerPhoneNumber,
                sessionFarmerCrop: farmerData.farmerCrops,
                sessionFarmerArea: farmerData.farmerArea,
                sessionDone: "no",
                instructorId: data.get("sessionInstructorId"),
                sessionDate: data.get("sessionDate")
            }

            bookFarmerSessionWithInstructor(sessionBook).then((response) => {
                navigate("/farmer")
                toast.success("Session Booking Successfull......")
            }).catch((error) => {
                toast.error("Session Booking Faild..!!!")
            })


        })

    }

    const handleSearchSubmit = (event) => {
        const typedText = event.target.value;

        setTextFieldValue(typedText);
    }

    return (
        <section >
            <div className='m-[6rem]'>
                <section className='relative items-center justify-center flex mt-20 bg-gray-100 '>
                    <form className='m-8 bg-white'>
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
                        {instructorList.map((item, num) =>


                            <Card className='p-5 lg:flex item-center justify-between box productCard mt-6 cursor-pointer'>
                                <div className='lg:flex textPart item-center lg:space-x-5 '>
                                    <img className='w-[7rem] h-[7rem] object-cover '
                                        src={InstructorLogo}
                                        alt='' />

                                    <div className='space-y-1 lg:space-y-4 lg:max-w-2xl'>
                                        <p className='font-semibold text-xl'> <b>Instructor Name : </b> {item.instructorFirstName} {item.instructorLastName}</p>
                                        <p><b>Crop Speciliest : </b> {item.instructorSpeciliest}</p>
                                        <p><b>Year of experiance : </b> {item.instructorExperiance}</p>
                                        <p><b>Email : </b> {item.instructorEmail}</p>
                                        <p><b>Address : </b> {item.instructorCity}, {item.instructorState}</p>

                                    </div>

                                </div>

                                <div>

                                    <p className=' ml-[5rem] w-full mt-3'><CallIcon /> {item.instructorPhoneNumber}</p>
                                    <form className='mt-10 p-5 ' onSubmit={handleSessionSubmit}>
                                        <TextField
                                            id='sessionDate'
                                            name='sessionDate'
                                            type='date'
                                            required
                                        />
                                        <input hidden id='sessionInstructorId' name='sessionInstructorId' value={item.instructorId} />
                                        <Button sx={{ py: 1.5, ml: 2, bgcolor: "rgb(145 85 253)" }} size='large' variant='contained' type='submit'>Book </Button>
                                    </form>


                                </div>

                            </Card>
                        )}
                    </div>

                </div>


            </div>
        </section>
    )
}

export default FarmerInstructorList
