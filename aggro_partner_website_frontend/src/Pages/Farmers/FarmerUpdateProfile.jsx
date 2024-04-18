import { Button, Grid, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { myAxios } from '../../Services/helper'
import { useNavigate } from 'react-router-dom'
import { updateFarmerProfile } from '../../Services/FarmerService'
import { toast } from 'react-toastify'

const FarmerUpdateProfile = () => {

    const navigate = useNavigate();

    const userData = JSON.parse(localStorage.getItem("data"));
    var setFarmerId = userData.id;

    const [formd, setFormd] = useState([]);

    useEffect(() => {
        myAxios.get("/getFarmerProfileById/" + setFarmerId).then((response) => {
            setFormd(response.data)
        }).catch((error) => {

        })
    }, [])


    const handleUpdate = (e) => {
        e.preventDefault();

        const data = new FormData(e.currentTarget);

        const profile = {
            farmerFirstName: data.get("firstName"),
            farmerLastName: data.get("lastName"),
            farmerCity: data.get("city"),
            farmerDist: data.get("dist"),
            farmerState: data.get("state"),
            farmerPhoneNumber: data.get("phoneNumber"),
            farmerCrops: data.get("crop"),
            farmerArea: data.get("area"),

        }

        updateFarmerProfile(profile, formd.id).then((response)=>{
            navigate("/farmer")
            toast.success("Profile Update Successfull ......")
        }).catch((error)=>{
            toast.error("Profile Update Faild ...!!!")
        })

    }

    const handleCancle = () => {
        navigate("/farmer")
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
                                    value={formd.farmerFirstName || ""}
                                    onChange={e => setFormd({ ...formd, farmerFirstName: e.target.value })}
                                    fullWidth

                                />

                            </Grid>

                            <Grid item xs={12} sm={6}>

                                <label className='pl-5'>Last Name</label>
                                <TextField required
                                    id="lastName"
                                    name="lastName"
                                    value={formd.farmerLastName || ""}
                                    onChange={e => setFormd({ ...formd, farmerLastName: e.target.value })}
                                    fullWidth

                                />

                            </Grid>


                            <Grid item xs={12} sm={6}>

                            <label className='pl-5'>City</label>
                                <TextField required
                                    id="city"
                                    name="city"
                                    value={formd.farmerCity || ""}
                                    onChange={e => setFormd({ ...formd, farmerCity: e.target.value })}
                                    fullWidth

                                />

                            </Grid>


                            <Grid item xs={12} sm={6}>

                            <label className='pl-5'>District</label>
                                <TextField required
                                    id="dist"
                                    name="dist"
                                    value={formd.farmerDist || ""}
                                    onChange={e => setFormd({ ...formd, farmerDist: e.target.value })}
                                    fullWidth

                                />

                            </Grid>


                            <Grid item xs={12} sm={6}>

                            <label className='pl-5'>State</label>
                                <TextField required
                                    id="state"
                                    name="state"
                                    value={formd.farmerState || ""}
                                    onChange={e => setFormd({ ...formd, farmerState: e.target.value })}
                                    fullWidth

                                />

                            </Grid>


                            <Grid item xs={12} sm={6}>

                            <label className='pl-5'>Phone Number</label>
                                <TextField required
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    value={formd.farmerPhoneNumber || ""}
                                    onChange={e => setFormd({ ...formd, farmerPhoneNumber: e.target.value })}
                                    fullWidth

                                />

                            </Grid>

                            <Grid item xs={12} sm={6}>

                            <label className='pl-5'>Crops In Farm</label>
                                <TextField required
                                    id="crop"
                                    name="crop"
                                    value={formd.farmerCrops || ""}
                                    onChange={e => setFormd({ ...formd, farmerCrops: e.target.value })}
                                    fullWidth

                                />

                            </Grid>

                            <Grid item xs={12} sm={6}>

                            <label className='pl-5'>Field Area in Acers</label>
                                <TextField required
                                    id="area"
                                    name="area"
                                    value={formd.farmerArea || ""}
                                    onChange={e => setFormd({ ...formd, farmerArea: e.target.value })}
                                    type="number"
                                    fullWidth

                                />

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

export default FarmerUpdateProfile
