import { Button, Grid, MenuItem, Select, TextField } from '@mui/material'
import React from 'react'
import { saveInstructorProfile } from '../../Services/InstructorService';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const InstructorProfileCreate = () => {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData(e.currentTarget);

        const userData = JSON.parse(localStorage.getItem("data"));
        var setFarmerId = userData.id;
        
        const profile={
            instructorFirstName: data.get("firstName"),
            instructorLastName: data.get("lastName"),
            instructorSpeciliest: data.get("spacialist"),
            instructorExperiance: data.get("experience"),
            instructorEmail: data.get("email"),
            instructorPhoneNumber: data.get("phoneNumber"),
            instructorCity: data.get("city"),
            instructorState: data.get("state"),
            instructorOpenToWork: data.get("available"),
            instructorId: setFarmerId,
            
        }
        

        

        saveInstructorProfile(profile).then((response)=>{
            navigate("/instructor")
            toast.success("Profile Created Successfull...")
        }).catch((error)=>{
            toast.error("Profile Created Faild ..!!")
        })

    }


    return (
        <div >
            <section className='banner relative flex flex-col items-center justify-center mt-5'>
                <div className='bg-gray-100  w-[60vw] '>

                    <form className='ml-5 mr-5' onSubmit={handleSubmit} >
                        <h2 className='text-4xl font-bold text-center py-6'>Create Profile</h2>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>

                                <TextField required
                                    id="firstName"
                                    name="firstName"
                                    label="First Name"
                                    fullWidth

                                />

                            </Grid>

                            <Grid item xs={12} sm={6}>

                                <TextField required
                                    id="lastName"
                                    name="lastName"
                                    label="Last Name"
                                    fullWidth

                                />

                            </Grid>


                            <Grid item xs={12} sm={6}>

                                <TextField required
                                    id="city"
                                    name="city"
                                    label="City"
                                    fullWidth

                                />

                            </Grid>

                          

                            <Grid item xs={12} sm={6}>

                                <TextField required
                                    id="state"
                                    name="state"
                                    label="State / Province / Region"
                                    fullWidth

                                />

                            </Grid>

                            <Grid item xs={12} sm={6}>

                                <TextField required
                                    id="spacialist"
                                    name="spacialist"
                                    label="Crop Spacialist"
                                    fullWidth

                                />

                            </Grid>

                            <Grid item xs={12} sm={6}>

                                <TextField required
                                    id="experience"
                                    name="experience"
                                    label="Year of Experience"
                                    fullWidth
                                    type='number'
                                />

                            </Grid>

                            <Grid item xs={12} sm={6}>

                                <TextField required
                                    id="email"
                                    name="email"
                                    label="Email"
                                    type='email'
                                    fullWidth

                                />

                            </Grid>

                            <Grid item xs={12} sm={6}>

                                <TextField required
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    label="Phone Number" 
                                    fullWidth

                                />

                            </Grid>

                            <Grid item xs={12} sm={6}>


                                <label className='pl-5'>Open to work</label>
                                <Select required
                                    id="available"
                                    name="available"
                                    label="Open to Work "
                                    fullWidth

                                >
                                    <MenuItem value={"yes"}>Available</MenuItem>
                                    <MenuItem value={"no"}>Not Available</MenuItem>
                                    

                                </Select>

                            </Grid>

                            <Grid item xs={12} sm={6}>

                                <input hidden id='instructorId' name='instructorId'/>

                            </Grid>
                         

                            <Grid item xs={12} >

                                <Button sx={{ py: 1.5, mt: 2, bgcolor: "rgb(145 85 253)" }} size='large' variant='contained'
                                    type='submit'>Register</Button>

                            </Grid>



                        </Grid>
                    </form>


                </div>
            </section>
        </div>

    )
}

export default InstructorProfileCreate
