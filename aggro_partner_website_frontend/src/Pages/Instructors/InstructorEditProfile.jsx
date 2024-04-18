import { Button, Grid, MenuItem, Select, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { myAxios } from '../../Services/helper';
import { updateInstructorProfile } from '../../Services/InstructorService';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const InstructorEditProfile = () => {

    const navigate = useNavigate();

    const userData = JSON.parse(localStorage.getItem("data"));
    var setInstructorId = userData.id;

    const [formd, setFormd] = useState({
        id: "",
        firstName: "",
        lastName: "",
        city: "",
        state: "",
        speciliest: "",
        experiance: "",
        email: "",
        phoneNumber: "",
        openToWork: ""
    });

    useEffect(() => {
        myAxios.get("/getInstructorByInstructorId/" + setInstructorId).then((response) => {
            setFormd({
                ...formd, id: response.data.id, firstName: response.data.instructorFirstName, lastName: response.data.instructorLastName,
                city: response.data.instructorCity, state: response.data.instructorState, speciliest: response.data.instructorSpeciliest,
                experiance: response.data.instructorExperiance, email: response.data.instructorEmail, phoneNumber: response.data.instructorPhoneNumber,
                openToWork: response.data.instructorOpenToWork
            })

        }).catch((error) => {
            console.log("Error")
        })
    }, [])


    const handleUpdate = (e) => {
        e.preventDefault();

        const data = new FormData(e.currentTarget);


        const profile = {
            instructorFirstName: data.get("firstName"),
            instructorLastName: data.get("lastName"),
            instructorSpeciliest: data.get("spacialist"),
            instructorExperiance: data.get("experience"),
            instructorEmail: data.get("email"),
            instructorPhoneNumber: data.get("phoneNumber"),
            instructorCity: data.get("city"),
            instructorState: data.get("state"),
            instructorOpenToWork: data.get("available"),
            instructorId: setInstructorId,
        }

        updateInstructorProfile(profile, formd.id).then((response) => {
            navigate("/instructor")
            toast.success("Profile Update Successfull....");
        }).catch((error) => {
            toast.error("Profile Update Faild..!!!");
        })
    }

    const handleCancle = () => {
        navigate("/instructor")
    }




    return (
        <div >
            <section className='banner relative flex flex-col items-center justify-center mt-10'>
                <div className='bg-gray-100  w-[60vw] '>

                    <form className='ml-5 mr-5' onSubmit={handleUpdate} >
                        <h2 className='text-4xl font-bold text-center py-6'>Update Profile</h2>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>

                                <label className='pl-5'>First Name</label>
                                <TextField required
                                    id="firstName"
                                    name="firstName"
                                    value={formd.firstName}
                                    onChange={e => setFormd({ ...formd, firstName: e.target.value })}
                                    fullWidth

                                />

                            </Grid>

                            <Grid item xs={12} sm={6}>

                                <label className='pl-5'>Last Name</label>
                                <TextField required
                                    id="lastName"
                                    name="lastName"
                                    value={formd.lastName}
                                    onChange={e => setFormd({ ...formd, lastName: e.target.value })}
                                    fullWidth

                                />

                            </Grid>


                            <Grid item xs={12} sm={6}>

                                <label className='pl-5'>City</label>
                                <TextField required
                                    id="city"
                                    name="city"
                                    value={formd.city}
                                    onChange={e => setFormd({ ...formd, city: e.target.value })}
                                    fullWidth

                                />

                            </Grid>



                            <Grid item xs={12} sm={6}>

                                <label className='pl-5'>State</label>
                                <TextField required
                                    id="state"
                                    name="state"
                                    value={formd.state}
                                    onChange={e => setFormd({ ...formd, state: e.target.value })}
                                    fullWidth

                                />

                            </Grid>

                            <Grid item xs={12} sm={6}>

                                <label className='pl-5'>Crop Specialist</label>
                                <TextField required
                                    id="spacialist"
                                    name="spacialist"
                                    value={formd.speciliest}
                                    onChange={e => setFormd({ ...formd, speciliest: e.target.value })}
                                    fullWidth

                                />

                            </Grid>

                            <Grid item xs={12} sm={6}>

                                <label className='pl-5'>Experience</label>
                                <TextField required
                                    id="experience"
                                    name="experience"
                                    value={formd.experiance}
                                    onChange={e => setFormd({ ...formd, experiance: e.target.value })}
                                    fullWidth
                                    type='number'
                                />

                            </Grid>

                            <Grid item xs={12} sm={6}>

                                <label className='pl-5'>Email</label>
                                <TextField required
                                    id="email"
                                    name="email"
                                    value={formd.email}
                                    onChange={e => setFormd({ ...formd, email: e.target.value })}
                                    type='email'
                                    fullWidth

                                />

                            </Grid>

                            <Grid item xs={12} sm={6}>

                                <label className='pl-5'>Phone Number</label>
                                <TextField required
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    value={formd.phoneNumber}
                                    onChange={e => setFormd({ ...formd, phoneNumber: e.target.value })}
                                    fullWidth

                                />

                            </Grid>

                            <Grid item xs={12} sm={6}>


                                <label className='pl-5'>Open to work</label>
                                <Select required
                                    id="available"
                                    name="available"
                                    value={formd.openToWork || ""}
                                    onChange={e => setFormd({ ...formd, openToWork: e.target.value })}
                                    fullWidth

                                >
                                    <MenuItem value={"yes"}>Available</MenuItem>
                                    <MenuItem value={"no"}>Not Available</MenuItem>


                                </Select>

                            </Grid>




                            <Grid item xs={12} >

                                <Button sx={{ py: 1.5, mt: 2, bgcolor: "rgb(145 85 253)" }} size='large' variant='contained'
                                    type='submit'>Update</Button>

                                <Button sx={{ py: 1.5, mt: 2, bgcolor: "rgb(145 85 253)", marginLeft: 5 }} size='large' variant='contained'
                                    onClick={handleCancle}> Cancel</Button>

                            </Grid>



                        </Grid>
                    </form>


                </div>
            </section>
        </div>

    )
}

export default InstructorEditProfile
