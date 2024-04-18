import { Button, Grid, MenuItem, Select, TextField } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { createFarmerProfile } from '../../Services/FarmerService';
import { toast } from 'react-toastify';

const FarmerCreateProfile = () => {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData(e.currentTarget);

        const userData = JSON.parse(localStorage.getItem("data"));
        var setFarmerId = userData.id;

        const profile = {
            farmerFirstName: data.get("firstName"),
            farmerLastName: data.get("lastName"),
            farmerCity: data.get("city"),
            farmerDist: data.get("dist"),
            farmerState: data.get("state"),
            farmerPhoneNumber: data.get("phoneNumber"),
            farmerCrops: data.get("crop"),
            farmerArea: data.get("area"),
            farmerId: setFarmerId,

        }




        createFarmerProfile(profile).then((response) => {
            navigate("/farmer")
            toast.success("Profile Created Successfull...")
        }).catch((error) => {
            toast.error("Profile Created Faild ..!!")
        })

    }


    return (
        <div>
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
                                        id="dist"
                                        name="dist"
                                        label="District"
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
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        label="Phone Number"
                                        fullWidth

                                    />

                                </Grid>

                                <Grid item xs={12} sm={6}>

                                    <TextField required
                                        id="crop"
                                        name="crop"
                                        label="Crops in Farm"

                                        fullWidth

                                    />

                                </Grid>

                                <Grid item xs={12} sm={6}>

                                    <TextField required
                                        id="area"
                                        name="area"
                                        label="Field Area in acers"
                                        type="number"
                                        fullWidth

                                    />

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

        </div>
    )
}

export default FarmerCreateProfile
